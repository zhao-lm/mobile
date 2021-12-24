<template>
   <div class="box">
        <common-header @sureClick='onSureClick' :showRightTitle="true" :rightTitle='rightTitle' :tittle="tittle" :showback="true" :showright='true'></common-header>
        <div class="head">
            <div class="rightContent">
                <div class="phoneItem">
                    <div class="itemLeft">
                        <img src="../../assets/logoImg/360.png" alt="">
                        
                    </div>
                    <div class="itemRight">
                        <div class="itemTitle">我是一颗小小的石头深深的埋在一处食我千年以后偶偶偶
                            是一颗小小的石头深深的埋在一处食我千年以后偶偶偶是一颗小小的石头深深的埋在一处食我千年以后偶偶偶
                        </div>
                        <div class="itemBot">
                            <div class="itemNum">5437268</div>
                            <div class="itemPrice">3000￥</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="leftMain">
                <div>供应商名称</div>
                <div>合同编码</div>
                <div>生效日期</div>
                <div>经代码</div>
            </div>
            <div class="rightMain">
                <div>宁夏理工大学</div>
                <div>1234567</div>
                <div>7654321</div>
                <div>经销</div>
            </div>
        </div>
   </div>
</template>

<script>
 import '@/utils/rem';
import commonHeader from '@/components/common-header'
export default {
    data(){
        return {
             tittle: '合同验证',
             rightTitle:'下一步'
        }
    },
    methods:{
     //点击确定的时候
     onSureClick(){
         console.log('我是点击确定的时间')
     }
    },
     components: {
        commonHeader
    },
    mounted(){

    }
}
</script>

<style scoped>
.head {
  margin-top: 0.15rem;
  width: 96%;
  background: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.08rem    ;
    margin-left: 2%;
}

.rightContent {
  width: 100%;

}
.phoneItem {
  height: 1.4rem;
  width: 98%;
  margin: 0 1%;
  display: flex;
  align-items: center;
}
.itemLeft {
  height: 1rem;
  width: 1rem;
  margin-top: 0.15rem;
}
.itemLeft img {
  margin-left: 0.15rem;
  height: 1rem;
  width: 1rem;
  display: inline-block;
}
.itemRight {
  height: 1rem;
  margin-left: 0.15rem;
}
.itemTitle {
  min-height: 0.65rem;
  width: 100%;
  font-size: 0.2rem;
  font-weight: 600;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.itemBot {
  height: 0.35rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.itemNum {
  font-size: 0.14rem;
  color: #ccc;
}
.itemPrice {
  font-size: 0.16rem;
  color: red;
}
.title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title div:nth-child(1) {
  font-size: 0.11rem;
  color: #999999;
  height: 0.4rem;
  margin-left: 4%;
  line-height: 0.4rem;
}
.title div:nth-child(2) {
  font-size: 0.11rem;
  color: #999999;
  height: 0.4rem;
  margin-right: 4%;
  line-height: 0.4rem;
}
.main{
    margin-top: 0.2rem;
    margin-left: 2%;
    width: 96%;
    background: white;
    height: 2.8rem;
    border-radius: 0.08rem;
    display: flex;
}
.leftMain{
    height: 100%;
    width: 30%;
    border-right: 0.01rem #ccc dashed;
    padding: 0.2rem 0.15rem 0.2rem 0.25rem;
}
.leftMain div{
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.16rem;
    color: #ccc;
}
.rightMain{
    height: 100%;
    width: 70%;
    padding: 0.2rem 0rem 0.2rem 0.2rem;
}
.rightMain div{
    font-size: 0.16rem;
    height: 0.6rem;
    line-height: 0.6rem;
}
</style>