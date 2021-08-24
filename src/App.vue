<template>
    <van-config-provider :theme-vars="themeVars">
        <div class="tw-flex tw-items-center tw-justify-center tw-mt-[50px]">
            <div>灰色主题：</div>
            <van-switch v-model="checked" @change="changeTheme"/>
        </div>
        <div class="tw-mt-[50px] tw-text-blue-500 tw-divide-x tw-text-center">
            <router-link class="tw-pr-4" to="/">home</router-link>
            <router-link class="tw-pl-4" to="/about">about</router-link>
        </div>
        <router-view/>
    </van-config-provider>
</template>

<script lang="ts">
import vantTheme from './commom/vantTheme.ts'
import {defineComponent, reactive, ref} from "vue";

export default defineComponent({
    name: 'App',
    components: {},
    props: {},
    setup(props, ctx) {
        const themeVars = reactive<object>(vantTheme)
        let checked = ref<boolean>(false)
        const changeTheme = (val: boolean) => {
            if (val) {
                document.querySelector('html').classList.add('g-grey')
            } else {
                document.querySelector('html').classList.remove('g-grey')
            }
        }
        return {
            themeVars,
            checked,
            changeTheme
        }
    },
})
</script>
