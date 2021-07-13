<!-- 表单项 为Input留插槽 展示label和校验信息 能够校验 -->
<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="errorMassage" style="color: red">{{ errorMassage }}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  // 接受先代传来的数据
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      errorMassage: "",
    };
  },
  mounted() {
    // 监听校验事件
    this.$on("validate", this.validate);
  },
  methods: {
    // 做校验
    validate() {
      const value = this.form.model && this.form.model[this.prop];
      const rules = this.form.rules[this.prop];
      const desc = { [this.prop]: rules };
      const schema = new Schema(desc);
      return schema.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.errorMassage = errors[0].message;
        } else {
          this.errorMassage = "";
        }
      });
    },
  },
};
</script>
<style lang='scss' scoped>
</style>