<template>
  <div class="register">
    <ComForm checkMsg='Register' @submitButton='register'>欢迎注册~</ComForm>
  </div>
</template>

<script>

import ComForm from '@/components/ComForm.vue'

export default {
  components: {
    ComForm
  },
  methods: {
    // 注册
    async register(userForm) {
      const { data : res } = await this.$http.post(
          "registered",
          userForm
        )
      console.log(res)
      if(res.code !== 1) return  this.$message.info(res.msg)
      this.$message.info(res.msg)
      // 跳转到登录
      this.$router.push("/login");
    },
  }
}
</script>
