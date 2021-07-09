<template>
  <div class="comForm">
    <!-- v-on v-model应用 -->
    {{msg}}
    <a-form-model layout="inline" :model="userForm" >
    <a-form-model-item>
      <a-input v-model.trim="userForm.email" placeholder="Email" @keyup.ctrl.delete="userForm.email=''" >  <!-- @keyup.delete="userForm.email=''" -->  <!-- 捕获退格和delete -->
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-input v-model="userForm.passWord" type="passWord" placeholder="passWord" 
      @keyup.ctrl.delete="userForm.passWord=''" @keyup.enter='enterForm'>    <!-- @keyup.exact.delete="userForm.passWord=''" -->
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <!-- v-if应用 -->
    <a-form-model-item>
      <a-button
        type="primary" v-if="$route.path === '/login'"
        html-type="submit" @click="debouncedLogin" @click.native.prevent
        :disabled="userForm.email === '' || userForm.passWord === ''"
      >
        Log in
      </a-button>

      <a-button
        type="primary" v-if="$route.path === '/register'"
        html-type="submit" @click="debouncedRegister" @click.native.prevent
        :disabled="userForm.email === '' || userForm.passWord === ''"
      >
        Register
      </a-button>
    </a-form-model-item>
  </a-form-model>
  </div>
</template>

<script>
export default {
  name: 'ComForm',
  // 父组件通过props向子组件传递数据
  props: {
    msg: String
  },
  data() {
    return {
      userForm: {
        email: '935420684@qq.com',
        passWord: 'www123.',
      },
    };
  },
  created () {
    // 用 Lodash 的防抖函数
    this.debouncedLogin = this._.debounce(this.login,150)
    this.debouncedRegister = this._.debounce(this.register,150)
  },
  unmounted() {
    // 移除组件时，取消定时器
    this.debouncedLogin.cancel()
    this.debouncedRegister.cancel()
  },
  methods: {
    // 登录
    async login() {
      const { data : res } = await this.$http.post(
          "login",
          this.userForm
        )
      console.log(res)
      if(res.code !== 1) return  this.$message.info(res.msg)
      this.$message.info(res.msg)
      // 跳转到首页
      this.$router.push("/home");
    },
    // 注册
    async register() {
      const { data : res } = await this.$http.post(
          "registered",
          this.userForm
        )
      console.log(res)
      if(res.code !== 1) return  this.$message.info(res.msg)
      this.$message.info(res.msg)
      // 跳转到登录
      this.$router.push("/login");
      
    },
    // 按键回车登录/注册
    enterForm(){
      if(this.$route.path === '/login') return this.debouncedLogin()
      if(this.$route.path === '/register') return this.debouncedRegister()
    }

  },
}
</script>


<style scoped lang="scss">

</style>
