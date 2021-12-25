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
              v-for="(val, index) in item.imgList" v-preview="require('../../' + val)"
               preview-title-enable="true"
               preview-nav-enable="true"
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
          <p>是否合格</p>
          <mt-button
            @click="hege()"
            :class="{ active: isActive == 1, hegebtn: hegebtn }"
            >合格</mt-button
          >
          <mt-button
            @click="nohege()"
            :class="{ active: isActive == 2, hegebtn: hegebtn }"
            >不合格</mt-button
          >
        </div>
      </div>
      <div class="reision" v-show="ishege == '2'">
        <div class="rBtn">
          <p style="display: inline-block">原因分类</p>
          <div
            style="position: relative; display: inline-block"
            @click="handleClick"
          >
            <input class="selectBtn" v-model="message" />
            <img src="../../assets/qianshou/downDrop.png" alt="" />
          </div>
          <mt-popup
            v-model="popupVisible"
            popup-transition="popup-fade"
            closeOnClickModal="true"
            position="bottom"
          >
            <mt-picker
              :slots="slots"
              @change="onValuesChange"
              style="width: 10rem; height: 10rem"
              showToolbar
            >
              <div class="picker-toolbar-title">
                <div class="usi-btn-cancel" @click="cncle()">取消</div>
                <div class="">请选择</div>
                <div class="usi-btn-sure" @click="addSave()">确认</div>
              </div>
            </mt-picker>
          </mt-popup>
        </div>

        <div style="margin-bottom: 2rem" v-show="juti">
          <mt-field
            label="具体原因"
            type="textarea"
            rows="6"
            v-model="introduction"
          ></mt-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex";
import commonHeader from "common/common-header";
import { Popup } from "mint-ui";
export default {
  data() {
    return {
      showToolbar: true,
      message: "请选择",
      slots: [
        {
          values: [
            "请选择",
            "非签收单图片",
            "电子签收单不完整",
            "图片不清晰",
            "签收标准未维护",
            "未按签收标准执行",
            "其他",
          ],
        },
      ],
      popupVisible: false,
      showContent: true,
      isActive: "1", //颜色切换
      hegebtn: true,
      ishege: "1", //原因分类是否显示
      juti: false, //选择其他的时候显示具体原因
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
  },
  methods: {
    //原因分类
    handleClick() {
      this.popupVisible = true;
    },
    //选中事件
    onValuesChange(picker, values) {
      if (values[0] == "请选择") {
        this.message = "请选择";
      } else {
        this.message = values;
      }
    },
    //取消
    cncle() {
      this.popupVisible = false;
      this.$data.message = "请选择";
      this.$data.juti = false;
    },
    //确认
    addSave() {
      this.popupVisible = false;
      if (this.$data.message == "其他") {
        this.$data.juti = true;
      } else {
        this.$data.juti = false;
      }
    },
    //待办点击事件
    addGoodsHandler() {
      this.$router.togo("/Logistics/evaluate");
    },
    //点击合格
    hege() {
      let self = this;
      self.$data.isActive = "1";
      self.$data.ishege = "1";
    },
    //点击不合格
    nohege() {
      let self = this;
      self.$data.isActive = "2";
      self.$data.ishege = "2";
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
    height: 1.5rem;
    padding-top: 0.45rem;
    padding-left: 0.3rem;
    border-radius: 0.1rem;
    & > p {
      margin-right: 0.6rem;
      display: inline-block;
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
.reision {
  margin-top: 0.2rem;
  & > div.rBtn {
    background-color: #fff;
    height: 1.5rem;
    padding-top: 0.25rem;
    padding-left: 0.3rem;
    border-radius: 0.1rem;
    & > div > .selectBtn {
      display: inline-block;
      margin-left: 0.6rem;
      border: 1px solid #ccc;
      width: 6rem;
      height: 1rem;
      padding: 0.3rem;
      border-radius: 0.2rem;
    }
    & > div > img {
      width: 0.8rem;
      height: 0.8rem;
      position: absolute;
      right: 0.1rem;
      top: 0.15rem;
    }
  }
}
.picker-toolbar-title {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  font-size: 0.5rem;
  margin-top: 0.5rem;
}

.usi-btn-cancel {
  font-size: 0.5rem;
}
.usi-btn-sure {
  color: #ff6600;
  font-size: 0.5rem;
}
.picker-slot-wrapper {
  height: 10rem !important;
  font-size: 0.5rem;
}
.mint-field-core {
  border: 1px solid #ccc;
  margin-left: 0.8rem;
  margin-right: 1.6rem;
}
</style>