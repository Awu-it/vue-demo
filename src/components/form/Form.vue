<!--  -->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  // provide 选项允许我们指定我们想要提供给后代组件的数据/方法。   对比$parent,不用暴露整个组件实例
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  methods: {
    validate(cb) {
      // $children当前实例的直接子组件
      const tasks = this.$children
        .filter((item) => item.prop)
        .map((item) => item.validate());
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>
<style lang='scss' scoped>
</style>