<template>
    <div class="tw-flex tw-flex-col tw-items-center">
        <div class="tw-m-[100px] tw-text-3xl">{{ msg }}</div>
        <van-button type="primary" @click="count++">count is: {{ count }}</van-button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            count: 0
        }
    }
}
</script>
