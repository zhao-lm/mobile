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
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,key) in data.imgList" :key="key"><img :src="require('../../'+item)" alt="">
                </van-swipe-item>
            </van-swipe>
            <div class="tit_item">
                <span class="span1">订单编号</span>
                <span>{{data.code}}</span>
            </div>
            <div class="detailed">
                <div class="tit_item">
                    <span class="span1">采购明细</span>
                </div>
                <div>
                    <ul>
                        <li v-for="(item,key) in list" :key="key" @click="active=key">
                            <div>
                                <img :src="require('../../'+(active==key?item.ac_img:item.i_img))" alt="">
                            </div>
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
                    <span class="span1">厂家信息</span>
                </div>
                <div>
                    <div class="items">
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
            <p @click="data.status++;error='error'">驳回</p>
            <p @click="data.status++">通过</p>
        </div>
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
                    { name: '傅莹', time: '21-12-22', date: '09:05', method: '通过一审', error: '一审驳回' },
                    { name: '汪杰', time: '21-12-25', date: '15:55', method: '通过二审', error: '二审驳回' }
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
                { i_img: 'assets/imgs/chanpin1.png', ac_img: 'assets/imgs/chanpin2.png', name: '产品' },
                { i_img: 'assets/imgs/gongying1.png', ac_img: 'assets/imgs/gongying2.png', name: '供应商' },
                { i_img: 'assets/imgs/num1.png', ac_img: 'assets/imgs/num2.png', name: '数量' },
                { i_img: 'assets/imgs/cangku1.png', ac_img: 'assets/imgs/cangku2.png', name: '仓库' },
                { i_img: 'assets/imgs/hetong1.png', ac_img: 'assets/imgs/hetong2.png', name: '合同' }
            ],
            active: 0
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
        getTitle(item, key) {
            let str;
            str = this.data.status < key ? '待审核' : item.method;
            if (this.data.status == key && this.error == 'error') {
                str = item.error
            }
            return str;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
@import '~styles/index.less';
@import '~styles/variable.less';

.detail_box {
    & .tit_item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        & > .span1 {
            padding-left: 0.25rem;
            border-left: 0.05rem solid rgb(51, 136, 255);
        }
    }
    & > div {
        margin-top: 0.2rem;
        padding: 0.25rem 0.1rem;
        background: #fff;
    }
    & > div:nth-of-type(1) {
        margin-top: 0;
    }
    .detailed {
        & > div:nth-of-type(2) {
            padding: 0.2rem 0.4rem;
            & > ul {
                display: flex;
                align-items: center;
                & > li {
                    height: 1.2rem;
                    width: 20%;
                    text-align: center;
                    & > div {
                        height: 0.8rem;
                        img {
                            width: 0.7rem;
                        }
                    }
                }
            }
            & .item {
                margin-top: 0.2rem;
                & > p {
                    height: 0.8rem;
                    display: flex;
                    align-items: center;
                    & > span {
                        display: block;
                        border-top: 1px solid #969799;
                        border-left: 1px solid #969799;
                        height: 100%;
                        line-height: 0.8rem;
                        padding-left: 0.3rem;
                    }
                    & > span:nth-of-type(1) {
                        width: 25%;
                        color: #969799;
                    }
                    & > span:nth-of-type(2) {
                        width: 75%;
                        border-right: 1px solid #969799;
                    }
                }
                & > p:nth-last-of-type(1) {
                    & > span {
                        border-bottom: 1px solid #969799;
                    }
                }
            }
            .items {
                margin-top: 0.2rem;
                & > p {
                    height: 0.8rem;
                    display: flex;
                    align-items: center;
                    & > span {
                        display: block;
                        border-top: 1px solid #969799;
                        border-left: 1px solid #969799;
                        height: 100%;
                        line-height: 0.8rem;
                        padding-left: 0.3rem;
                        color: #969799;
                    }
                    & > span:nth-of-type(1) {
                        width: 75%;
                    }
                    & > span:nth-of-type(2) {
                        width: 25%;
                        border-right: 1px solid #969799;
                    }
                }
                & > p:nth-last-of-type(1) {
                    & > span {
                        border-bottom: 1px solid #969799;
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
        .van-swipe-item {
            font-size: 20px;
            line-height: 1rem;
            text-align: center;
            background-color: #fff;
            & img {
                height: 4rem;
            }
        }
    }
}
.page-bottom {
    background: #fff;
    padding: 0.2rem 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > p {
        width: 45%;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        border-radius: 1rem;
        border: 1px solid red;
    }
    & > p:nth-of-type(1) {
        color: red;
    }
    & > p:nth-of-type(2) {
        background: red;
        color: #fff;
    }
}
</style>
