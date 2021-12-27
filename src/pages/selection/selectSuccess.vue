<template>
  <div class="main">
        <common-header @sureClick='onSureClick'  :tittle="tittle" :showback="true" :showright='true'></common-header>
       <div class="logo">
           <img src="../../assets/logoImg/yes.png" alt="">
           <div class="order">
                订单申请提交成功
           </div>
       <div class="orderNO">订单  PO2112210020 【Z090】</div>
       </div>
    <div class="button">
        <div class="sure">确定</div>
        <div @click="toDetail" class="toDetail">查看申请</div>
    </div>
                            
  </div>
</template>

<script>
import commonHeader from '@/components/common-header'
export default {
  data() {
    return {
        tittle:'选品采购'
    };
  },
  methods: {
      toDetail(){
           this.$router.push({
             path:'/selection/selectInfo'
         })
      }
  },
   components: {
        commonHeader
    },
  mounted() {}
};
</script>

<style scoped>
.main{
    height: 100%;
    width: 100%;
    background: white;
}
.logo{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30%;
    margin-left: 30%;
}

.logo img{
    height: 0.4rem;
    width: 0.4rem;
    display: inline-block;
}
.order{
    font-size: 0.24rem;
    font-weight: 600;
    margin-top: 0.4rem;
}
.orderNo{
    font-size: 0.16rem;
    color:#9e9e9e;
    margin-top: 0.4rem;
}
.button{
    height: 1rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center; 
    justify-content: space-around;
}
.sure{
    height: 0.7rem;
    width: 40%;
    border-radius: 0.5rem;
    border: 1px solid red;
    font-size: 0.16rem;
    color: red;
    text-align: center;
    line-height: 0.7rem;
    margin-top: 0.15rem;
}
.toDetail{
    height: 0.7rem;
    width: 40%;
    border-radius: 0.5rem;
    border: 1px solid red;
    font-size: 0.16rem;
    color: red;
    text-align: center;
    line-height: 0.7rem;
    margin-top: 0.15rem;
}
</style>
