<template>
    <div>
        <HelloWorld msg="Hello Vue 3.0 + Vite + tailwind css + vant"/>
    </div>
</template>

<script lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
import {defineComponent} from "vue";
export default defineComponent({
    name: "Home",
    components: {HelloWorld},
    setup() {
        return {}
    }
})
</script>

<style scoped>

</style>
