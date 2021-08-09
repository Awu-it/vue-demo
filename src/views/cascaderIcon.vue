<template>
  <div class="cascaderIcon">
    <button @click="downDrop" class="cascaderButton">
      {{this.placeholder}}
      <a-icon :type="buttonIcon" class="cascaderButtonIcon"/>
    </button>
    <div class="cascaderContainer" v-if="isCascaderShow">
      <!-- 一级 -->
      <ul class="oneLevelUl cascaderMenu">
        <li
          v-for="(item, index) in options"
          :key="index"
          @click="clickOneLevelLi(item.children, item.value,index)"
          :class="{oneLevelLi:true,cascaderMenuItem:true,activedStyle:selectIndex === index}"
        >
          <div>
            <a-icon :type="item.icon" class="oneLevelIcon"/>
            <span>{{ item.label }}</span>
          </div>
          <div>
            <a-icon v-if="item.children" type="right" style="font-size:10px"/>
          </div>
        </li>
      </ul>
      <!-- 二级 -->
      <ul v-if="isTwoLevelShow" class="twoLevelUl cascaderMenu">
        <li
          v-for="(item, index) in twoLevel"
          :key="index"
          @click="clickTwoLevelLi(item.value)"
          class="twoLevelLi cascaderMenuItem"
        >
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'Cascader',
  props:{
    options:Array,
    placeholder:String
  },
    
  data() {
    return {
      buttonIcon: "down",
      // 选中一级菜单的某一项，为点击项添加一个类
      selectIndex:0,
      isCascaderShow: false,
      isTwoLevelShow: false,
      twoLevel: [],
      
    };
  },
  methods: {
    // 下拉菜单
    downDrop() {
      if (this.buttonIcon === "down") {
        this.buttonIcon = "up";
        this.isCascaderShow = true;
        this.selectIndex = null;
      } else {
        this.buttonIcon = "down";
        this.isCascaderShow = false;
        this.isTwoLevelShow = false;
        this.selectIndex = null;
      }
    },
    // 选中一级菜单
    clickOneLevelLi(children,value,index) {
      if (children) {
        this.isTwoLevelShow = true;
        this.twoLevel = children;
        this.selectIndex = index;
      } else {
        this.isCascaderShow = false;
        this.isTwoLevelShow = false;
        this.selectIndex = null;
        this.$emit('change',value)
      }
    },
    // 选中二级菜单
    clickTwoLevelLi(value) {
      this.buttonIcon = "down";
      this.isCascaderShow = false;
      this.isTwoLevelShow = false;
      this.selectIndex = null;
      this.$emit('change',value)
    },
  },
};
</script>

<style lang='scss' scoped>
.cascaderButton {
  background-color: #f0f2f5;
  border-radius: 5px;
  border: 2px solid #3372fc;
  color: #3372fc;
  height: 40px;
  padding: 0 10px;
  font-size: 16px;
}
.cascaderButton:hover {
  cursor: pointer;
}

.cascaderMenu {
    list-style-type: none;
    padding: 5px 0;
    margin: 0;
    font-size: 14px;
    width: 110px;
    .cascaderMenuItem {
      padding: 5px 7px;
      line-height: 22px;
      
    }
    .activedStyle{
      font-weight:bold;
    }
  }
.cascaderMenuItem:hover {
  cursor: pointer;
  background-color: #f0f7ff;
}

.cascaderIcon {
  .cascaderButtonIcon{
    font-size: 14px;
    padding-left: 4px;
  }
  .cascaderContainer {
    display: flex;
    position: absolute;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0px 0px 6px 4px #e8e8e8;
    margin-top: 4px;

    .oneLevelUl {
      .oneLevelLi {
        display: flex;
        justify-content: space-between;
        .oneLevelIcon{
          padding-right: 5px;
        }
      }
    }
    .twoLevelUl {
      border-left: 1px solid #e8e8e8;
    }
  }
}
</style>
