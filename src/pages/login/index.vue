<template>
    <div class="contentBg">
        <div class="cHeader">
          <img src="../../assets/loginImg/loginBg.svg" alt="">
          <p>供应链-智慧平台</p>
        </div>
        
        <div class="loginInput">
            <div style="display:flex;margin-left:10px;">
              <img src="../../assets/loginImg/people.svg" alt="">
              <!-- <mt-field class="inputClass" placeholder="请输入账号" v-model="username"></mt-field> -->
              <input class="inputClass" type="text" placeholder="请输入账号">
            </div>
            <div style="display:flex;margin-left:10px;">
              <img src="../../assets/loginImg/lock.svg" alt="">
              <!-- <mt-field class="inputClass" placeholder="请输入密码" :type="password" v-modal="password"></mt-field> -->
              <input class="inputClass" :type="password" placeholder="请输入密码">
              <img style="margin-right:0.2rem;border-bottom: 1px solid #ccc;" @click="toShow" src="../../assets/loginImg/eye.svg" alt="">
            </div>
            <mt-button type="danger" @click="toLogin">登 录</mt-button>
        </div>
         <!-- <mt-button @click="toLogin">登录</mt-button> -->
    </div>
 
</template>

<script>
export default {
  components: {},
  data() {
    return {
      password: 'password'
    };
  },
  methods: {
      toLogin() {
          this.$router.togo({ path: '/login/guide1' })
      },
      //密码显隐的切换
      toShow() {
        if(this.$data.password == 'password') {
          this.$data.password = 'text';
        } else {
          this.$data.password = 'password';
        }
      }
  }
};
</script>


<style lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.contentBg {
  background: url('~@/assets/loginImg/logoSky.png');
  background-size:100% 100%;
  background-color: #fff;
  width:100%;
  height:120%;
  .mint-field-core {
    font-size:30px;
  }
  .mint-button-text {
    font-size: 36px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
  }
  .mint-button--danger {
    margin-top: 80px;
    width: 598px;
    height: 84px;
    background: linear-gradient(270deg, #FD7F63 0%, #F6565C 100%);
    border-radius: 42px;
    line-height: 50px;
  }
  .inputClass {
    font-size: 35px;
    border-bottom: 2px solid #ccc;
    margin-left:18px;
    height:75px;
    width:90%;
  }
}
.cHeader {
  text-align: center;
  & > img {
    margin-top:120px;
    width: 300px;
    height:144px;
  }
  & > p {
    font-size: 45px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: bold;
    margin-top:40px;
    color: #d82138;
  }
}
.loginInput {
  background-color: #fff;
  height: 428px;
  margin: 0 auto;
  text-align: center;
  margin-top: 200px;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.03);
  padding-top: 40px;
}

</style>