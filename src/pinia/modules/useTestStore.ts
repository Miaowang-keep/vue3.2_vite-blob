import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useTestStoreForSetup = defineStore('testStoreForSetup', () => {

    const resetCount = {
        testCount: 1
    }

    //这里是定义的state
    const testCount = ref<number>(1)

    //这里相当于action
    function increment(val: number) {
        testCount.value = testCount.value + val
    }
    function reset() {
        testCount.value = resetCount.testCount
    }
    //这里相当于getter
    const doubleTestCount = computed(() => { testCount.value * 2 })

    return { testCount, increment, reset, doubleTestCount }

})