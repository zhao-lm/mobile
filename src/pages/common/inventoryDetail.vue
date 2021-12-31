<template>
    <div class="content-box">
        <common-header tittle="商品库存详情"></common-header>
        <div class="page-content inveD_box">
            <div class="tit_itemed">
                <span>商品编码</span>
                <span>{{data.code}}</span>
            </div>
            <div>
                <van-swipe class="my-swipe" ref="swiper" :autoplay="3000" indicator-color="white">
                    <van-swipe-item v-for="(item,key) in data.imgList" :key="key"><img :src="require('../../'+item)"
                            alt="">
                    </van-swipe-item>
                </van-swipe>
                <van-icon name="arrow-left" @click="prev()" />
                <van-icon name="arrow" @click="next()" />
            </div>
            <div class="tit_itemed">
                <span>采购模式</span>
                <span>{{data.pattern}}</span>
            </div>
            <div class="tit_itemed">
                <span>当前日期</span>
                <span>{{data.date}}</span>
            </div>
            <div class="tit_itemed">
                <span>库存数量</span>
                <span style='color:#d82138'> <span class="span1">{{data.num}}</span>件</span>
            </div>
            <div class="detailed">
                <div class="tit_itemed">
                    <span>商品明细</span>
                </div>
                <div>
                    <ul>
                        <li v-for="(item,key) in list" :key="key" @click="active=key">
                            <img :src="require('../../'+(active==key?item.ac_img:item.i_img))" alt="">
                            <p>{{item.name}}</p>
                        </li>
                    </ul>
                    <div v-if="active==0" class="item">
                        <p>
                            <span>商品名称</span>
                            <span>{{data.content}}</span>
                        </p>
                        <p>
                            <span>商品类别</span>
                            <span>{{data.category}}</span>
                        </p>
                    </div>
                    <div v-if="active==1" class="item">
                        <p>
                            <span>型号</span>
                            <span>{{data.model}}</span>
                        </p>
                        <p>
                            <span>型号描述</span>
                            <span>{{data.modelDescribe}}</span>
                        </p>
                    </div>
                    <div v-if="active==2" class="item">
                        <p>
                            <span>品牌</span>
                            <span>{{data.brand}}</span>
                        </p>
                        <p>
                            <span>品牌描述</span>
                            <span>{{data.brandDescription}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="detailed">
                <div class="tit_itemed">
                    <span>
                        仓库信息
                    </span>
                </div>
                <div>
                    <div class="item" style="margin-top:0px;">
                        <p>
                            <span>地点编码</span>
                            <span>{{data.placeNumber}}</span>
                        </p>
                        <p>
                            <span>地点名称</span>
                            <span>{{data.place}}</span>
                        </p>
                        <p>
                            <span>库位编码</span>
                            <span>{{data.locationNumber}}</span>
                        </p>
                        <p>
                            <span>库位名称</span>
                            <span>{{data.location}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
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
            data: {
                code: '7400100061',
                imgList: ['assets/imgs/iphone1.png', 'assets/imgs/iphone2.png', 'assets/imgs/iphone3.png', 'assets/imgs/iphone4.png'],
                pattern: '统谈统采',
                date: '2021-12-26',
                num: 20,
                name: '华为nova85G（8GB+128GB）亮黑色',
                category: '智慧生活终端',
                model: 'TNBP',
                modelDescribe: '华为nova85G（8+128）',
                brand: '10006',
                brandDescribe: '华为',
                locationCode: '1008',
                location: '业务周转库（定期清理）',
                place: '上海省仓',
                placeCode: 'Z090',
            },
            active: 0,
            list: [
                { i_img: 'assets/detailImg/产品默认.png', ac_img: 'assets/detailImg/产品选中.png', name: '商品' },
                { i_img: 'assets/detailImg/供应商默认.png', ac_img: 'assets/detailImg/供应商选中.png', name: '型号' },
                { i_img: 'assets/detailImg/数量默认.png', ac_img: 'assets/detailImg/数量选中.png', name: '品牌' }
            ],
        }
    },
    created() {
        if (this.$route.query.item != '{}') {
            this.data = JSON.parse(this.$route.query.item);
            console.log(this.data)
            this.data.imgList = [this.data.img]
        }
    },
    methods: {
        prev() {
            this.$refs.swiper.prev()
        },
        next() {
            this.$refs.swiper.next()
        }
    }
}
</script>
<style lang='less' scoped>
@import '~styles/index.less';
@import '~styles/variable.less';
.inveD_box {
    padding-bottom: 80px;
    & > div {
        margin-top: 20px;
    }
    & .tit_itemed {
        background: #fff;
        padding: 14px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        & > span {
            font-size: 24px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #000000;
        }
        & > span:nth-of-type(1) {
            border-left: 4px solid #d82138;
            padding-left: 20px;
        }
        & > span:nth-of-type(2) {
            color: #999;
        }
        .span1 {
            font-size: 30px;
            font-weight: 600;
            margin-right: 4px;
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
    & > div:nth-of-type(2) {
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
    .detailed {
        background: #fff;
        & > div:nth-of-type(2) {
            border-top: 1px solid #e1e1e1;
            padding: 24px 32px;
            & > ul {
                display: flex;
                align-items: center;
                & > li {
                    height: 1.2rem;
                    width: 33.33%;
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
                    // height: 0.8rem;
                    display: flex;
                    // align-items: center;
                    & > span {
                        display: block;
                        border-top: 1px solid #e1e1e1;
                        border-left: 1px solid #e1e1e1;
                        // height: 100%;
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
}
</style>