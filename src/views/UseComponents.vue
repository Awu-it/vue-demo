<!-- 组件应用demo -->
<template>
    <div class='UseComponents'>
        <!-- 表单组件 -->
        <FromSample></FromSample>
    </div>
</template>

<script>
import  FromSample from '../components/form'

export default {
    components: {
        FromSample
    },
    data() {
        return {
        };
    },
}
</script>
<style lang='scss' scoped>
</style>