<template>
    <div class="tw-flex tw-flex-col tw-items-center">
        <img class="tw-mt-[50px]" src="../assets/logo.png"/>
        <div class="tw-m-[50px] tw-text-3xl">{{ msg }}</div>
        <van-button type="primary" @click="increment()">count is: {{ count }}</van-button>
        <br/>
        <van-button type="primary" @click="storeIncrement()">storeCount is: {{ storeCount }}</van-button>
    </div>
</template>

<script lang="ts" setup>
import {useStore} from "vuex"
import {computed, ref, defineProps} from "vue";
const props = defineProps({
    msg: {
        type: String,
        required: true
    }
})
const store = useStore()

const count = ref<number>(0)

const storeCount = computed(() => store.state.count)

const increment = () => {
    count.value++
}

const storeIncrement = () => {
    store.commit('increment')
}
</script>
