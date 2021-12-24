<template>
    <div class="content-box">
        <common-header tittle="选择仓库" :showContent="true"></common-header>
        <div class="page-content pur_box">
            
            <div class="item" v-for="(item,key) in arr" :key="key">
                
               
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
            active: 1,
            arr: [
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
            ]
        }
    },
    methods: {

    }
}
</script>

<style lang="less">
@import '~styles/index.less';
@import '~styles/variable.less';
.pur_box {
    background-color:#e5e5e5;
    margin-top: 20px;
    padding: 0 20px;
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
                    padding-left: 102px;
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