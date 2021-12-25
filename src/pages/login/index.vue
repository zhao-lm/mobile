<template>
    <div class="contentBg">
        <div class="cHeader">
          <img src="../../assets/loginImg/loginBg.svg" alt="">
          <p>供应链-智慧平台</p>
        </div>
        
        <div class="loginInput">
            <div style="display:flex;padding-left:1rem;padding-top:0.5rem">
              <img src="../../assets/loginImg/people.svg" alt="">
              <mt-field class="inputClass" placeholder="请输入账号" v-model="username"></mt-field>
            </div>
            <div style="display:flex;padding-left:1rem;">
              <img src="../../assets/loginImg/lock.svg" alt="">
              <mt-field class="inputClass" placeholder="请输入密码" :type="password" v-modal="password"></mt-field>
              <img @click="toShow" style='position: absolute;right: 1rem;top: 7.7rem;' src="../../assets/loginImg/eye.svg" alt="">
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
  background: url('../../assets/loginImg/logoSky.png') no-repeat 0 0;
  background-size:100% 100%;
  background-color: #fff;
}
.cHeader {
  text-align: center;
  & > img {
    width: 8rem;
    height:4rem;
  }
  & > p {
    font-size: 0.6rem;
    font-weight: bold;
    margin-top:0.2rem;
    color: #d82138;
  }
}
.loginInput {
  background-color: #fff;
  height: 6rem;
  margin: 0 auto;
  text-align: center;
  margin-top: 0.8rem;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.03);
}
.mint-button--danger {
  margin-top: 2rem;
  width: 6rem;
  height: 0.8rem;
  border-radius: 0.2rem;
  font-size: 0.4rem;
}
.inputClass {
  border-bottom: 1px solid #ccc;
  width: 90%;
  height: 1.2rem;
}
</style>