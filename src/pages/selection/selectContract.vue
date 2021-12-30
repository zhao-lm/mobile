<template>
    <div class="box">
        <common-header @sureClick='onSureClick' :showRightTitle="true" :rightTitle='rightTitle' :tittle="tittle"
            :showback="true" :showright='true'></common-header>
        <div class="head">
            <div class="rightContent">
                <div class="phoneItem">
                    <div class="itemLeft">
                        <!-- <img src="../../assets/logoImg/360.png" alt=""> -->
                        <img src="../../assets/detailImg/编组 4.png" alt="">
                    </div>
                    <div class="itemRight">
                        <div class="itemTitle">IPHONE XS MAX GOLD 256GB A2104-CHN I
                        </div>
                        <div class="itemBot">
                            <div class="itemNum">5437268</div>
                            <div class="itemPrice">￥<span>3000</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main" v-for="(item,key) in arr" :key="key" @click="active=key" :class="active==key?'acrtive':''">
            <div class="leftMain">
                <div>供应商名称</div>
                <div>合同编码</div>
                <div>生效日期</div>
                <div>经代码</div>
            </div>
            <div class="rightMain">
                <div>{{item.name}}</div>
                <div>{{item.code}}</div>
                <div>{{item.time}}</div>
                <div>{{item.viaCode}}</div>
            </div>
        </div>
    </div>
</template>

<script>

import commonHeader from '@/components/common-header'
export default {
    data() {
        return {
            tittle: '合同验证',
            rightTitle: '下一步',
            active: null,
            arr: [
                {
                    name: '北京博通伟业广告有限公司',
                    code: '4600011741',
                    time: "2021-12-16",
                    viaCode: '经销'
                },
                {
                    name: '小米通讯技术有限公司',
                    code: '4600011722',
                    time: "2021-03-05",
                    viaCode: '经销'
                },
            ]
        }
    },
    methods: {
        //点击确定的时候
        onSureClick() {
            this.$router.push({
                path: '/selection/selectWare'
            })
        }
    },
    components: {
        commonHeader
    },
    mounted() {

    }
}
</script>

<style lang="less" scoped>
.head {
    margin-top: 0.15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.08rem;
    //  background: rgb(242 242 242);
    // box-shadow: 0 0 10px rgba(0, 0, 0,0.8);
    margin-bottom: 22px;
}

.rightContent {
    width: 100%;
    padding: 0px 2%;
    background: #fff;
    box-shadow: 0 4px 6px 0px #999;
}
.phoneItem {
    /* height: 1.4rem; */
    display: flex;
    align-items: center;
    padding: 20px;
    // width: 98%;
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
    font-size: 20px;
    color: #ccc;
}
.itemPrice {
    font-size: 0.16rem;
    color: red;
    & > span {
        font-size: 30px;
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
    margin-top: 0.2rem;
    margin-left: 2%;
    width: 96%;
    background: white;
    height: 2.8rem;
    border-radius: 0.22rem;
    display: flex;
    padding: 0.15rem 0;
}
.leftMain {
    height: 100%;
    width: 27%;
    border-right: 0.01rem #999 dashed;
    padding: 0 0.15rem 0rem 0.5rem;
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
    padding-left: 0.4rem;
}
.rightMain div {
    font-size: 24px;
    height: 0.6rem;
    line-height: 0.6rem;
}
.acrtive {
    border: 0.04rem solid red;
}
</style>