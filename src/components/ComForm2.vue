<!-- 登录、注册使用共同的表单组件，其中按钮是利用组件通信实现的 -->
<template>
  <div class="comForm">
    <!-- 插槽分发内容 -->
    <slot></slot>
    <!-- v-on v-model应用 -->
    <a-form-model layout="inline" :model="userForm">
      <a-form-model-item>
        <a-input
          v-model.trim="userForm.email"
          placeholder="Email"
          @keyup.ctrl.delete="userForm.email = ''"
        >
          <!-- @keyup.delete="userForm.email=''" -->
          <!-- 捕获退格和delete -->
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-input
          v-model="userForm.passWord"
          type="passWord"
          placeholder="passWord"
          @keyup.ctrl.delete="userForm.passWord = ''"
        >
          <!-- @keyup.exact.delete="userForm.passWord=''" -->
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-model-item>
      <!-- 父子组件间通信 父对子props 子对父$emit -->
      <a-form-model-item>
        <a-button
          type="primary"
          html-type="submit"
          @click="$emit('submitButton', userForm)"
          @click.native.prevent
          :disabled="userForm.email === '' || userForm.passWord === ''"
        >
          {{ checkMsg }}
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: "ComForm",
  // 父组件通过props向子组件传递数据
  props: {
    checkMsg: String,
  },
  data() {
    return {
      userForm: {
        email: "935420684@qq.com",
        passWord: "www123.",
      },
    };
  },
};
</script>


<style scoped lang="scss">
</style>
