<template>
    <div class="content-box">
        <common-header tittle="消息中心"></common-header>
        <div class="page-content pur_box" style="padding:6px;">
                        <div class="item" v-for="(item,key) in arr" :key="key">
                <div>
                    <p>
                        <span>采购审批：</span>
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
                        <div v-if="item.imgList.length<=1" class="content" style="flex:1;">
                            {{item.content}}
                        </div>
                        <div>
                            <span style="display:block;text-align: right;"> 共{{item.setNum}}件</span>
                            <span style="display:block;margin-top:10px;"> ￥{{item.money}}</span>
                        </div>
                    </div>
                    <div>
                        <span>{{item.timeName}}：{{item.applicationTime}}</span>
                        <span>{{item.num}}</span>
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
        data() {
        return {
            active: 1,
            arr: [
                {
                    code: 'PO2112210020',
                    status: 1,
                    imgList: ['assets/imgs/iphone1.png'],
                    // imgList: ['assets/imgs/iphone1.png', 'assets/imgs/iphone2.png', 'assets/imgs/iphone3.png', 'assets/imgs/iphone4.png'],
                    content: '荣耀60 Pro（12GB+256GB）幻境星空',
                    money: '60.000.00',
                    setNum:'20',
                    timeName:'接收时间',
                    applicationTime: '2021-12-21 11:27',
                    num: '11:27'
                },
                {
                    code: 'PO2112210020',
                    status: 2,
                    imgList: ['assets/imgs/iphone1.png', 'assets/imgs/iphone2.png', 'assets/imgs/iphone3.png', 'assets/imgs/iphone4.png'],
                    content: '荣耀60 Pro（12GB+256GB）幻境星空',
                    money: '16.760.000.00',
                    setNum:'30',
                    timeName:'审批时间',
                    applicationTime: '2021-12-21 11:27',
                    num: '昨天'
                },
                {
                    code: 'PO2112210020',
                    status: 3,
                    imgList: ['assets/imgs/iphone1.png'],
                    // imgList: ['assets/imgs/iphone1.png', 'assets/imgs/iphone2.png', 'assets/imgs/iphone3.png', 'assets/imgs/iphone4.png'],
                    content: '荣耀60 Pro（12GB+256GB）幻境星空',
                    money: '16.760.000.00',
                    setNum:'30',
                    timeName:'审批时间',
                    applicationTime: '2021-12-21 11:27',
                    num: '2021-12-17'
                },
            ]
        }
    }
    }
</script>
<style lang="less">
@import '~styles/index.less';
@import '~styles/variable.less';
    .pur_box {
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
    .item {
        // height: 117px;
        height: 234px;
        border-radius: 10px;
        & > div:nth-of-type(1) {
            padding: 16px 32px;
            // border-bottom: 1px solid #e1e1e1;
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
                margin-top: 20px;
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
}
</style>