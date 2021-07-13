<!-- 分页组件 -->
<template>
  <div class="Paging">
    <span>共 {{ total }} 条</span>
    <!-- 组件中的v-model 使用了prop+$emit+computer的方式 -->
    <select v-model="size1" style="margin: 10px" @change="$emit('changeSize')">
      <option disabled value="size"></option>
      <!-- value默认是字符串，传数值要用v-bind绑定 -->
      <option :value="page1">3</option>
      <option :value="page2">5</option>
      <option :value="page3">10</option>
    </select>
    <span @click="$emit('lastPage')">《</span>
    <span> {{ index }} </span>
    <span @click="$emit('nextPage')">》</span>
  </div>
</template>

<script>
export default {
  name: "Paging",
  props: {
    total: Number,
    size: Number,
    index: Number,
  },
  emits: ["update:size"],
  computed: {
    size1: {
      get() {
        return this.size;
      },
      set(size1) {
        this.$emit("update:size", size1);
      },
    },
  },
  data() {
    return {
      page1: 3,
      page2: 5,
      page3: 10,
    };
  },
};
</script>
<style lang='scss' scoped>
</style>