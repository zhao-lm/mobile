<template>
    <div class="content-box">
        <common-header tittle="采购申请"></common-header>
        <div class="page-content pur_box">
            <van-tabs v-model="active" @change="getData()" title-active-color='#d82138'>
                <van-tab title="全部"></van-tab>
                <van-tab title="待审批"></van-tab>
                <van-tab title="已通过"></van-tab>
                <van-tab title="已驳回"></van-tab>
            </van-tabs>
            <div>
                <img src="../../assets/imgs/phone.png" alt="">
            </div>
            <div class="item" v-for="(item,key) in arr" :key="key" @click="goPush(item)">
                <div>
                    <p>
                        <img src="../../assets/imgs/订单管理.png" alt="">
                        <span>订单编号：</span>
                        <span>{{item.code}}</span>
                    </p>
                    <span v-if="item.status == 1" style="color: #F5854A;">
                        待审批
                    </span>
                    <span v-if="item.status == 2" style="color: #4BC756;">
                        已通过
                    </span>
                    <span v-if="item.status == 3" style="color: #D82138;">
                        已驳回
                    </span>
                </div>
                <div>
                    <div>
                        <div>
                            <img v-for="(val,index) in item.imgList" :key="index" :src="require('../../'+val)" alt="">
                        </div>
                        <div v-if="item.imgList.length<=1" class="content">
                            {{item.content}}
                        </div>
                        <div>
                            ￥{{item.money}}
                        </div>
                    </div>
                    <div>
                        <span>申请时间：{{item.applicationTime}}</span>
                        <span>x{{item.num}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import commonHeader from 'common/common-header'
export default {
    components: {
        commonHeader
    },
    data() {
        return {
            active: 0,
            data: [
                {
                    code: 'PO2112210020',
                    status: 1,
                    imgList: ['assets/imgs/iphone1.png'],
                    // imgList: ['assets/imgs/iphone1.png', 'assets/imgs/iphone2.png', 'assets/imgs/iphone3.png', 'assets/imgs/iphone4.png'],
                    content: '荣耀60 Pro（12GB+256GB）幻境星空',
                    money: '60.000.00',
                    applicationTime: '2021-12-21 11:27',
                    num: 20
                },
                {
                    code: 'PO2112210020',
                    status: 2,
                    imgList: ['assets/imgs/iphone1.png', 'assets/imgs/iphone2.png', 'assets/imgs/iphone3.png', 'assets/imgs/iphone4.png'],
                    content: '荣耀60 Pro（12GB+256GB）幻境星空',
                    money: '60.000.00',
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
        getData() {
            let arr = this.data.filter((item, key) => {
                switch (this.active) {
                    case 0:
                        return true;
                    case 1:
                        return item.status == 1;
                    case 2:
                        return item.status == 2;
                    case 3:
                        return item.status == 3;
                        break;
                }
            });
            this.arr = arr
        },
        goPush(item){
            this.$router.push({path:'/Home/Detail',query:{status:item.status}})
        }
    }
}
</script>

<style lang="less">
@import '~styles/index.less';
@import '~styles/variable.less';
.pur_box {
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
        border-top: 1px solid #e1e1e1;
    }
    .item {
        // height: 117px;
        height: 234px;
        & > div:nth-of-type(1) {
            padding: 16px 32px;
            border-bottom: 1px solid #e1e1e1;
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
                }
                .content {
                    font-size: 26px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #000000;
                    padding-right: 20px;
                }
                & > div:nth-last-of-type(1) {
                    font-size: 28px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #666666;
                }
            }
            & > div:nth-of-type(2) {
                margin-top: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 20px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #999999;
                & > span:nth-of-type(1) {
                    // padding-left: 102px;
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
        font-size: 28px;
    }
}
</style>