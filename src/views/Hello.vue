<template>
  <div id="hello">
    <div id="nav">
      <router-link to="/login">登录</router-link> |
      <router-link to="/hello/register">注册</router-link>

      <!-- <router-link :to="{name:'Login'}">登录</router-link> |
      <router-link :to="{name:'Register'}">注册</router-link> -->
    </div>
    <router-view />
    <br />
    <br />
    <router-link to="/useComponents">go to "表单验证组件"</router-link>
    <br />
    <router-link to="/vuexTodos">go to "Vuex任务列表案例"</router-link>
  </div>
</template>

<style lang="scss">
#hello {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #1890ff;
    }
  }
}
</style>
