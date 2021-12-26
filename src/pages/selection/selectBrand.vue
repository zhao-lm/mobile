<template>
   <div class="box">
        <common-header @sureClick='onSureClick' :showRightTitle="true" :rightTitle='rightTitle' :tittle="tittle" :showback="true" :showright='true'></common-header>
        <div class="header">
            <div class="headerInput">
                <input class="headInput" type="text" placeholder="请输入产品名称或编码">
            </div>
            <div class="headSearch">
                <i  @click="search" class="mintui mintui-search"></i>
            </div>
        </div>
        <div class="content">
            <div class="leftContent">
                <div class="phoneName active">
                    <img src="../../assets/logoImg/360.png" alt="">
                    <span>360</span>
                </div>
                <div class="phoneName ">
                    <img src="../../assets/logoImg/360.png" alt="">
                    <span>360</span>
                </div>
                <div class="phoneName ">
                    <img src="../../assets/logoImg/360.png" alt="">
                    <span>360</span>
                </div>
            </div>
            <div class="rightContent">
                <div class="phoneItem">
                    <div class="itemLeft">
                        <img src="../../assets/logoImg/360.png" alt="">
                        
                    </div>
                    <div class="itemRight">
                        <div class="itemTitle">我是一颗小小的石头深深的埋在一处食我千年以后偶偶偶</div>
                        <div class="itemBot">
                            <div class="itemNum">5437268</div>
                            <div class="itemPrice">3000￥</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
import commonHeader from '@/components/common-header'
export default {
    data(){
        return {
             tittle: '我的足迹',
             rightTitle:'确定',
            //  imgArr:["../../assets/logoImg/360.png"]
        }
    },
    methods:{
     //点击确定的时候
     onSureClick(){
         this.$router.push({
             path:'/selection/selectContract'
         })
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
.header{
    height: 1rem;
    width: 100%;
    background: rgb(242 242 242);
  box-shadow:0 0 10px rgba(0 0 0, .8);
}
.headerInput{
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;   
    height: 100%;
    width: 100%; 
}
.headInput{
    height: 0.6rem;
    width: 90%;
    border-radius: 0.6rem;
    outline: none;
    border:none;
    background: white;
}
.headInput::-webkit-input-placeholder{
        color: rgb(174 175 180);
        text-indent: 0.2rem;
}
.headSearch{
    color: red;
    position: absolute;
    right: 0.65rem;
    top: 1.6rem;
}
.headSearch i{
    font-size: 0.32rem;
}
.photoName{
    margin: 0.1rem 0rem 0.1rem 0.1rem;
}
.content{
    margin-top: 0.25rem;
    display: flex;
    justify-content: space-between;
}
.leftContent{
    width: 1.4rem;
    background: white;
}
.phoneName{
    margin: 0.2rem 0rem 0.2rem 0.2rem;
}
.phoneName span{
    font-size: 0.14rem;
    display: block;
    width: 1.35rem;
    text-align: center;
    margin-top: -0.2rem;
}
.phoneName img{
    height: 0.8rem;
    width: 0.8rem;
    display: inline-block;
    margin-left: 0.35rem;
    margin-top: 0.2rem;
    /* margin:0.1rem 0 0.1rem 0.1rem  */
}
.rightContent{
    width: 8.2rem;
}
.phoneItem{
    height: 1.4rem;
    width: 93.5%;
    border-radius: 0.1rem;
    display: flex;
    align-items: center;
    border-radius: 0.2rem;
    background: white;
    margin-left: 0.2rem;
}
.itemLeft{
    height: 1rem;
    width: 1rem;
    margin-top: 0.15rem;
}
.itemLeft img{
    margin-left: 0.15rem;
    height: 1rem;
    width: 1rem;
    display: inline-block;
}
.itemRight{
    height: 1.2rem;
    margin-left: 0.15rem;
}
.itemTitle{
    min-height: 0.65rem;
    width: 98%;
    font-size: 0.2rem;
    text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.itemBot{
    height: 0.35rem;
    width: 98%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.itemNum{
    font-size: 0.16rem;
    color: #ccc;

}
.itemPrice{
    font-size: 0.16rem;
    color: red;
}
.active{
    background: rgb(242 242 242);
    height: 1.4rem;
    width: 1.4rem;
    margin:0.2rem 0 0.2rem 0.2rem
}
/* .active img{
    height: 1.1rem;
    width: 1.1rem;
    display: inline-block;
     
} */
</style>