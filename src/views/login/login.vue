<template>
  <!-- <img src="@img/login.jpg" class="h-screen bg-cover" alt=""> -->
  <div
    class="h-screen w-screen bg-cover bg-center flex justify-center items-center"
    style="background-image: url(src/assets/img/login.jpg)"
  >
    <div
      class="object-center mx-auto w-96 h-1/2 p-2 rounded-3xl bg-gray-50 bg-opacity-100 border-gray-300"
    >
      <!-- 头像 -->
      <div class="h-2/6 w-full flex justify-center">
        <div
          class="h-16 w-16 rounded-full bg-black bg-cover translate-y-12"
          style="background-image: url(src/assets/img/loginUser.jpg)"
        ></div>
      </div>
      <!-- 表单 -->
      <div class="w-full h-3/5 -mt-6">
        <el-form
          ref="ruleFormRef"
          :model="formParams"
          label-width="60px"
          :rules="rules"
          class="pt-6"
        >
          <el-form-item class="w-10/12" prop="username">
            <el-input
              v-model="formParams.username"
              placeholder="请输入用户名"
            />
          </el-form-item>
          <el-form-item class="w-10/12 pt-2" prop="password">
            <el-input
              v-model="formParams.password"
              show-password
              placeholder="请输入密码"
            />
          </el-form-item>
        </el-form>
        <div class="w-full flex justify-center items-center mt-8">
          <el-button
            class="w-8/12 h-12"
            round
            size="large"
            @click="onSubmit(ruleFormRef)"
            >登录</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
  computed,
} from "vue";
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from "pinia";
import { useUserStore } from "../../pinia/modules/user";
import { loginByUsername } from "../../api/user/index";
import type { FormInstance, FormRules } from "element-plus";
import { LoginParam } from "./type";

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const res = await loginByUsername(formParams);
      const {
        data: { data, token },
      } = res;
      useUser.setToken(token);
    } else {
      console.log("error");
    }
  });
};
const formParams = reactive<LoginParam>({
  username: "",
  password: "",
});
const useUser = useUserStore();
const { nowToken, userInfoObj } = storeToRefs(useUser);
const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  username: [{ required: true, message: "请填写用户名", trigger: "blur" }],
  password: [{ required: true, message: "请填写密码", trigger: "blur" }],
});

/**
 * 路由对象
 */
const route = useRoute();
/**
 * 路由实例
 */
const router = useRouter();
//console.log('1-开始创建组件-setup')
/**
 * 数据部分
 */
const data = reactive({});
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
});
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
});
watchEffect(() => {});
// 使用toRefs解构
// let { } = { ...toRefs(data) }
defineExpose({
  ...toRefs(data),
});
</script>
<style scoped lang="scss">
:deep(.el-form .el-form-item .el-form-item__label) {
  color: #222222 !important;
}
:deep(.el-button) {
  background-color: #4e4e73;
  color: #eeeeee;
}
:deep(.el-form .el-form-item .el-form-item__content .el-input) {
  .el-input__wrapper {
    background-color: #f3f3f3 !important;
    height: 38px !important;
    border: #dddddd;
    border-radius: 42px;

    .el-input__inner {
      padding: 0 0 0 10px;
      &:focus {
        border: #4e4e73 !important;
      }
    }
  }
}
</style>
