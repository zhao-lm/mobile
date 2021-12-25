<template>
  <div class="content-box">
    <div class="header-box">
      <div class="left-icon">
        <i @click="back" class="mintui mintui-back"></i>
      </div>
      <div class="header-tittle">
        <span>评价运单</span>
      </div>
      <div class="right-icon">
        <span v-if="showmore" class="icon"></span>
        <span v-if="showContent" class="headerText" @click="tijiao">提交</span>
      </div>
    </div>
    <div class="contMsg">
      <img src="../../assets/detailImg/对勾备份.png" alt="" />
      <p class="succMsg">评价提交成功</p>
      <p class="ddMsg">订单 JDV004366274578</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    tijiao() {
      this.$router.togo("/Logistics/loginsuccess");
    },
    back() {
       this.$router.togo("/Logistics/loglist") 
    }
  },
  components: {},
};
</script>
<style lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.header-box {
  text-align: center;
  width: 100%;
  .h(100);
  .lh(100);
  background-color: #fff;
  color: #000;
  .fs(@base-header-size);
  display: flex;
  z-index: 1;
  .left-icon {
    position: relative;
    flex: 1;
    .icon-back {
      position: absolute;
      display: inline-block;
      .w(50);
      .h(50);
      .left(25);
      .top(25);
      background-image: url("../../assets/imgs/w-back.svg");
      background-size: cover;
    }
  }
  .header-tittle {
    flex: 3;
  }
  .right-icon {
    position: relative;
    flex: 1;
    .icon {
      position: absolute;
      display: inline-block;
      .w(50);
      .h(50);
      .right(25);
      .top(25);
      background-image: url("../../assets/imgs/more.svg");
      background-size: cover;
    }
  }
  .headerText {
    color: red;
  }
}
.content-box {
  background-color: #fff;
  text-align: center;
}
.contMsg {
  margin-top: 4rem;
}
.succMsg {
  margin-top: 0.5rem;
  font-size: 0.5rem;
  font-weight: bold;
}
.ddMsg {
  margin-top: 0.5rem;
  font-size: 0.4rem;
}
</style>
