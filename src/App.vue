<template>
  <div id="app">
    <router-view />
    <Cascader :options="options" placeholder="策略动作" @change="onChange" />
    <div>555</div>
    <div>555</div>
    <div>555</div>
    <div>555</div>
    <div>555</div>
  </div>
</template>

<script>
import Cascader from "./views/cascaderIcon.vue";

export default {
  components: {
    Cascader,
  },
  data() {
    return {
      options: [
        {
          icon: "user",
          value: "告警",
          label: "告警",
          children: [
            {
              value: "弹窗告警",
              label: "弹窗告警",
            },
            {
              value: "短信告警",
              label: "短信告警",
            },
            {
              value: "邮件告警",
              label: "邮件告警",
            },
          ],
        },
        {
          icon: "user",
          value: "远程操作",
          label: "远程操作",
          children: [
            {
              value: "软件推送",
              label: "软件推送",
            },
            {
              value: "命令下发",
              label: "命令下发",
            },
          ],
        },
        {
          icon: "user",
          value: "时间计划",
          label: "时间计划",
        },
        {
          icon: "user",
          value: "联动操作",
          label: "联动操作",
          children: [
            {
              value: "虚拟机关机",
              label: "虚拟机关机",
            },
            {
              value: "虚拟机开机",
              label: "虚拟机开机",
            },
            {
              value: "虚拟机重启",
              label: "虚拟机重启",
            },
            {
              value: "虚拟机挂起",
              label: "虚拟机挂起",
            },
          ],
        },
        {
          icon: "user",
          value: "阻断",
          label: "阻断",
        },
      ],
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // /deep/ .ant-btn-primary{
  //   background-color: red;
  // }
  .cascader {
    margin: 0 auto;
  }
  background-color: #f0f2f5;
}
</style>
