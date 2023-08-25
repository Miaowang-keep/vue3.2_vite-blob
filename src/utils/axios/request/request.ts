/**
 * @description: Request 请求类
 * @author: 'miaowang'
 * @date : 2023-01-12 16:53:33
 */
import axios, { AxiosResponse } from "axios";
import axiosRetry from "axios-retry";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { RequestConfig, RequestInterceptors } from "./type";
import { ElNotification } from 'element-plus'

export class Request {
  // 拦截器实例
  instance: AxiosInstance;

  //拦截器对象
  interceptorsObj?: RequestInterceptors<AxiosResponse>;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    axiosRetry(axios, {
      retries: 3, //接口失败自动，重连3次
      retryDelay: () => {
        return 3 * 1000; // 重连间隔时间3s
      },
    });
    this.interceptorsObj = config.interceptors;
    // 拦截器执行顺序 接口请求 -> 实例请求 -> 全局请求 -> 实例响应 -> 全局响应 -> 接口响应
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => res,
      (err: any) => err
    );

    // 使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    );
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    );
    // 全局响应拦截器保证最后执行
    this.instance.interceptors.response.use(
      // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
      (res: AxiosResponse) => {
        //600 代表用户名密码错误
        if(res?.data && res.data.data.code === 600) {
          ElNotification({
            title: 'Error',
            message: '用户名或密码错误',
            type: 'error',
          })
        } else {
          return res.data;
        }
        
      },
      (err: any) => err
    );
  }
  /**
   * @description Request 类上的实例方法
   * @param config 为单个请求设置的配置
   * @returns promise
   */
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }
      //有拦截请求
      this.instance
        .request<any, T>(config) //  request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
        .then((res) => {
          // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
          if (config.interceptors?.responseInterceptors) {          
            res = config.interceptors.responseInterceptors<T>(res);
          }
          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        })
        .finally(() => { });
    });
  }
}
