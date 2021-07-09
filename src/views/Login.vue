<template>
  <div class="login">
    <ComForm check-msg='Login' @submitButton='login'>欢迎登录~</ComForm>
  </div>
</template>

<script>
// @ is an alias to /src
import ComForm from '@/components/ComForm.vue'

export default {
  name: 'Login',
  components: {
    ComForm
  },
  methods: {
    // 登录
    async login(userForm) {
      const { data : res } = await this.$http.post(
          "login",
          userForm
        )
      // console.log(res)
      if(res.code !== 1) return  this.$message.info(res.msg)
      this.$message.info(res.msg)
      // 保存登录token
      window.sessionStorage.setItem("token", res.data.token);
      // 跳转到首页
      this.$router.push("/home");
    },
  }
}
</script>
