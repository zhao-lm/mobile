<template>
    <div class="content-box">
      <common-header tittle="评价运单" :showContent="showContent"></common-header>
      <div class="page-content stor_box">
        <div class="item content" v-for="(item, key) in arr" :key="key">
          <div>
            <p>运单编号：{{ item.code }}</p>
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
          </div>
        </div>
        <div class="eResult">
          <p>评价结果</p>
          <div class="eBtn">
            <p>是否合格：{{hege}}</p>
            <p v-show="hege=='不合格'">原因分类：其他</p>
            <p v-show="hege=='不合格'">具体原因：非本单签收单</p>
          </div>
        </div>
        <div class='hecha'>
          <p>核查信息</p>
          <div class="hBtn">
            <p>核查人员：乔士兰</p>
            <p>核查时间：2021-12-25 11:57</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import commonHeader from "common/common-header";
  export default {
    data() {
      return {
        hege:'',
        active: 0,
        data: [
          {
            code: "JDV003530362356",
            hscode: "4961081535",
            status: 1,
            imgList: ["assets/qianshou/qianshou3.jpg"],
            applicationTime: "2021-12-21 11:27",
            isqualified: "0",
            clickFlag: true,
          },
        ],
        arr: [],
      };
    },
    created() {
      this.getData();
      this.init();
    },
    methods: {
      init() {
        if(this.$route.params.flag == '1') {
            this.$data.hege = '合格'
        } else {
           this.$data.hege = '不合格'
        }
      },
      //数据初始化加载
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
    height: 234px;
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
.eResult {
  & > p {
    font-size: 0.4rem;
    padding: 0.3rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
  }
  & > div.eBtn {
    background-color: #fff;
    padding: 0.5rem;
    padding-top:0.1rem;
    border-radius: 0.1rem;
    & > p {
      margin-right: 0.6rem;
      margin-top:0.5rem;
    }
    & > .hegebtn {
      width: 2rem;
      height: 0.6rem;
      line-height: 0.2rem;
      border-radius: 0.2rem;
      margin-right: 0.2rem;
    }
    & > .active {
      color: #d82138;
      border: 1px solid #d82138;
      background-color: #fff;
    }
  }
}
.hecha > p {
   font-size: 0.4rem;
   padding: 0.3rem;
   font-family: PingFangSC-Regular, PingFang SC;
   font-weight: 400; 
}
.hecha .hBtn {
    background-color: #fff;
    padding: 0.5rem;
    padding-top:0.1rem;
    border-radius: 0.1rem;
}
.hecha .hBtn p {
    margin-right: 0.6rem;
    margin-top:0.5rem;
}
</style>