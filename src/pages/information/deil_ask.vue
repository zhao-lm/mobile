<template>
    <div class="content-box">
        <common-header tittle="销售订单详情"></common-header>
        <p class="tit_item1">
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
        <p class="tit_item1">
            <i></i>
            <span>
                <span class="span1">数量金额</span>
            </span>
        </p>
        <div v-for="(item,key) in data.encoeList" :key="key" class="detailed">
            <p>
                <span>订单数量</span>
                <span>{{item.encoded}}</span>
            </p>
            <p style="border-bottom: 1px solid #e1e1e1;">
                <span>订单总金额</span>
                <span>{{item.encod}}</span>
            </p>
        </div>
        <p class="tit_item1">
            <i></i>
            <span>
                <span class="span1">其他明细</span>
            </span>
        </p>
        <div class="detailede">
            <div style="border-top: 1px solid #e1e1e1;" class="detive">
                <ul style="padding: 10px 32px;">
                    <li v-for="(item,key) in linlist" :key="key" @click="active=key">
                        <img :src="require('../../'+(active==key?item.ac_img:item.i_img))" alt="">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
                <div v-if="active==0" class="item"  style="padding:15px;padding-top:0px;">
                        <p>
                            <span>名称</span>
                            <span>{{data.lineNumber}}</span>
                        </p>
                        <p>
                            <span>编码</span>
                            <span>{{data.encoded}}</span>
                        </p>
                </div>
                <div v-if="active==1" class="item">
                        <p style="padding:0 15px;">
                            <span>名称</span>
                            <span>IPHONE 13 STARLIGHT 128GB-CHN</span>
                        </p>
                        <p style="padding:0 15px;">
                            <span>编码</span>
                            <span>7403017380</span>
                        </p>
                         <div class="tit_item1">
                            <i></i>
                            <span>
                                <span class="span1">厂家信息</span>
                            </span>
                        </div>
                        <div class="detailed" v-for="(item,key) in data.encoeList" :key="key" style="padding:15px;">
                            <p>
                                <span>单据是否传输厂家</span>
                                <span>是</span>
                            </p>
                            <p>
                                <span>邮件是否发送</span>
                                <span>是</span>
                            </p>
                            <p>
                                <span>短信是否发送</span>
                                <span>是</span>
                            </p>
                            <p style="border-bottom: 1px solid #e1e1e1;">
                                <span>厂家是否发货</span>
                                <span>是</span>
                            </p>
                        </div>
                </div>
                <div v-if="active==2" class="item">
                    <div class="detailed" v-for="(item,key) in data.encoeList" :key="key" style="padding:15px;padding-top:0px;">
                            <p>
                                <span>方式</span>
                                <span>配送</span>
                            </p>
                            <p>
                                <span>待发</span>
                                <span>40 件</span>
                            </p>
                            <p style="border-bottom: 1px solid #e1e1e1;">
                                <span>已发</span>
                                <span>0 件</span>
                            </p>
                        </div>
                </div>
                <div v-if="active==3" class="item">
                    <div class="detailed" v-for="(item,key) in data.encoeList" :key="key" style="padding:15px;padding-top:0px;">
                            <p>
                                <span>地点</span>
                                <span>上海省仓</span>
                            </p>
                            <p>
                                <span>库位</span>
                                <span>业务周转库（定期清理)</span>
                            </p>
                            <p style="border-bottom: 1px solid #e1e1e1;">
                                <span>库存</span>
                                <span>0 件</span>
                            </p>
                        </div>
                </div>
                <div v-if="active==4" class="item">
                    <div class="detailed" v-for="(item,key) in data.encoeList" :key="key" style="padding:15px;padding-top:0px;">
                            <p>
                                <span>省份</span>
                                <span>安徽</span>
                            </p>
                            <p>
                                <span>城市</span>
                                <span>芜湖市</span>
                            </p>
                            <p>
                                <span>区县</span>
                                <span>镜湖区</span>
                            </p>
                            <p style="border-bottom: 1px solid #e1e1e1;">
                                <span>地址</span>
                                <span>中山路步行街57号五星电器3楼</span>
                            </p>
                        </div>
                </div>
            </div>
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
                lineNumber: '京东五星电器集团有限公司',
                money: '6000',
                encoded:'5003000024',
                type: '经销采购 (NB)',
                name: '深圳市爱施德股份有限公司',
                number: 20,
                place: '吉林省仓',
                location: '全新良品库',
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
                }],
            },
            linlist: [
                { i_img: 'assets/detailImg/产品默认.png', ac_img: 'assets/detailImg/产品选中.png', name: '产品' },
                { i_img: 'assets/detailImg/供应商默认.png', ac_img: 'assets/detailImg/供应商选中.png', name: '供应商' },
                { i_img: 'assets/detailImg/数量默认.png', ac_img: 'assets/detailImg/数量选中.png', name: '数量' },
                { i_img: 'assets/detailImg/仓库默认.png', ac_img: 'assets/detailImg/仓库选中.png', name: '仓库' },
                { i_img: 'assets/detailImg/合同默认.png', ac_img: 'assets/detailImg/合同选中.png', name: '合同' }
            ],
            active: 0,
            show: false
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
                width:200px;
            }
        }
    }
    .arrow{
        position: absolute !important;
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
    .van-icon{
        position: absolute !important;
    }
    .tit_item1{
        line-height: 48px;
        background:#fff;
        display:block;
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
.detailed{
  background: #fff;
  padding: 20px;
   & > p{
       height: 0.8rem;
        display: flex;
        align-items: center;
         & > span {
                        display: block;
                        border-top: 1px solid #e1e1e1;
                        border-left: 1px solid #e1e1e1;
                        height: 100%;
                        line-height: 0.8rem;
                        padding-left: 0.3rem;
                    }
                    & > span:nth-of-type(1) {
                        width: 25%;
                        font-size: 24px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #999999;
                    }
                    & > span:nth-of-type(2) {
                        width: 75%;
                        border-right: 1px solid #e1e1e1;
                        
                        font-size: 24px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #000000;
                    }
   } 
}
.detailede{
      & > .detive{
          background: #fff;
        & > ul {
                display: flex;
                align-items: center;
                & > li {
                    height: 1.2rem;
                    width: 20%;
                    flex: 1;
                    text-align: center;
                    font-size: 24px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #000000;
                    img {
                        width: 36px;
                        height: 36px;
                        margin: 8px 0px;
                    }
                }
            }
            & .item {
                margin-top: 26px;
                & > p {
                    height: 0.8rem;
                    display: flex;
                    align-items: center;
                    & > span {
                        display: block;
                        border-top: 1px solid #e1e1e1;
                        border-left: 1px solid #e1e1e1;
                        height: 100%;
                        line-height: 0.8rem;
                        padding-left: 0.3rem;
                    }
                    & > span:nth-of-type(1) {
                        width: 25%;
                        font-size: 24px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #999999;
                    }
                    & > span:nth-of-type(2) {
                        width: 75%;
                        border-right: 1px solid #e1e1e1;
                        font-size: 24px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #000000;
                    }
                }
                & > p:nth-last-of-type(1) {
                    & > span {
                        border-bottom: 1px solid #e1e1e1;
                    }
                }
            }
            .items {
                & > p {
                    & > span:nth-of-type(1) {
                        width: 75%;
                    }
                    & > span:nth-of-type(2) {
                        width: 25%;
                        color: #999999;
                    }
                }
            }

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
