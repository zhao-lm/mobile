<template>
  <div class="box">
        <common-header @sureClick='onSureClick'  :tittle="tittle" :showback="true" :showright='true'></common-header>
        <van-steps :active="active" active-icon="success" active-color="#38f">
                <van-step>
                    <div style="color：#38f">订单创建</div>
                    <div>董倩</div>
                    <div>2012-03-03</div>
                    <div>11：12 </div>
                </van-step>
                <van-step>商家接单</van-step>
                <van-step>买家提货</van-step>
        </van-steps>

         <div class="infoHead">
             <div class="infoLeft">
                 <span></span>
                 <div class="infoTitle">仓库信息</div>
             </div>
             <div class="infoRight">
                 2031586556
             </div>
         </div>

         <div class="swiper">
             <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
              </van-swipe>
         </div>

         <div class="content">
              <div class="infoHeads">
                 <span></span>
                 <div class="infoTitle">采购明细</div>
              </div>
              <div class="item">
                  <div class="product">
                      <img src="../../assets/logoImg/product.png" alt="">
                      <span>产品</span>
                  </div>
                   <div class="product">
                      <img src="" alt="">
                      <span>产品</span>
                  </div>
                   <div class="product">
                      <img src="" alt="">
                      <span>产品</span>
                  </div>
                   <div class="product">
                      <img src="" alt="">
                      <span>产品</span>
                  </div>
                   <div class="product">
                      <img src="" alt="">
                      <span>产品</span>
                  </div>
              </div>
              <div class="main">
                <div class="itemMain">
                    <div>aa</div>
                    <div>bbbbb</div>
                </div>
              </div>
         </div>
                            
  </div>
</template>

<script>
import commonHeader from '@/components/common-header'
export default {
  data() {
    return {
        tittle:'采购详情',
        active:1
    };
  },
  methods: {},
   components: {
        commonHeader
    },
  mounted() {}
};
</script>

<style scoped>
.box{
    height: 100%;
    width: 100%;
    background: #ccc;
}
/deep/ .van-steps--horizontal{
    padding: 0!important;
}
/deep/ .van-step__title{
    margin-top: 0.5rem !important;
}
/deep/ .van-steps--horizontal .van-steps__items{
    padding: 0 0.2rem;
    padding-bottom: 0rem!important;
}
.infoLeft{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.infoHeads{
    background: white ;
    height: 0.8rem;
    width: 100%;
    /* border-bottom: 0.01rem #ccc dashed; */
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    margin-top: 0.2rem;
}

.infoHeads span {
    height: 0.25rem;
    width: 0.04rem;
    background: red;
    margin-left: 0.2rem;
    /* margin-top: 0.26rem; */
}

.infoHead{
    background: white ;
    height: 0.8rem;
    width: 100%;
    /* border-bottom: 0.01rem #ccc dashed; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.2rem;
}

.infoHead span {
    height: 0.25rem;
    width: 0.04rem;
    background: red;
    margin-left: 0.2rem;
    /* margin-top: 0.26rem; */
}
.infoTitle{
    font-size: 0.22rem;
    margin-left: 0.1rem;
    font-weight: 600;
    line-height: 0.8rem;
}
.infoRight{
    font-size: 0.14rem;
    color: #9e9e9e;
    margin-right: 0.2rem;
}
.swiper{
    height: 3.2rem;
    width: 100%;
    /* margin-top: 0.2rem; */
    background: white;
}
.item{
   height: 1rem;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
}
.item div{
    width: 20%;
    height: 0.8rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-left:1px solid #ccc;
} 
.item div:not(:last-child){
    
}
.product{
    height: 0.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-left: 0.01rem solid #ccc;
}
.product img{
    height: 0.4rem;
    width: 0.4rem;
    display: inline-block;
}
.content{
    margin-top: 0.2rem;
    background: white;
}
.main{
     width: 96%;
    margin-left: 2%;
    margin-top: 0.1rem;
    padding-bottom: 0.2rem;
}
.itemMain{
    height: 0.6rem;
    width: 100%;
    border: 1px solid #ccc;
    display: flex;
}
.itemMain div:nth-child(1){
   height: 0.6rem;
   width: 30%;
   margin-left: 0.01rem solid #ccc;
   font-size: 0.16rem;
   color: #ccc;
   line-height: 0.6rem;
   text-indent: 0.15rem;
}
.itemMain div:nth-child(2){
   height: 0.6rem;
   width: 70%;
   border-left: 0.01rem solid #ccc;
   color: #ccc;
      line-height: 0.6rem;
   text-indent: 0.15rem;
}


</style>
