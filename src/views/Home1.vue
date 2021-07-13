<template>
  <div class="home">
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
      <div class="labelPage">
        <!-- v-on v-model选择框的应用 -->
        <span>共 {{ total }} 条</span>
        <select
          v-model="queryInfo.size"
          class="selecteSize"
          @change="changeSize()"
        >
          <option disabled value="queryInfo.size"></option>
          <option>3</option>
          <option>5</option>
          <option>10</option>
        </select>
        <span @click="lastPage">《</span>
        <span> {{ queryInfo.index }} </span>
        <span @click="nextPage">》</span>
      </div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      //   columns,
      // 选中的用户
      checkedNames: [],
      // 总记录数
      total: "",
      //查询参数
      queryInfo: {
        size: "3",
        index: "1",
      },
    };
  },
  created() {
    this.getLabelList();
  },
  methods: {
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
  },
};
</script>
<style lang='scss' scoped>
.home {
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