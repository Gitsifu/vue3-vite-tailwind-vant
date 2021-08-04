<template>
    <van-config-provider :theme-vars="themeVars">
        <div class="tw-mt-[50px] tw-text-blue-500 tw-divide-x tw-text-center">
            <router-link class="tw-pr-4" to="/">home</router-link>
            <router-link class="tw-pl-4" to="/about">about</router-link>
        </div>
        <router-view></router-view>
    </van-config-provider>
</template>

<script>
import themeVars from './commom/theme.js'

export default {
    name: 'App',
    components: {
    },
    data() {
        return {
            themeVars: themeVars
        }
    }
}
</script>
