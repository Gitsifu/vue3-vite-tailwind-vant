<template>
    <div class="tw-flex tw-flex-col tw-items-center">
        <img class="tw-mt-[50px]" src="../assets/logo.png" />
        <div class="tw-m-[50px] tw-text-3xl">{{ msg }}</div>
        <van-button type="primary" @click="count++">count is: {{ count }}</van-button><br/>
        <van-button type="primary" @click="increment()">storeCount is: {{ storeCount }}</van-button>
    </div>
</template>

<script>
import { useStore }  from"vuex"
import {computed,ref} from "vue";
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
        }
    },
    setup(props,ctx) {
        const store = useStore()

        const count = ref(0)

        const storeCount = computed(() => store.state.count)

        const increment = () => {
            store.commit('increment')
        }

        return {
            count,
            storeCount,
            increment
        }
    }
}
</script>
