<template>
    <van-config-provider :theme-vars="themeVars">
        <HelloWorld msg="Hello Vue 3.0 + Vite + tailwind css + vant"/>
    </van-config-provider>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import themeVars from './commom/theme.js'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    data() {
        return {
            themeVars: themeVars
        }
    }
}
</script>
