<!-- 表单组件入口 -->
<template>
  <div class="k-form-demo">
    <h3>表单</h3>
    <hr />
    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
        <k-input
          v-model="model.username"
          autocomplete="off"
          placeholder="输入用户名"
        ></k-input>
      </k-form-item>
      <k-form-item label="确认密码" prop="password">
        <k-input
          v-model="model.password"
          autocomplete="off"
          placeholder="输入密码"
        ></k-input>
      </k-form-item>
      <k-form-item>
        <br />
        <button @click="submitForm('loginForm')" class="k-button">提交</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KForm from "./Form.vue";
import KFormItem from "./FormItem.vue";
import KInput from "./Input.vue";

export default {
  components: {
    KForm,
    KFormItem,
    KInput,
  },
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }],
      },
    };
  },
  methods: {
    submitForm(form) {
      //$refs 一个对象，持有注册过 ref attribute 的所有 DOM 元素和组件实例
      this.$refs[form].validate((valid) => {
        if (valid) {
          alert("请求登录");
        } else {
          alert("校验失败");
        }
      });
    },
  },
};
</script>
<style>
.k-form-demo {
  background-color: red;
}
.k-button {
  border: 0;
  border-radius: 5px;
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
}
</style>