<template>
  <div class="content-box">
    <common-header tittle="运单信息"></common-header>
    <div class="page-content stor_box1">
      <van-tabs
        v-model="active"
        @change="getData()"
        title-active-color='#d82138'
        style="background: #edeff2 !important"
      >
        <van-tab title="待评价"></van-tab>
        <van-tab title="已评价"></van-tab>
      </van-tabs>
      <div class="pro_head">
        <p>
          <input type="text" placeholder="输入运单编号、华盛编号" />
          <span>搜索</span>
        </p>
      </div>
      <div class="item content" v-for="(item, key) in arr" :key="key">
        <div>
          <p>
            <span>运单编号：</span>
            <span>{{ item.code }}</span>
            <mt-button
              class="hege"
              v-if="item.isqualified == 1"
              @click="toDetail('1')"
              >合格</mt-button
            >
            <mt-button
              class="nohege"
              v-if="item.isqualified == 2"
              @click="toDetail('2')"
              >不合格</mt-button
            >
          </p>
          <p>
            <span>华盛编号：</span>
            <span>{{ item.hscode }}</span>
          </p>
          <p>
            运单图片：
            <img
              v-for="(val, index) in item.imgList"
              :key="index"
              :src="require('../../' + val)"
              alt=""
            />
          </p>
          <p>
            <span>上传时间：</span>
            <span>{{ item.applicationTime }}</span>
          </p>
          <div v-if="item.pjDiv=='1'" class="pjDiv" @click="addGoodsHandler()">
             <mt-button class="pingjia">评价</mt-button> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex";
import commonHeader from "common/common-header";
export default {
  data() {
    return {
      active: 0,
      data: [
        {
          code: "JDV004366274578",
          hscode: "DL-211021-0281",
          status: 0,
          imgList: ["assets/qianshou/qianshou1.jpg"],
          applicationTime: "2021-12-21 11:27",
          isqualified: "2",
          pjDiv: '',
        },
        {
          code: "JDV004167551402",
          hscode: "DL-210930-0112",
          status: 0,
          imgList: ["assets/qianshou/qianshou2.jpg"],
          applicationTime: "2021-12-21 11:27",
          isqualified: "1",
          pjDiv: '',
        },
        {
          code: "JDV003530362356",
          hscode: "4961081535",
          status: 1,
          imgList: ["assets/qianshou/qianshou3.jpg"],
          applicationTime: "2021-12-21 11:27",
          isqualified: "0",
          pjDiv: '1',
        },
        {
          code: "JDV004527698748",
          hscode: "DL-211102-0313",
          status: 1,
          imgList: ["assets/qianshou/qianshou4.jpg"],
          applicationTime: "2021-12-21 11:27",
          isqualified: "0",
          pjDiv: '1',
        },
      ],
      arr: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    addGoodsHandler() {
      //待办点击事件
      this.$router.togo("/Logistics/evaluate");
    },
    getData() {
      let arr = this.data.filter((item, key) => {
        if (this.active == 0) {
          return item.status == 1;
        } else {
          return item.status != 1;
        }
      });
      this.arr = arr;
    },
    //已审批点击事件
    toDetail(flag) {
      this.$router.push({ name: "logDetail", params: { flag: flag } });
    },
  },
  components: {
    commonHeader,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.pro_head {
  padding: 18px 32px;
  background: #fff;
  & > p {
    height: 60px;
    border-radius: 30px;
    border: 2px solid #d82138;
    display: flex;
    & > input {
      outline: none;
      border: none;
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      flex: 1;
      border-radius: 30px 0px 0px 30px;
      padding-left: 32px;
    }
    & > span {
      padding: 0 30px;
      line-height: 60px;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #d82138;
      border-radius: 0px 30px 30px 0px;
    }
  }
}
.stor_box1 {
  padding-bottom: 100px;
  & > div:nth-of-type(1) {
    margin-top: 0;
  }
  .van-tabs__wrap {
    height: 60px;
    border-top: 1px solid #e1e1e1;
  }
  .van-tab__text {
    font-size: 30px;
  }
  .van-tab__text--ellipsis {
    overflow: visible;
  }
  & > div.content {
    background: #fff;
    margin-top: 30px;
  }
  .item {
    height: 400px;
    padding: 30px;
    & > div > p {
      display: flex;
      margin-bottom:20px;
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      & > img {
        width: 80px;
        height: 60px;
      }
    }
  }
}
.hege {
  width: 160px !important;
  height: 55px !important;
  line-height: 30px !important;
  border-radius: 15px !important;
  margin-left:100px !important;
  background-color: #fff !important;
  .mint-button-text {
      color: #4bc756;
      font-size:30px;
  }
}
.nohege {
  width: 160px !important;
  height: 55px !important;
  line-height: 30px !important;
  border-radius: 15px !important;
  margin-left:100px !important;
  background-color: #fff !important;
  .mint-button-text {
      color: #d82138;
      font-size:30px;
  }
}
.pingjia {
    width: 160px !important;
    height: 55px !important;
    line-height: 30px !important;
    border-radius: 15px !important;
    border:1px solid #d82138 !important; 
    background-color: #fff !important;
    padding-top: 10px !important;
    .mint-button-text {
      color: #d82138;
      font-size:30px;
    }
}
.pjDiv {
    margin-top:20px;
    margin-bottom:50px;
    text-align:right;
}
</style>
