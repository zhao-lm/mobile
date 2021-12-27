<template>
    <div class="content-box">
        <common-header tittle="库存报表"></common-header>
        <div class="page-content inve_box">
            <div class="pro_head">
                <p>
                    <input v-model="form.code" type="text" placeholder="输入产品名称或编码">
                    <span @click="search()">搜索</span>
                </p>
            </div>
            <div>
                <div>
                    <div>
                        <p>库存日期：</p>
                        <p @click="show=true">{{form.time | getVal}}</p>
                        <img src="../../assets/detailImg/downDrop.png" alt="">
                    </div>
                    <div>
                        筛选
                        <img src="../../assets/detailImg/downDrop.png" alt="">
                    </div>
                </div>
                <div v-if="flag">
                    <p>{{form.uid}}</p>
                    <p>共<span>{{total}}</span>件</p>
                </div>
            </div>
            <div class="items" v-for="(item,key) in arr" :key="key" @click="goDetail(item.id)">
                <div>
                    <p>
                        <!-- <img src="../../assets/imgs/订单管理.png" alt=""> -->
                        <span>商品编码：</span>
                        <span>{{item.code}}</span>
                    </p>
                </div>
                <div>
                    <div>
                        <div>
                            <img :src="require('../../'+item.img)" alt="">
                        </div>
                        <div class="content">
                            {{item.content}}
                        </div>
                        <div>
                            x{{item.num}}
                        </div>
                    </div>
                    <div>
                        {{item.place}} ({{item.placeNumber}})
                    </div>
                    <div>
                        {{item.location}} ({{item.locationNumber}})
                    </div>
                </div>
            </div>
        </div>
        <van-calendar v-model="show" :show-confirm="false" @confirm='onConfirm' />
    </div>
</template>

<script>
import commonHeader from 'common/common-header';

export default {
    components: {
        commonHeader
    },
    data() {
        return {
            form: {
                code: '',
                time: '',
                uid: 'AD11-1001',
            },
            show: false,
            flag: false,
            total: 25,
            arr: [
                {
                    code: '7403003217',
                    img: 'assets/imgs/iphone1.png',
                    content: '5G手机终端 OPPOA72 (8+128G)_OPPO_六模_简单黑_无礼包',
                    num: 20,
                    place: "上海省仓",
                    placeNumber: 'Z090',
                    location: '业务周转库 (定时清理)',
                    locationNumber: '1006'
                },
                {
                    code: '7403008245',
                    img: 'assets/imgs/iphone1.png',
                    content: 'realme V15（8+128G）联通版镜湖蓝',
                    num: 5,
                    place: "上海省仓",
                    placeNumber: 'Z090',
                    location: '业务周转库 (定时清理)',
                    locationNumber: '1006'
                },
            ],
        }
    },
    filters: {
        getVal(val) {
            if (!val || val == '') {
                return '请选择日期'
            }
            return val
        }
    },
    methods: {
        formatDate(date) {
            return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        },
        onConfirm(date) {
            this.show = false;
            this.form.time = this.formatDate(date);
            this.search()
        },
        search() {
            this.flag = true
        },
        goDetail(id){
            this.$router.push({path:'/inventoryReport/detail',query:{id:id}})
        }
    }
}
</script>

<style lang='less' scoped>
@import '~styles/index.less';
@import '~styles/variable.less';
.pro_head {
    padding: 18px 32px;
    background: #fff;
    & > p {
        height: 60px;
        border-radius: 30px;
        border: 2px solid #d82138;
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
            border-radius: 0px 30px 30px 0px;
        }
    }
}
.inve_box {
    & > div:nth-of-type(2) {
        background: #fff;
        padding: 16px 32px;
        & > div:nth-of-type(1) {
            display: flex;
            align-items: center;
            justify-content: space-between;
            & > div:nth-of-type(1) {
                display: flex;
                align-items: center;
                & > img {
                    width: 38px;
                    margin-left: 6px;
                    height: auto;
                }
                & > p:nth-of-type(1) {
                    font-size: 26px;
                }
                & > p:nth-of-type(2) {
                    font-size: 24px;
                    font-family: 'PingFangSC-Regular', 'PingFang SC';
                    font-weight: 400;
                    font-style: normal;
                    color: #f11134;
                }
            }
            & > div:nth-of-type(2) {
                display: flex;
                align-items: center;
                & > img {
                    width: 38px;
                    height: auto;
                    margin-left: 6px;
                }
            }
        }
        & > div:nth-of-type(2) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            & > p:nth-of-type(1) {
                padding: 6px 16px;
                text-align: center;
                border-radius: 1rem;
                font-size: 24px;
                color: #ef1236;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 400;
                border: 1px solid #ef1236;
            }
            & > p:nth-of-type(2) {
                font-size: 24px;
                color: #ef1236;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 400;
                & > span {
                    font-size: 28px;
                    font-weight: 600;
                }
            }
        }
    }
    .items {
        // height: 117px;
        margin-top: 20px;
        // height: 234px;
        background: #fff;
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
                    color: #f11134;
                }
            }
            & > div:nth-of-type(2),
            & > div:nth-of-type(3) {
                margin-top: 10px;
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
}
</style>