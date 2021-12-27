<template>
    <div class="content-box">
        <common-header tittle="采购详情"></common-header>
        <div class="detail_box page-content">
            <!-- <van-steps :active="data.status" active-color="#38f">
                <van-step v-for="(item,key) in data.arr" :key='key'>
                    <p v-text="data.status<key?'待审核':item.method"></p>
                    <p>{{item.name}}</p>
                    <p v-if="data.status>=key">{{item.time}}</p>
                    <p v-if="data.status>=key">{{item.date}}</p>
                </van-step>
            </van-steps> -->
            <Steps :current="data.status" :status="error">
                <Step v-for="(item,key) in data.arr" :key='key'>
                    <template slot="title">{{getTitle(item,key)}}</template>
                    <template slot="content">
                        <p>{{item.name}}</p>
                        <p v-if="data.status>=key">{{item.time}}</p>
                        <p v-if="data.status>=key">{{item.date}}</p>
                    </template>
                </Step>
            </Steps>
            <p class="tit_item">
                <img src="../../assets/imgs/订单管理.png" alt="">
                <span>
                    <span class="span1">订单编号：</span><span>{{data.code}}</span>
                </span>
            </p>
            <div>
                <van-swipe class="my-swipe" ref="swiper" :autoplay="3000" indicator-color="white">
                    <van-swipe-item v-for="(item,key) in data.imgList" :key="key"><img :src="require('../../'+item)"
                            alt="">
                    </van-swipe-item>
                </van-swipe>
                <van-icon name="arrow-left" @click="prev()" />
                <van-icon name="arrow" @click="next()" />
            </div>
            <div class="detailed">
                <div class="tit_item">
                    <img src="../../assets/detailImg/采购明细.png" alt="">
                    <span>
                        <span class="span1">采购明细</span>
                    </span>
                </div>
                <div>
                    <ul>
                        <li v-for="(item,key) in list" :key="key" @click="active=key">
                            <img :src="require('../../'+(active==key?item.ac_img:item.i_img))" alt="">
                            <p>{{item.name}}</p>
                        </li>
                    </ul>
                    <div v-if="active==0||active==4" class="item">
                        <p>
                            <span>编码</span>
                            <span>{{data.encoded}}</span>
                        </p>
                        <p>
                            <span>行号</span>
                            <span>{{data.lineNumber}}</span>
                        </p>
                        <p>
                            <span>金额</span>
                            <span>{{data.money}}</span>
                        </p>
                        <p>
                            <span>类型</span>
                            <span>{{data.type}}</span>
                        </p>
                    </div>
                    <div v-if="active==1" class="item">
                        <p>
                            <span>名称</span>
                            <span>{{data.name}}</span>
                        </p>
                        <p>
                            <span>编码</span>
                            <span>{{data.encoded}}</span>
                        </p>
                    </div>
                    <div v-if="active==2" class="item">
                        <p>
                            <span>数量</span>
                            <span>{{data.number}}</span>
                        </p>
                    </div>
                    <div v-if="active==3" class="item">
                        <p>
                            <span>仓库</span>
                            <span>{{data.place}}</span>
                        </p>
                        <p>
                            <span>库位</span>
                            <span>{{data.location}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="detailed" v-if="data.status==2&&error!='error'">
                <div class="tit_item">
                    <img src="../../assets/detailImg/厂家信息.png" alt="">
                    <span>
                        <span class="span1">厂家信息</span>
                    </span>
                </div>
                <div>
                    <div class="item items">
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
                        <p>
                            <span>厂家是否发货</span>
                            <span>是</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-bottom" v-if="data.status!=2&&error!='error'">
            <p @click="reject()">驳回</p>
            <p @click="adopt()">通过</p>
        </div>
        <van-popup v-model="show" class='pop_box'>
            <img src="../../assets/detailImg/对勾备份.png" alt="">
            <p v-text="error=='error'?'驳回成功':'通过成功'"></p>
        </van-popup>
    </div>
</template>

<script>
import commonHeader from 'common/common-header'
export default {
    data() {
        return {
            data: {
                status: 0,
                arr: [
                    { name: '董倩', time: '21-12-21', date: '11:27', method: '订单创建' },
                    { name: '傅莹', time: '21-12-22', date: '11:27', method: '通过一审', error: '一审驳回' },
                    { name: '汪杰', time: '21-12-25', date: '11:27', method: '通过二审', error: '二审驳回' }
                ],
                imgList: ['assets/imgs/iphone1.png', 'assets/imgs/iphone2.png', 'assets/imgs/iphone3.png', 'assets/imgs/iphone4.png'],
                code: 'PO2112210020',
                encoded: '460011646',
                lineNumber: '00610',
                money: '6000',
                type: '经销采购 (NB)',
                name: '深圳市爱施德股份有限公司',
                number: 20,
                place: '吉林省仓',
                location: '全新良品库'
            },
            error: '',
            list: [
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
    components: {
        commonHeader
    },
    computed: {

    },
    methods: {
        tohome() {
            this.$router.goBack()
        },
        reject() {
            this.$dialog.confirm({
                title: '',
                message: '是否确认驳回单据？',
                className: 'dialog'
            })
                .then(() => {
                    this.data.status++;
                    this.error = 'error';
                    this.show = true
                })
                .catch(() => {

                });
        },
        adopt() {
            this.$dialog.confirm({
                title: '',
                message: '是否确认通过单据？',
                className: 'dialog'
            })
                .then(() => {
                    this.data.status++;
                    this.show = true
                })
                .catch(() => {

                });
        },
        getTitle(item, key) {
            let str;
            str = this.data.status < key ? '待审核' : item.method;
            if (this.data.status == key && this.error == 'error') {
                str = item.error
            }
            return str;
        },
        prev() {
            this.$refs.swiper.prev()
        },
        next() {
            this.$refs.swiper.next()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
@import '~styles/index.less';
@import '~styles/variable.less';
.dialog {
    width: 528px;
    .van-dialog__message {
        font-size: 32px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
        height: 132px;
        line-height: 80px;
    }
    .van-dialog__footer {
        button {
            height: 80px;
            font-size: 32px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #000000;
            padding: 16px 0px;
        }
    }
}
.pop_box {
    width: 260px;
    height: 180px;
    background: #ffffff;
    border-radius: 8px;
    text-align: center;
    & > img {
        width: 80px;
        height: auto;
        margin:20px 0 18px;
    }
    & > p {
        font-size: 26px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #666666;
    }
}
/deep/.detail_box {
    padding-bottom: 100px;
    & .tit_item {
        background: #fff;
        padding: 14px 32px;
        display: flex;
        align-items: center;
        & img {
            width: 28px;
            margin-right: 12px;
        }
        & > span {
            font-size: 24px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #999999;
            .span1 {
                color: #000000;
            }
        }
    }
    & > div {
        margin-top: 14px;
        background: #fff;
    }
    & > div:nth-of-type(1) {
        margin-top: 0;
        height: 188px;
        padding: 20px 30px;
        .ivu-steps-item {
            .ivu-steps-head {
                margin-top: 6px;
            }
            .ivu-steps-title {
                font-size: 28px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #aaaaaa;
            }
            .ivu-steps-content {
                p:nth-of-type(1) {
                    font-size: 24px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #aaaaaa;
                    // text-align: center;
                }
                p {
                    font-size: 24px;
                    width: 110px;
                    text-align: center;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #aaaaaa;
                }
            }
        }
        .ivu-steps-status-process,
        .ivu-steps-status-finish {
            .ivu-steps-title {
                color: #0382fe;
            }
            .ivu-steps-content {
                p:nth-of-type(1) {
                    color: #666666;
                }
            }
        }
    }
    & > div:nth-of-type(2) {
        margin-top: 0;
        border-top: 1px solid #e1e1e1;
        position: relative;
        & > i {
            position: absolute;
            top: 176px;
            font-size: 32px;
        }
        & > i:nth-of-type(1) {
            left: 48px;
        }

        & > i:nth-of-type(2) {
            right: 48px;
        }
    }
    & > p:nth-of-type(1) {
        margin-top: 14px;
    }
    .detailed {
        & > div:nth-of-type(2) {
            border-top: 1px solid #e1e1e1;
            padding: 24px 32px;
            & > ul {
                display: flex;
                align-items: center;
                & > li {
                    height: 1.2rem;
                    width: 20%;
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
    .van-step--horizontal {
        .van-step__title {
            margin-top: 0.6rem;
            & > p {
                color: #969799;
                text-align: center;
                margin: 0.1rem;
            }
        }
        .van-step__title--active,
        .van-step--process,
        .van-step--finish {
            & p:nth-of-type(1) {
                color: rgb(51, 136, 255);
            }
        }
    }
    .my-swipe {
        border-bottom: 1px solid #e1e1e1;
        .van-swipe-item {
            font-size: 20px;
            line-height: 1rem;
            text-align: center;
            background-color: #fff;
            & img {
                height: 336px;
                width: auto;
            }
        }
    }
}
.page-bottom {
    background: #fff;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > p {
        width: 45%;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border-radius: 1rem;
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        border: 2px solid #ef1236;
    }
    & > p:nth-of-type(1) {
        color: #d82138;
    }
    & > p:nth-of-type(2) {
        background: #d82138;
        color: #fff;
    }
}
</style>
