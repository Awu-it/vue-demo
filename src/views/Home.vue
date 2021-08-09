<!-- 首页 使用了自己封装的分页组件-->
<template>
  <div class="home">
    <span>您好，{{$store.state.userName}}~ </span>
    <button @click="logout">退出</button>
    <div class="label">
      <div class="labelList">
        <table border="1" class="labelTable">
          <tr>
            <th></th>
            <th>用户名</th>
            <th>地址名称</th>
            <th>详细地址</th>
            <th>注册时间</th>
          </tr>
          <tr v-for="item in data" :key="item.id">
            <!-- v-model多个复选框的应用 -->
            <td>
              <input
                type="checkbox"
                :value="item.userName"
                v-model="checkedNames"
              />
            </td>
            <td>{{ item.userName }}</td>
            <td>{{ item.address_name }}</td>
            <td>{{ item.address_content }}</td>
            <td>{{ item.createTime }}</td>
          </tr>
        </table>
        <!-- 分页组件 -->
        <Paging
          :total="total"
          :size="queryInfo.size"
          @update:size="queryInfo.size = $event"
          :index="queryInfo.index"
          @changeSize="changeSize"
          @lastPage="lastPage"
          @nextPage="nextPage"
        ></Paging>
      </div>
      <div class="whiteBlock"></div>
      <table class="checkNames">
        <tr>
          <th>被您选中的用户</th>
        </tr>
        <tr v-for="(item, index) in checkedNames" :key="index">
          <td>{{ item }}</td>
        </tr>
      </table>
      <!-- 测试数据响应 -->
      <!-- <span>{{test}}</span>
      <button @click="testClick">添加</button> -->

    </div>

    
  </div>
</template>

<script>
import Paging from "@/components/Paging.vue";

export default {
  components: {
    Paging,
  },
  data() {
    return {
      // test:'',
      data: [],
      //   columns,
      // 选中的用户
      checkedNames: [],
      // 总记录数
      total: 0,
      //查询参数
      queryInfo: {
        size: 3,
        index: 1,
      },
    };
  },
  created() {
    this.getLabelList();
    //   console.log(this.$route);
  },
  methods: {
    // testClick(){
    //   // this.test = Object.assign({},this.test, { a: 1, b: 2 })
    //   this.test = 1
    //   console.log(this.$el.textContent );
    //   this.$nextTick(function () {
    //     console.log(this.$el.textContent ) // => '已更新'
    //   })
    // },
    // 获取标签列表
    async getLabelList() {
      // console.log(this.queryInfo);
      const { data: res } = await this.$http.get("system/label", {
        params: this.queryInfo,
      });
      // console.log(res);
      if (res.code !== 1) return this.$message.info(res.msg);
      this.data = res.data;
      this.total = res.total;
    },
    // 更改显示条数
    changeSize() {
      // 默认回到第一页
      this.queryInfo.index = 1;
      this.getLabelList();
    },
    // 下一页
    nextPage() {
      // 总页数
      let totalPage = this.total / this.queryInfo.size;
      if (this.queryInfo.index < totalPage) {
        this.queryInfo.index++;
        this.getLabelList();
      }
    },
    // 上一页
    lastPage() {
      if (this.queryInfo.index > 1) {
        this.queryInfo.index--;
        this.getLabelList();
      }
    },
    // 退出登录
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>
<style lang='scss' scoped>
.label {
  /*设置居中*/
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  .whiteBlock {
    width: 60px;
  }
  .labelList {
    .labelPage {
      .selecteSize {
        margin: 10px;
      }
    }
  }
}
</style>