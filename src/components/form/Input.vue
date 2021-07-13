<!-- Input组件实现 双向绑定 派发校验 -->
<template>
  <div>
    <!-- $attrs手动决定这些 attribute 会被赋予哪个元素 -->
    <input type="text" :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  // 禁用根元素继承 attribute
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      // 在父组件里触发校验
      this.$parent.$emit("validate");
    },
  },
};
</script>
<style lang='scss' scoped>
</style>