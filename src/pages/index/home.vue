<template>
  <div class="content-box">
    <!-- <common-header :showinput="true" :showback="false"></common-header> -->
    <div class="page-content">
      <!-- <mt-button @click="todetail">采购详情</mt-button>
      <mt-button @click="$router.togo('/Home/purchase')">采购申请</mt-button>
      <mt-button @click="$router.togo('/Home/procurement')">选品采购</mt-button>
      <mt-button @click="$router.togo('/Logistics/loglist')">物流中心</mt-button> -->
      <div class="conHeader">
        <img style="width:100%" src="../../assets/loginImg/syHeader.jpg" alt="">
      </div>
      <div class="conCenter">

        <div class="caigou" style="margin-top:0.3rem">
          <p>采购中心</p>
          <div class="caiImg">
            <div class="left">
              <img style="width:4.35rem;margin-right:0.3rem;" src="../../assets/loginImg/cai1.jpg" alt="">
            </div>
            <div class="right">
              <img style="margin-bottom:0.23rem;width:4.3rem" src="../../assets/loginImg/cai2.jpg" alt="">
              <img style="width:4.3rem" src="../../assets/loginImg/cai3.jpg" alt="">
            </div>
          </div>
        </div>

        <div class="caigou" style="margin-top:0.6rem">
          <p>仓储中心</p>
          <div class="caiImg">
            <div class="left">
              <img style="margin-bottom:0.23rem;width:4.3rem" src="../../assets/loginImg/cangchu1.jpg" alt="">
               <img style="width:4.3rem" src="../../assets/loginImg/cangchu2.jpg" alt="">
            </div>
            <div class="right">
             
              <img style="width:4.35rem;margin-left:0.3rem;" src="../../assets/loginImg/cangchu3.jpg" alt="">
            </div>
          </div>
        </div>

        <div class="caigou" style="margin-top:0.6rem">
          <p>物流中心</p>
          <div class="caiImg">
            <div class="left">
              <img style="width:4.35rem;margin-right:0.3rem;" src="../../assets/loginImg/wuliu1.jpg" alt="">
            </div>
            <div class="right">
              <img style="margin-bottom:0.23rem;width:4.3rem" src="../../assets/loginImg/wuliu2.jpg" alt="">
              <img style="width:4.3rem" src="../../assets/loginImg/wuliu3.jpg" alt="">
            </div>
          </div>
        </div>

        <div class="caigou" style="margin-top:0.6rem">
          <p>供货中心</p>
          <div class="caiImg">
            <div class="left">
              <img style="width:4.35rem;margin-right:0.3rem;" src="../../assets/loginImg/gonghuo1.jpg" alt="">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex'
export default {
  data () {
    return {
      num: 0
    }
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM'
    }),
    todetail() {
      this.$router.togo('/Home/Detail')
    }
    // login() {
    //   let params = {
    //     password: 'gs123456',
    //     storeNo: '',
    //     userName: '17326015487'
    //   }
    //   homeApi.loginUserNo(params).then((res) => {
    //     let {data} = res
    //     if (data.success === ERR_OK) {
    //       alert(data.value.token)
    //     } else {
    //     }
    //   }).catch(() => {
    //   })
    // }
  },
  components: {

  },
  computed: {
    ...mapGetters([
      'number'
    ]),
    ...mapState({
      number: state => state.home.number
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.page-content{
  .mb(98);
}
.conCenter {
  padding: 0.5rem;
  padding-top:0.2rem;
}
.caigou {
  font-size: 0.4rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 700 !important;
  color:#000;
}
.caiImg {
  display: flex;
  justify-content:space-between;
  align-items:flex-start;
  margin-top:0.2rem;
}
</style>
