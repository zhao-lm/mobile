<template>
  <div class="content-box">
    <common-header tittle="运单信息"></common-header>
    <div class="page-content stor_box">
      <van-tabs
        v-model="active"
        @change="getData()"
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
            运单编号：{{ item.code }}
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
          <p>华盛编号：{{ item.hscode }}</p>
          <p>
            运单图片：
            <img
              v-for="(val, index) in item.imgList"
              :key="index"
              :src="require('../../' + val)"
              alt=""
            />
          </p>
          <p>上传时间：{{ item.applicationTime }}</p>
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
.stor_box {
  padding-bottom: 100px;
  & > div:nth-of-type(1) {
    margin-top: 0;
  }
  .van-tabs__wrap {
    height: 60px;
    border-top: 1px solid #e1e1e1;
  }
  .van-tab__text--ellipsis {
    overflow: visible;
  }
  & > div.content {
    background: #fff;
    margin-top: 20px;
  }
  .item {
    // height: 117px;
    height: 300px;
    & > div:nth-of-type(1) {
      padding: 10px 36px;
      & > p:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      & > p {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        margin-top: 10px;
        & > .hege {
          width: 2rem;
          height: 0.6rem;
          line-height: 0.2rem;
          border-radius: 0.2rem;
          color: #4bc756;
        }
        & > .nohege {
          width: 2rem;
          height: 0.6rem;
          line-height: 0.2rem;
          border-radius: 0.2rem;
          color: #d82138;
        }
      }
      & > p:nth-of-type(3) {
        img {
          width: 48px;
          height: 72px;
          margin-right: 28px;
          vertical-align: top;
        }
      }
    }
  }
}
.pingjia {
    width: 2rem;
    height: 0.6rem;
    line-height: 0.2rem;
    border-radius: 0.2rem;
    color: #d82138;
    border:1px solid #d82138; 
    background-color: #fff;
    padding-top: 0.1rem;
}
.pjDiv {
    margin-top:0.5rem;
    margin-bottom:0.5rem;
    text-align:right;
}
</style>
