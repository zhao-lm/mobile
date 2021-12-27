<template>
  <div class="content-box">
    <div class="page-content">
      <!-- <mt-button @click="todetail">采购详情</mt-button>
      <mt-button @click="$router.togo('/Home/purchase')">采购申请</mt-button>
      <mt-button @click="$router.togo('/Home/procurement')">选品采购</mt-button>
      <mt-button @click="$router.togo('/Logistics/loglist')">物流中心</mt-button> -->
      <div class="conHeader">
        <img style="width:100%;height:100%;" src="../../assets/loginImg/syHeader.jpg" alt="">
      </div>
      <div class="conCenter">

        <div class="caigou tit_item">
          <i></i>
          <p>采购中心</p>
          <div class="caiImg">
            <div class="caileft">
              <img src="../../assets/loginImg/cai1.jpg" alt="" @click="goPush('/Home/procurement')">
            </div>
            <div class="cairight">
              <img class="imgClass1" src="../../assets/loginImg/cai2.jpg" alt="" @click="goPush('/story')">
              <img class="imgClass2" src="../../assets/loginImg/cai3.jpg" alt="" @click="goPush('/Home/purchase')">
            </div>
          </div>
        </div>

        <div class="caigou tit_item">
          <i></i>
          <p>仓储中心</p>
          <div class="caiImg">
            <div class="cairight">
              <img class="imgClass1" src="../../assets/loginImg/cangchu1.jpg" alt="">
              <img class="imgClass2" src="../../assets/loginImg/cangchu2.jpg" alt="" @click="goPush('/inventoryReport')">
            </div>
            <div class="cangleft">
              <img src="../../assets/loginImg/cangchu3.jpg" alt="">
            </div>
          </div>
        </div>

        <div class="caigou tit_item" style="margin-top:0.6rem">
          <i></i>
          <p>物流中心</p>
          <div class="caiImg">
            <div class="caileft">
              <img src="../../assets/loginImg/wuliu1.jpg" alt="" @click="goPush('/Logistics/loglist')">
            </div>
            <div class="cairight">
              <img class="imgClass1" src="../../assets/loginImg/wuliu2.jpg" alt="">
              <img class="imgClass2" src="../../assets/loginImg/wuliu3.jpg" alt="">
            </div>
          </div>
        </div>

        <div class="caigou tit_item" style="margin-top:0.6rem">
          <i></i>
          <p>供货中心</p>
          <div class="caiImg">
            <div class="gongleft">
              <img src="../../assets/loginImg/gonghuo1.jpg" alt="" @click="goPush('/Home/ask_apply')">
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
    },
    goPush(path){
        this.$router.push({path:path})
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
  padding-left:32px;
  padding-right: 32px;
  background-color: #fff;
}
.caigou {
  & > p {
    font-size: 36px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    margin-left:15px; 
  }
}
.caiImg {
  display: flex;
  justify-content:space-between;
  align-items:flex-start;
  margin-top:14px;
}
.tit_item{
    display:block;
    margin-top: 10px;
    position: relative;
    & > ::before{
        content: '';
        background: #d82138;
        width:4px;
        height:28px;
        top: 0px;
        left: 0px;
        position: absolute;
        margin-top:13px;
    }
}
.caileft {
  & > img {
    width:322px;
    height:294px;
    margin-right:30px;
  }
}
.cangleft {
  & > img {
    width:322px;
    height:294px;
    margin-left:30px;
  }
}
.gongleft {
  & > img {
    width:322px;
    height:148px;
  }
}
.cairight {
  & > .imgClass1 {
    width: 322px;
    height: 134px;
    
  }
  & > .imgClass2 {
    width: 324px;
    height: 134px;
    margin-top:16px;
  }
}
</style>
