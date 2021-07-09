<!-- 表单组件入口 -->
<template>
    <div>
        <h3>表单</h3>
        <hr>
          <k-form :model="model" :rules="rules" ref="loginForm">
              <k-form-item label="用户名" prop="username">
                  <k-input v-model="model.username" autocomplete="off" placeholder="输入用户名"></k-input>
              </k-form-item>
              <k-form-item label="确认密码" prop="password">
                  <k-input v-model="model.password" autocomplete="off" placeholder="输入密码"></k-input>
              </k-form-item>
              <k-form-item>
                  <button @click="submitForm('loginForm')">提交</button>
              </k-form-item>
          </k-form>
        
    </div>
</template>

<script>
import KForm from "./Form.vue"
import KFormItem from "./FormItem.vue"
import KInput from "./Input.vue"

export default {
    components:{
        KForm,
        KFormItem,
        KInput
    },
    data() {
        return {
            model:{
                username:'Awu',
                password:'123456',
            },
           rules:{
               username:[{required:true,message:"请输入用户名"}],
               password:[{required:true,message:"请输入密码"}]
           }
            
        };
    },
    methods:{
        submitForm(form){
            this.$refs[form].validate(valid => {
                if (valid) {
                    alert("请求登录")
                }else{
                    alert("校验失败")
                }
            })
        }
    }
}
</script>
<style lang='scss' scoped>
</style>