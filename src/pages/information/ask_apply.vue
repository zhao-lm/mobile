<template>
    <div class="content-box">
        <common-header tittle="销售订单"></common-header>
        <div class="page-content pur_box1">
            <div class="pro_head" style="margin-top:5px;background: transparent;">
                <p>
                    <input type="text" placeholder="输入订单号、客户名称/编码、产品品牌/型号">
                    <span>搜索</span>
                </p>
            </div>
            <div style="overflow:hidden;margin-top:5px;padding-top:9px;">
                <van-tabs v-model="active" @change="getData()" title-active-color='#d82138' style="width:50%;float:left;">
                    <van-tab title="全部"></van-tab>
                    <van-tab title="今天"></van-tab>
                    <van-tab title="本周"></van-tab>
                </van-tabs>
                <div class="rBtn" style="width:50%;float:left;height:30px;line-height:26px;text-align:right;padding-right:20px;">
                    <p style="display: inline-block" @click="handleClick">筛选 ></p>
                    <mt-popup
                        v-model="popupVisible"
                        popup-transition="popup-fade"
                        closeOnClickModal="true"
                        position="bottom"
                    >
                        <mt-picker
                        @change="onValuesChange"
                        style="width: 10rem; height: 10rem"
                        showToolbar
                        >
                        <div class="picker-toolbar-title">
                            <div class="usi-btn-cancel" @click="cncle()">取消</div>
                            <div class="">筛选</div>
                        </div>
                        <div class="rundlost">
                            <p >订单编号</p>
                            <input type="text" placeholder="S211221000034">
                            <p style="margin-top:20px;">客户信息</p>
                            <input type="text" placeholder="中国联通网络通信有限公司北京市分公司">
                            <p style="margin-top:20px;">产品信息</p>
                            <input type="text" placeholder="IPHONE">
                        </div>
                        <div class="picker-toolbar-buttom">
                            <div class="usi-btn-cancel" @click="cncle()">重置</div>
                            <div class="usi-btn-sure" @click="addSave()">确认</div>
                        </div>
                        </mt-picker>
                    </mt-popup>
             </div>
                
            </div>
            
            <div class="item" v-for="(item,key) in arr" :key="key">
                <div>
                    <p>
                        <span>订单编号：</span>
                        <span>{{item.code}}</span>
                    </p>
                   <span style="color: #D82138;">
                        待发货0件
                    </span>
                </div>
                <div>
                    <div @click="goPush(item)">
                        <div>
                            <img v-for="(val,index) in item.imgList" :key="index" :src="require('../../'+val)" alt="">
                        </div>
                        <div v-if="item.imgList.length<=1" class="content" style="flex:1;">
                            {{item.name}}
                        </div>
                        <div>
                          <span style="display:block;text-align:right;margin-bottom:5px;">共{{item.number}}件</span>
                           <span style="display:block;"> ￥{{item.money}}</span>
                        </div>
                    </div>
                    <div>
                        <span>申请时间：{{item.applicationTime}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import commonHeader from 'common/common-header';
import list from '../../assets/data/orderList'
export default {
    components: {
        commonHeader
    },
    data() {
        return {
            showModal: false,
            active: 0,
            popupVisible: false,
            data: [
                {
                    code: 'PO2112210020',
                    status: 1,
                    imgList: ['assets/imgs/iphone1.png'],
                    // imgList: ['assets/imgs/iphone1.png', 'assets/imgs/iphone2.png', 'assets/imgs/iphone3.png', 'assets/imgs/iphone4.png'],
                    content: '荣耀60 Pro（12GB+256GB）幻境星空',
                    money: '60.000.00',
                    lisnull:'待发货10件',
                    applicationTime: '2021-12-21 11:27',
                    num: 20
                },
                {
                    code: 'PO2112210020',
                    status: 2,
                    imgList: ['assets/imgs/iphone1.png', 'assets/imgs/iphone2.png', 'assets/imgs/iphone3.png', 'assets/imgs/iphone4.png'],
                    content: '荣耀60 Pro（12GB+256GB）幻境星空',
                    money: '60.000.00',
                    lisnull:'待发货0件',
                    applicationTime: '2021-12-21 11:27',
                    num: 20
                },
                {
                    code: 'PO2112210020',
                    status: 3,
                    imgList: ['assets/imgs/iphone1.png'],
                    // imgList: ['assets/imgs/iphone1.png', 'assets/imgs/iphone2.png', 'assets/imgs/iphone3.png', 'assets/imgs/iphone4.png'],
                    content: '荣耀60 Pro（12GB+256GB）幻境星空',
                    money: '60.000.00',
                    lisnull:'发货完毕',
                    applicationTime: '2021-12-21 11:27',
                    num: 20
                },
                {
                    code: 'PO2112210020',
                    status: 1,
                    imgList: ['assets/imgs/iphone1.png'],
                    // imgList: ['assets/imgs/iphone1.png', 'assets/imgs/iphone2.png', 'assets/imgs/iphone3.png', 'assets/imgs/iphone4.png'],
                    content: '荣耀60 Pro（12GB+256GB）幻境星空',
                    money: '60.000.00',
                    lisnull:'待发货0件',
                    applicationTime: '2021-12-21 11:27',
                    num: 20
                },
            ],
            arr: []
        }
    },
    created() {
        this.getData()
    },
    methods: {
         handleClick() {
            this.popupVisible = true;
        },
        cncle() {
            this.popupVisible = false;
        },
        addSave() {
            this.popupVisible = false; 
        },
        addGoodsHandler() {
        this.$router.togo("/information/ask_apply");
        },
        getData() {
            let arr = list.filter((item, key) => {
                switch (this.active) {
                    case 0:
                        return true;
                    case 1:
                        return item.status == 1;
                    case 2:
                        return item.status == 2;
                        break;
                }
            });
            this.arr = arr;
            console.log(arr)
        },
        goPush(item){
            this.$router.togo({path:'/Home/deil_ask',query:{item:JSON.stringify(item)}})
        }
    }
}
</script>

<style lang="less">
@import '~styles/index.less';
@import '~styles/variable.less';
.rundlost{
    background:#fff;
    padding:15px 20px;
    & > p{
        font-size:28px;
        font-weight:600;
        margin-bottom:15px;
        text-align: left;
    }input{
        border:1px solid #ccc;
        outline: none;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        height:78px;
        line-height:78px;
        display: block;
        border-radius: 10px;
        padding:0 10px;
        width:100%;
    }
    
}
.pro_head {
    padding: 18px 32px;
    background: #fff;
    & > p {
        height: 60px;
        border-radius: 30px;
        display: flex;
        & > input {
            outline: none;
            border: none;
            font-size: 24px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            flex: 1;
            border-radius: 30px 0px 0px 30px;
            padding-left: 32px;
        }
        & > span {
            padding: 0 30px;
            line-height: 60px;
            font-size: 28px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #d82138;
            background:#fff;
            border-radius: 0px 30px 30px 0px;
        }
    }
}
* {touch-action: pan-y;}
.pur_box1 {
    padding-bottom: 100px;
    & > div:nth-of-type(1) {
        margin-top: 0;
    }
    & > div {
        background: #fff;
        margin-top: 20px;
        & > img {
            width: 100%;
            height: 100%;
            vertical-align: middle;
        }
    }
    .van-tabs__wrap {
        height: 60px;
        line-height: 60px;
    }
     .van-tab__text--ellipsis {
        overflow: visible;
        font-size: 28px;
    }
    .van-tabs__line {
        height: 4px;
    }
    .item {
        // height: 117px;
        height: 234px;
        & > div:nth-of-type(1) {
            padding: 16px 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            & > p:nth-of-type(1) {
                & > img {
                    width: 28px;
                    vertical-align: bottom;
                }
                font-size: 24px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                & > span:nth-of-type(1) {
                    color: #000000;
                }
                & > span:nth-of-type(2) {
                    color: #999999;
                }
            }
            & > span {
                font-size: 24px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
            }
        }
        & > div:nth-of-type(2) {
            padding: 28px 36px;
            & > div:nth-of-type(1) {
                display: flex;
                justify-content: space-between;
                & > div:nth-of-type(1) {
                    img {
                        width: 48px;
                        height: 72px;
                        margin-right: 28px;
                    }
                    .content {
                        font-size: 26px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #000000;
                    }
                    & > div:nth-last-of-type(1) {
                        font-size: 28px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #666666;
                    }
                }
            }
            & > div:nth-of-type(2) {
                margin-top: 0px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 20px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #999999;
                & > span:nth-of-type(1) {
                    padding-left: 0px;
                }
                & > span:nth-of-type(2) {
                    font-size: 24px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #999999;
                }
            }
        }
    }
    .van-tab__text--ellipsis {
        overflow: visible;
    }
    .pop {
        background-color: #fff;
        position: fixed;
        top: 50%;
        left: 50%;
        width: calc(100% - 30px);
        height:calc(100% - 200px);
        transform: translate(-50%,-50%);
        z-index: 2
    }
    .mask{
        background-color: #ccc;
        position: fixed;
        top: 0;
        left: 0;
        right:0;
        bottom:0;
        z-index: 1;
    }
    .lastButton{
        position: fixed;
        bottom: 20px;
        left:0;
        text-align: center;
        width:100%;
        & > button{
            height: 60px;
            line-height: 60px;
            border-radius: 50px;
            outline: none;
            border:0 none;
            border: 2px solid #ef1236;
            font-size: 28px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
        }
        & > button:first-of-type{
            width:30%;
            color: #d82138;
            background: #fff;
        }
        & > button:last-of-type{
            width:60%;
            background: #d82138;
            color: #fff;
        }
    }
    .picker-toolbar-title{
        position: relative;
        & > div{
            text-align: center;
            font-size: 32px;
            display: inline-block;
        }
        & > div:first-of-type{
            position: absolute;
            width: 10%;
            top: 10px;
            left: 20px;
        }
        & > div:last-of-type{
            position: absolute;
            width: 10%;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .picker-toolbar-buttom{
        overflow: hidden;
        margin-top: 20px;
        padding: 0 20px;
        & > div{
            width: 30%;
            float: left;
            text-align: center;
            border-radius: 1rem;
            font-size: 28px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            border: 2px solid #ef1236;
        }
         & > div:first-of-type{
            color: #d82138;
            margin-right: 2%;
        }
        & > div:last-of-type{
            width: 68%;
            background: #d82138;
            color: #fff;
        }
    }
}
</style>