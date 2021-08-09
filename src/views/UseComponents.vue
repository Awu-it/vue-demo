<!-- 组件应用demo -->
<template>
  <div class="UseComponents">
    <!-- 表单组件 -->
    <FromSample></FromSample>
  </div>
</template>

<script>
import FromSample from "../components/form";

export default {
  components: {
    FromSample,
  },
  data() {
    return {};
  },
};
</script>
<style lang='scss' scoped>
// .UseComponents {
//   .k-form-demo {
//     //子组件的根元素不会受scoped影响
//     background-color: #fff;
//   }
//   /deep/ .k-button {
//     //子组件的其他元素需要深入   /deep/实际是被装换成了[data-v-2fa929b3]  在没有使用scoped的情况下，还是显示/deep/
//     background-color: red;
//   }
// }

 .k-form-demo {
    //子组件的根元素不会受scoped影响
    background-color: #fff;
  }
  /deep/ .k-button {
    //子组件的其他元素需要深入   /deep/实际是被装换成了[data-v-2fa929b3]  在没有使用scoped的情况下，还是显示/deep/
    background-color: red;
  }
</style>