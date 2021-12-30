<template>
    <div class="content-box">
        <common-header tittle="选品采购"></common-header>
        <div class="page-content">
            <div class="pro_head">
                <p>
                    <input type="text" placeholder="输入产品名称或编码">
                    <span>搜索</span>
                </p>
            </div>
            <div class="pro_box">
                <van-tabs v-model="active" @change="getData()">
                    <van-tab title="手机"></van-tab>
                    <van-tab title="泛智能"></van-tab>
                    <van-tab title="智慧屏"></van-tab>
                    <van-tab title="路由器"></van-tab>
                    <van-tab title="其他"></van-tab>
                </van-tabs>
                <div>
                    <ul>
                        <li v-for="(item,key) in list" :key="key" @click="goPush(item)">
                            <div>
                                <img :src="require('../../'+item.icon)" alt="">
                            </div>
                            <p>{{item.brand}}</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <van-swipe :show-indicators='false' :autoplay="3000">
                        <van-swipe-item v-for="(item,key)  in imgList" :key="key" @click="$router.push('/selection/selectContract')">
                            <img v-if="item[0]" :src="require('../../'+item[0])" alt="">
                            <img v-if="item[1]" :src="require('../../'+item[1])" alt="">
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <div>
                    <div class="title">
                        <p>
                            <img src="../../assets/detailImg/编组 3.png" alt="">
                            <span>热门推荐</span>
                        </p>
                        <p style="display:none">
                            更多<img src="../../assets/detailImg/返回键备份 5.png" alt="">
                        </p>
                    </div>
                    <waterfall :col="2" :data="data">
                        <template>
                            <div v-for="(item,key) in data" :key="key" class="cell-item" :class="key==0?'active':''"
                                :style="{background:colorList[key%4]}" @click="$router.push('/selection/selectContract')">
                                <div>
                                    <div>
                                        <p>{{item.name}}</p>
                                        <p>{{item.describe}}</p>
                                    </div>
                                    <img :src="require('../../'+item.icon)" alt="" v-if="key!=0">
                                </div>
                                <div>
                                    <p> <span>合同采购价</span> <span>{{item.price}}元</span> </p>
                                    <p> <span>当前总库存</span> <span>{{item.stock}}台</span> </p>
                                    <p> <span>四周均销</span> <span>{{item.averageSales}}台</span> </p>
                                    <p> <span>累计销量</span> <span>{{item.salesVolume}}台</span> </p>
                                </div>
                                <div class="img" v-if="key==0">
                                    <img :src="require('../../'+item.icon)" alt="">
                                </div>
                            </div>
                        </template>
                    </waterfall>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import commonHeader from 'common/common-header';
import list from './data';
export default {
    components: {
        commonHeader
    },
    data() {
        return {
            colorList: ['#EAF1F9', '#F3F1FF', '#ECFCFD', '#FBF3F0'],
            active: 0,
            list: [
                {
                    brand: '华为',
                    icon: 'assets/detailImg/华为.png',
                },
                {
                    brand: '小米',
                    icon: 'assets/detailImg/小米.png',
                },
                {
                    brand: '苹果',
                    icon: 'assets/detailImg/苹果.png',
                },
                {
                    brand: '360',
                    icon: 'assets/detailImg/360.png',
                },
                {
                    brand: 'VIVO',
                    icon: 'assets/detailImg/VIVO.png',
                },
                {
                    brand: '创维',
                    icon: 'assets/detailImg/创维.png',
                },
                {
                    brand: '中兴',
                    icon: 'assets/detailImg/中兴.png',
                },
                {
                    brand: 'H3C',
                    icon: 'assets/detailImg/H3C.png',
                }, {
                    brand: '诺基亚',
                    icon: 'assets/detailImg/诺基亚.png',
                },
            ],
            imgList: [['assets/detailImg/位图(1).png', 'assets/detailImg/位图.png'], ['assets/detailImg/位图备份.png', 'assets/detailImg/位图(1).png'],['assets/detailImg/位图.png','assets/detailImg/位图备份.png']],
            data: [
                {
                    name: '荣耀60',
                    describe: "Pro（12GB+256GB）幻境星空",
                    price: '3000',
                    stock: '3000',
                    averageSales: 3000,
                    salesVolume: 42456,
                    icon: 'assets/detailImg/编组.png'
                },
                {
                    name: '小米',
                    code: '7402710782',
                    describe: "小米Max 3 全网通 6+128 金色7402710782",
                    price: '1679',
                    stock: '66',
                    averageSales: 22,
                    salesVolume: 39765,
                    icon: 'assets/detailImg/小米-小米Max 3 全网通 6+128 金色7402710782.png'
                },
                {
                    code: '7402709579',
                    name: '苹果',
                    describe: "IPHONE XS MAX GOLD 256GB A2104-CHN",
                    price: '9480',
                    stock: '112',
                    averageSales: 83,
                    salesVolume: 36373,
                    icon: 'assets/detailImg/IPHONE-IPHONE XS MAX GOLD 256GB A2104-CHN.png'
                },
                {
                    name: '三星',
                    code: '7402706914',
                    describe: "4G手机终端_三星SM-G9650 128G_三星_六模_黑_无礼包",
                    price: '4929',
                    stock: '69',
                    averageSales: 56,
                    salesVolume: 27412,
                    icon: 'assets/detailImg/三星-4G手机终端_三星SM-G9650 128G_三星_六模_黑_无礼包.png'
                },
                {
                    name: '华为',
                    code: '7402707237',
                    describe: "4G手机终端_华为P20 Pro 64G_华为_六模_亮黑_无礼包",
                    price: '3770',
                    stock: '178',
                    averageSales: 67,
                    salesVolume: 23214,
                    icon: 'assets/detailImg/华为-4G手机终端_华为P20 Pro 64G_华为_六模_亮黑_无礼包.png'
                },
                {
                    name: 'VIVO',
                    code: '7402709340',
                    describe: "4G手机终端_vivo NEX A(8+128G)_vivo_六模_星钻黑_无礼包",
                    price: '3588',
                    stock: '156',
                    averageSales: 59,
                    salesVolume: 21765,
                    icon: 'assets/detailImg/VIVO-4G手机终端_vivo NEX A(8+128G)_vivo_六模_星钻黑_无礼包.png'
                },
                {
                    name: 'OPPO',
                    code: '7402710739',
                    describe: "OPPO R17 Pro(8+128) 新年版",
                    price: '2779',
                    stock: '36',
                    averageSales: 34,
                    salesVolume: 15432,
                    icon: 'assets/detailImg/OPPO-OPPO R17 Pro(8+128) 新年版.png'
                },
                {
                    name: '荣耀',
                    code: '7403012134',
                    describe: "荣耀50Pro（8GB+256GB）亮黑色",
                    price: '3070',
                    stock: '143',
                    averageSales: 28,
                    salesVolume: 12564,
                    icon: 'assets/detailImg/荣耀-荣耀50Pro（8GB+256GB）亮黑色.png'
                },
            ]
        }
    },
    created() {
        console.log(this.list);

    },
    mounted() {
    },
    methods: {
        getData() {

        },
        goPush(item){
            this.$router.push({path:'/selection/selectBrand',query:{}})
        }
    }
}
</script>

<style lang="less" scoped>
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
/deep/.pro_box {
    padding: 0px 32px 60px;
    .van-tabs__wrap {
        height: 60px;
        border-top: 1px solid #e1e1e1;
    }
    .van-tab__text--ellipsis {
        overflow: visible;
        font-size: 26px;
    }
    .van-tabs__nav {
        background: #edeff2;
    }
    & > div:nth-of-type(2) {
        margin-top: 26px;
        height: 324px;
        background: #ffffff;
        border-radius: 8px;
        & > ul {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            & > li {
                height: 162px;
                width: 20%;
                text-align: center;
                font-size: 24px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #000000;
                & > div {
                    height: 110px;
                    line-height: 110px;
                    img {
                        width: auto;
                        height: auto;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
    & > div:nth-of-type(3) {
        height: 224px;
        padding: 26px 0px;
        .van-swipe {
            .van-swipe-item {
                display: flex;
                justify-content: space-between;
                img {
                    width: 48%;
                    height: 170px;
                    border-radius: 10px;
                }
            }
        }
    }
    & > div:nth-of-type(4) {
        padding: 0px 22px 50px;
        background: #ffffff;
        border-radius: 8px;
        & .title {
            padding: 22px 0px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            & > p:nth-of-type(1) {
                font-size: 28px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #000000;
                display: flex;
                align-items: center;
                img {
                    width: 40px;
                    margin-right: 10px;
                }
            }
            & > p:nth-of-type(2) {
                font-size: 24px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #666666;
                img {
                    width: 20px;
                }
            }
        }
        div.active {
            position: relative;
            .img {
                height: 156px;
                & > img {
                    height: 156px;
                    position: absolute;
                    right: -2.5px;
                    bottom: 0;
                    width: 246px;
                }
            }
            & > div:nth-of-type(1) {
                & > div {
                    width: 87%;
                }
            }
        }
        & .cell-item {
            // width: 48%;
            border-radius: 15px;
            background: #eaf1f9;
            // margin-bottom: 14px;
            padding: 18px 22px;
            border: 7px solid #fff;
            & > div:nth-of-type(1) {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 14px;
                & > div {
                    width: 70%;
                    & > p {
                        font-size: 28px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 600;
                        color: #000000;
                    }
                    & > p:nth-of-type(2) {
                        font-size: 24px;
                        word-break: break-all;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
                & > img {
                    width: 72px;
                }
            }
            & > div:nth-of-type(2) {
                & > p {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 24px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #666666;
                    margin-bottom: 4px;
                }
            }
        }
    }
}
</style>