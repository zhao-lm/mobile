<template>
    <div class="content-box">
        <common-header tittle="销售订单详情"></common-header>
        <p class="tit_item">
            <i></i>
            <span>
                <span class="span1">订单编号：</span><span>{{data.code}}</span>
            </span>
        </p>
        <div style=" position: relative;">
            <van-swipe class="my-swipe" ref="swiper" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,key) in data.imgList" :key="key">
                    <img :src="require('../../'+item.img)" alt="">
                    <div class="illustrate">
                        <div class="explain ">
                            <p>最低限价￥{{item.money}} <span>.00</span></p>
                        </div>
                        <div class="rectangle">
                            <span>￥{{item.money}} <span>.00</span></span>
                            <span style="margin-top:10px;">销售单价（含税）</span>
                        </div>
                    </div>
                </van-swipe-item>
            </van-swipe>
            <van-icon name="arrow-left" @click="prev()" class="arrow-left arrow"/>
            <van-icon name="arrow" @click="next()" class="arrow arrow-right"/>
        </div>
        <p class="tit_item">
            <i></i>
            <span>
                <span class="span1">数量金额</span>
            </span>
        </p>
        <div v-for="(item,key) in data.encoeList" :key="key">
            <p>
                <span>订单数量</span>
                <span>{{data.encoded}}</span>
            </p>
            <p>
                <span>订单总金额</span>
                <span>{{data.encod}}</span>
            </p>
        </div>
    </div>
</template>
<script>
import commonHeader from 'common/common-header'
export default{
    components: {
        commonHeader
    },
    data(){
        return{
            data:{
                code: 'PO2112210020',
               
                imgList: [{
                    img:'assets/imgs/iphone1.png',
                    money:'5989',
                },{
                    img:'assets/imgs/iphone2.png',
                    money:'5989',
                },{
                    img:'assets/imgs/iphone3.png',
                    money:'5989',
                },{
                    img:'assets/imgs/iphone4.png',
                    money:'5989',
                 }
                ],
                encoeList:[{
                     encoded:'20',
                    encod:'139.980.00',
                },{
                     encoded:'20',
                     encod:'139.980.00',
                }]

            }
        }
    },
    methods:{
        prev() {
            this.$refs.swiper.prev()
        },
        next() {
            this.$refs.swiper.next()
        }
    }
}
</script>
<style lang="less">
    .my-swipe {
        border-bottom: 1px solid #e1e1e1;
        position: relative;
        .van-swipe-item {
            font-size: 20px;
            line-height: 1rem;
            text-align: center;
            background-color: #fff;
            & img {
                height: 336px;
            }
        }
    }
    .arrow{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 32px;
    }
    .arrow-left{
            left: 48px;
    }
    .arrow-right{
        right: 48px;
    }
    .tit_item{
        line-height: 48px;
        background:#fff;
        display:block;
        flex: 1;
        margin-top: 10px;
        position: relative;
        padding-left:20px;
        & > ::before{
            content: '';
            background: #d82138;
            width:4px;
            height:28px;
            top: 0;
            left: 5px;
            position: absolute;
            margin-top:10px;
        }
    }
.illustrate{ 
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    & > div{
        width: 40%;
        background: #d82138;
        color: #fff;
        line-height: 48px;
       
        
    }
    & > div:first-of-type{
        width: 60%;
        text-align: left;
        padding-left: 20px;
    }
    & > div:last-of-type{
        height: 78px;
        position: absolute;
        bottom: 0;
        right: 0;
        padding-top: 10px;
        & > span{
            height: 20px;
            line-height: 20px;
            display: block; 
        }
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: -76px;
            height: 78px;
            width: 50px;
            border-left: 78px solid transparent;
            border-bottom: 78px solid #d82138;
        }
    }
}
</style>
