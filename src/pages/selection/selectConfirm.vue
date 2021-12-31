<template>
    <div class="box">
        <common-header @sureClick='onSureClick' :tittle="tittle" :showback="true" :showright='true'></common-header>
        <div class="head">
            <div class="rightContent">
                <div class="phoneItem">
                     <div class="itemLeft">
                        <img :src="require('../../'+detail.icon)" alt="">
                    </div>
                    <div class="itemRight">
                        <div class="itemTitle">{{detail.describe}}
                        </div>
                        <div class="itemBot">
                            <div class="itemNum">{{detail.code}}</div>
                            <div class="itemPrice">￥<span>{{detail.price}}</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="leftMain">
                <div>供应商名称</div>
                <div>合同编码</div>
                <div>生效日期</div>
                <div>采购类型</div>
            </div>
            <div class="rightMain">
                <div>北京博通伟业广告有限公司</div>
                <div>4600011741</div>
                <div>2021-12-16</div>
                <div>经销采购订单</div>
            </div>
        </div>
        <div class="info">
            <div class="infoHead">
                <span></span>
                <div class="infoTitle">仓库信息</div>
            </div>
            <div class="main">
                <div class="leftMain">
                    <div>采购类型</div>
                    <div>仓库地点</div>
                    <div>仓库库位</div>
                    <div>采购数量</div>
                </div>
                <div class="rightMain">
                    <div>经销采购订单</div>
                    <div>北京分公司（1000）</div>
                    <div>拍卖良品库（1009）</div>
                    <div>200件</div>
                </div>
            </div>
        </div>
        <div class="button">
            <div @click="toSure" class="submit">提交</div>
        </div>
    </div>
</template>

<script>

import commonHeader from '@/components/common-header'
export default {
    data() {
        return {
            tittle: '确认采购信息',
            detail: {
                averageSales: 65,
                code: "7402707231",
                contractNo: "4600008698",
                describe: "4G手机终端_华为P20 64G_华为_六模_极光_无礼包",
                icon: "assets/contart/hwImg.png",
                price: "2779",
                salesVolume: 21346,
                stock: "35",
            }
        }
    },
    methods: {
        //点击确定的时候
        toSure() {
            this.$router.push({
                path: '/selection/selectSuccess'
            })
        }
    },
    created() {
        if (this.$route.query.item != '{}') {
            this.detail = JSON.parse(this.$route.query.item)
        }
    },
    components: {
        commonHeader
    },
    mounted() {

    }
}
</script>

<style scoped lang="less">
.head {
    margin-top: 0.15rem;
    width: 96%;
    background: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.08rem;
    margin-left: 2%;
}

.rightContent {
    width: 100%;
    padding: 0px 2%;
    background: #fff;
    border-bottom: 1px dashed #e1e1e1;
    /* box-shadow: 0 4px 6px 0px #999; */
}
.phoneItem {
    /* height: 1.4rem; */
    display: flex;
    align-items: center;
    padding: 20px;
    width: 98%;
    margin: 0 1%;
}
.itemLeft {
    /* height: 1rem; */
    /* width: 1rem; */
    /* margin-top: 0.15rem; */
}
.itemLeft img {
    margin-left: 0.15rem;
    /* height: 1rem; */
    /* width: 1rem; */
    width: 92px;
    height: auto;
    display: inline-block;
}
.itemRight {
    /* height: 1rem; */
    flex: 1;
    margin-left: 0.15rem;
}
.itemTitle {
    min-height: 0.65rem;
    width: 100%;
    color: #000;
    font-size: 24px;
    line-height: 30px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
.itemBot {
    margin-top: 10px;
    height: 0.35rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.itemNum {
    font-size: 18px;
    color: #ccc;
}
.itemPrice {
    font-size: 0.16rem;
    color: red;
    & > span {
        font-size: 0.4rem;
        font-weight: 600;
    }
}
.title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title div:nth-child(1) {
    font-size: 0.11rem;
    color: #999999;
    height: 0.4rem;
    margin-left: 4%;
    line-height: 0.4rem;
}
.title div:nth-child(2) {
    font-size: 0.11rem;
    color: #999999;
    height: 0.4rem;
    margin-right: 4%;
    line-height: 0.4rem;
}
.main {
    margin-left: 2%;
    width: 96%;
    background: white;
    height: 2.8rem;
    border-radius: 0.08rem;
    display: flex;
    padding: 0.15rem 0;
}
.leftMain {
    height: 100%;
    width: 30%;
    border-right: 0.01rem #ccc dashed;
    padding: 0.2rem 0.15rem 0.2rem 0.25rem;
}
.leftMain div {
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 24px;
    color: #ccc;
}
.rightMain {
    height: 100%;
    width: 70%;
    padding: 0.2rem 0rem 0.2rem 0.2rem;
}
.rightMain div {
    font-size: 24px;
    height: 0.6rem;
    line-height: 0.6rem;
}
.info {
    width: 96%;
    margin: 0.2rem auto;
    background: white;
    // margin-left: 1%;
    border-radius: 0.1rem;
}
.infoHead {
    height: 0.8rem;
    width: 100%;
    border-bottom: 0.01rem #ccc dashed;
    display: flex;
}
.infoHead span {
    height: 0.25rem;
    width: 0.04rem;
    background: red;
    margin-left: 0.2rem;
    margin-top: 0.26rem;
}
.infoTitle {
    font-size: 24px;
    margin-left: 0.1rem;
    font-weight: 600;
    line-height: 0.8rem;
}
.button {
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    height:120px;
    display: inline-block;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 20px 0px;
    padding-top:30px;
}
.submit {
    width: 90%;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
    background: #d82138;
    color: white;
    /* margin-left: 0.2rem; */
    /* margin-top: 0.15rem; */
    font-size: 26px;
    text-align: center;
    border-radius: 30px;
}
</style>