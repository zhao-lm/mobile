<template>
    <div class="box">
        <common-header @sureClick='nextClick' :showRightTitle="true" :rightTitle='rightTitle' :tittle="tittle"
            :showback="true" :showright='true'></common-header>
        <div class="head">
            <div class="rightContent" v-for="(item,key) in arr" :key="key">
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
            <div class="title_i">
                <div class="left">
                    <div>供应商名称</div>
                    <div>合同编码</div>
                    <div>生效日期</div>
                    <div>采购类型</div>
                </div>
                <div class="right">
                    <div>北京博通伟业广告有限公司</div>
                    <div>4600011741</div>
                    <div>2021-12-16</div>
                    <div>经销采购订单</div>
                </div>
            </div>
            <!-- <div class="title">
                <div>供应商名称</div>
                <div>北京博通伟业广告有限公司</div>
            </div>
            <div class="title">
                <div>合同编码</div>
                <div>4600011741</div>
            </div>
            <div class="title">
                <div>生效日期</div>
                <div>2021-12-16</div>
            </div>
            <div class="title">
                <div>经代码</div>
                <div>经销</div>
            </div> -->
        </div>
        <div class="content">
            <div class="contentHead">
                <img src="../../assets/logoImg/ware.png" alt="">
                <div>仓库信息</div>
            </div>
            <div class="contentMain" v-for="(item,index) in addArr" :key="index">
                <!-- <div class="firstTitle">
                    <div class="type">{{item.type}}:</div>
                    <div class="typeInput">
                        <Input v-model="item.typeModel" :disabled='true'>
                        </Input>
                    </div>
                    <img @click="deleteItem(index)" src='../../assets/logoImg/delete.png' alt="">
                </div> -->
                <div class="firstTitle">
                    <div class="type">{{item.address}}:</div>
                    <div class="typeInput">
                        <!-- <input type="text" v-model="item.addressModel" @-focus="showModel"> -->
                        <!-- <Input v-model="item.addressModel" @on-focus="showModel">
                        </Input> -->
                        <div class="input" @click="showModel">
                            {{item.addressModel}}
                        </div>
                    </div>
                    <ActionSheet :shows.sync='shows' @refresh='refresh' />
                    <img @click="deleteItem(index)" src='../../assets/logoImg/delete.png' alt="">
                </div>
                <div class="firstTitle">
                    <div class="type">{{item.location}}:</div>
                    <div class="typeInput">
                        <Input v-model="item.locationModel" :disabled='true'>
                        <!-- <Option v-for="i in locationList" :value="i.value" :key="i.value">{{ i.label }}</Option> -->
                        </Input>
                    </div>

                </div>
                <div class="secondTitle">
                    <div class="num">{{item.numCount}}:</div>
                    <div class="calculation">
                        <span @click="item.num--">-</span>
                        <input type="number" v-model="item.num">
                        <span @click="item.num++">+</span>
                    </div>
                    <div class="sold">{{item.soldNum}} 件</div>
                </div>
            </div>
            <div class="add">
                <img src="../../assets/logoImg/add.png" alt="">
                <div @click="add" class="addTitle">继续添加</div>
            </div>
        </div>

    </div>
</template>

<script>
import commonHeader from "@/components/common-header";
import ActionSheet from '../../components/actionSheet.vue';
export default {
    data() {
        return {
            tittle: "选择仓库",
            rightTitle: "下一步",
            cityList: ["北京分公司", "天津分公司", "河北新公司"],
            activeClass: null,
            scrollRightActive: 0,
            scrollLeftActive: 0,
            LeftList: [
                { name: "北京电子商务省仓", value: 'Z0X0' },
                { name: "上海省仓", value: 'Z090' },
                { name: "河南省仓", value: 'Z0G0' },
                { name: "福建省仓", value: 'Z0D0' },
                { name: "黑龙江省仓", value: 'Z080' },
                { name: "湖南省仓", value: 'Z0I0' },
                { name: "山东省仓", value: 'Z0F0' },
                { name: "总部延保代销对账子库", value: 'Z006' },
                { name: "西安总仓", value: 'ZZ07' },
            ],
            arr: [
                {
                    img: 'assets/detailImg/bianzu4.png',
                    title: 'IPHONE XS MAX GOLD 256GB A2104-CHN I',
                    code: '7402709579',
                    money: '3000'
                }
            ],
            rightList: [
                { name: "全新良品库", value: 1001 },
                { name: "全新良品库（大客户总仓）", value: 1003 },
                { name: "全新良品库（政企）", value: 1006 },
                { name: "拍卖良品库", value: 1009 },
                { name: "总部集采物料库", value: 1011 },
                { name: "退货次良品库", value: 1021 },
                { name: "退货不良品库", value: 1022 },
                { name: "省分退货次良品库", value: 1023 },
                { name: "省分退货不良品库", value: 1024 },
                { name: "省分无实物退货库", value: 1025 }
            ],
            addArr: [
                {
                    address: "仓库地点",
                    type: "采购类型",
                    location: "仓库库位",
                    numCount: "采购数量",
                    addressList: [],
                    locationList: [],
                    typeList: [],
                    addressModel: "",
                    locationModel: "",
                    typeModel: "",
                    num: 0,
                    soldNum: 200
                }
            ],
            shows: false,
            detail: {
                averageSales: 65,
                code: "7402707231",
                contractNo: "4600008698",
                describe: "4G手机终端_华为P20 64G_华为_六模_极光_无礼包",
                icon: "assets/contart/img1.png",
                price: "2779",
                salesVolume: 21346,
                stock: "35",
            }
        };
    },
    created() {
        if (this.$route.query.item != '{}') {
            console.log(this.$route.query.item);
            this.detail = JSON.parse(this.$route.query.item)
        }
    },
    methods: {
        //删除
        deleteItem(index) {
            this.addArr.splice(index, 1);
            this.refresh()
        },
        // 添加列表
        add() {
            this.addArr.push({
                address: "仓库地点",
                type: "采购类型",
                location: "仓库库位",
                hasImage: true,
                numCount: "采购数量",
                addressList: [],
                locationList: [],
                typeList: [],
                addressModel: "",
                locationModel: "",
                typeModel: "",
                num: 0,
                soldNum: 0
            });
            this.refresh()
        },
        refresh() {
            for (let i in this.addArr) {
                this.addArr[i].typeModel = '经销采购订单'
                this.addArr[i].addressModel = '北京分公司(1000)'
                this.addArr[i].locationModel = '物流商全新良品库（1001）'
            }
        },
        oftenWare(index) {
            this.activeClass = index
        },
        letfScrollClcik(index) {
            this.scrollLeftActive = index
        },
        rightScrollClcik(index) {
            this.scrollRightActive = index
        },
        sure() {
            this.shows = false
            this.refresh()
        },
        //点击确定的时候,
        showModel() {
            this.shows = true;
        },
        nextClick() {
            this.$router.push({
                path: "/selection/selectConfirm",
                query: { item: JSON.stringify(this.detail) }
            });
        }
    },
    components: {
        commonHeader, ActionSheet
    },
    mounted() { }
};
</script>

<style lang="less" scoped>
/deep/.van_sheet {
    height: 1000px;
}
.ModalContent {
    height: 100%;
    padding: 0 0.15rem;
    background: white;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.scrollRightContent {
    height: 570px;
    // height: 65%;
    overflow: auto;
}
.modalHead {
    // height: 1rem;
    width: 100%;
    margin: 20px 0px;
    padding: 0px 15px;
}
.modalHead input {
    // background: #fff;
    border: 1px solid #d82138;
    outline: none;
    border-radius: 30px;
    height: 60px;
    width: 100%;
    text-indent: 0.15rem;
    // margin-top: 0.2rem;
    padding-left: 20px;
}
.title_i {
    display: flex;
    padding: 0 30px;
    font-size: 24px;
    color: #999;
    & > div {
        line-height: 42px;
    }
    & > div:nth-of-type(1) {
        width: 21%;
    }
    & > div:nth-of-type(2) {
        color: #000;
        width: 60%;
        padding-left: 20px;
        border-left: 0.01rem #999 dashed;
    }
}
.modalHead input::placeholder {
    text-indent: 0.15rem;
}
.modalWare {
    display: flex;
    flex-direction: column;
}
.wareCompany {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 15px 0px;
}
.scrollRight {
    height: 100%;
    width: 70%;
    overflow-y: scroll;
}
.rightItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}
.itemCon {
    height: 1rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    margin-left: 0.15rem;
    // margin-bottom: 20px;
}
.itemCon p:nth-child(1) {
    font-size: 20px;
}
.itemCon p:nth-child(2) {
    font-size: 18px;
    color: #999999;
}
.itemIcon {
    height: 1rem;
    // width: 0.5rem;
}
.itemIcon i {
    font-size: 1rem;
    color: red;
}
.wareCompany div {
    height: 0.7rem;
    width: 30%;
    border: 0.01rem solid #ccc;
    line-height: 0.7rem;
    text-align: center;
    font-size: 20px;
    margin-top: 0.1rem;
    border-radius: 0.3rem;
}
.wareTitle {
    font-size: 0.36rem;
    font-weight: 600;
}
.scrollActive {
    height: 0.6rem;
    width: 0.04rem;
    background: red;
}
.scroll {
    flex: 1;
    padding-bottom: 1rem;
    // height: 6.6rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 0.1rem;
    display: flex;
    flex-direction: column;
}
.scrollTitle {
    font-size: 0.36rem;
    font-weight: 600;
}
.scrollMain {
    margin-top: 10px;
    display: flex;
    flex: 1;
}
.scrollLeft {
    width: 47%;
    // height: 100%;
    height: 570px;
    overflow-y: scroll;
}
.leftItem {
    height: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.leftItem p:nth-child(1) {
    font-size: 20px;
}
.leftItem p:nth-child(2) {
    font-size: 18px;
    color: #999999;
}
.leftScroll {
    height: 100%;
}

.wareBot {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1rem;
    display: flex;
}
.reset {
    height: 0.8rem;
    width: 26%;
    text-align: center;
    line-height: 0.8rem;
    color: red;
    border: 0.01rem solid red;
    border-radius: 0.4rem;
    font-size: 24px;
    // margin-top: 0.2rem;
    margin-left: 2%;
}
.sure {
    height: 0.8rem;
    width: 68%;
    background: red;
    color: white;
    border-radius: 0.4rem;
    text-align: center;
    line-height: 0.8rem;
    font-size: 24px;
    margin-left: 3%;
    // margin-top: 0.2rem;
}

/* /deep/ .ivu-select .ivu-select-dropdown{
  display: none;
} */
.head {
    margin-top: 0.15rem;
    width: 100%;
    background: white;
    padding-bottom: 20px;
    box-shadow: 0 4px 6px 0px #999;
}

.rightContent {
    width: 100%;
    /* padding: 0px 2%; */
    background: #fff;
    border-bottom: 1px solid #e1e1e1;
    margin-bottom: 30px;
    /* box-shadow: 0 4px 6px 0px #999; */
}

.phoneItem {
    /* height: 1.4rem; */
    display: flex;
    align-items: center;
    padding: 20px;
    width: 98%;
    margin: 0 1%;
    // border-bottom: 1px solid #999;
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
    height: 0.6rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title div:nth-child(1) {
    font-size: 0.11rem;
    color: #999;
    height: 0.4rem;
    margin-left: 4%;
    line-height: 0.4rem;
}
.title div:nth-child(2) {
    width: 50%;
    border-left: 0.01rem #999 dashed;
    padding-left: 20px;
    text-align: left;
    font-size: 0.11rem;
    color: #000;
    height: 0.4rem;
    margin-right: 4%;
    line-height: 0.4rem;
}
.content {
    width: 100%;
    background: white;
    margin-top: 0.2rem;
}
.contentHead {
    height: 64px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e1e1e1;
}
.contentHead img {
    height: 0.35rem;
    width: 0.35rem;
    margin-left: 4%;
}
.contentHead div {
    font-size: 24px;
    font-weight: 600;
    margin-left: 0.15rem;
}
.firstTitle {
    height: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
}
.type {
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #000000;
    margin-left: 4%;
}
/deep/.typeInput {
    width: 60%;
    // height: 0.5rem;
    height: 60px;
    margin-left: 8%;
    input {
        font-size: 24px;
        border-width: 3px;
        height: 60px;
    }
    & > div.input {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        width: 100%;
        height: 100%;
        line-height: 60px;
        padding-left: 6px;
        border: 3px solid #dddddd;
    }
}
.firstTitle img {
    // height: 0.35rem;
    // width: 0.35rem;
    margin-left: 0.5rem;
    // margin-bottom: 0.1rem;
    width: 32px;
    height: auto;
}
.secondTitle {
    height: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
}
.num {
    font-size: 24px;
    font-weight: 600;
    margin-left: 4%;
}
.calculation {
    display: flex;
    margin-left: 8%;
    background: #fff9f9;
}
.contentMain {
    padding: 10px 0px;
    & > div:nth-of-type(1) {
        background: #fff9f9;
    }
}
.calculation input {
    border-left: none;
    border-right: none;
    height: 60px;
    width: 2rem;
    line-height: 60px;
    border-top: 0.01rem solid #f3e7e7;
    border-bottom: 0.01rem solid #f3e7e7;
    text-align: center;
    font-weight: 600;
}
.calculation span:nth-child(1) {
    border-radius: 0.04rem 0rem 0rem 0.04rem;
    border: 0.01rem solid #f3e7e7;
    width: 60px;
    height: 60px;
    font-size: 0.16rem;
    line-height: 0.5rem;
    line-height: 60px;
    text-align: center;
    font-size: 38px;
}
.calculation span:nth-child(3) {
    border-radius: 0.04rem 0rem 0rem 0.04rem;
    border: 0.01rem solid #f3e7e7;
    width: 60px;
    height: 60px;
    font-size: 0.16rem;
    line-height: 0.5rem;
    text-align: center;
    line-height: 60px;
    font-size: 38px;
}
.sold {
    margin-left: 1rem;
    font-size: 30px;
    font-weight: 600;
    color: red;
}
.add {
    height: 0.8rem;
    width: 50%;
    margin: 0 auto;
    background: white;
    margin-top: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.add img {
    width: 32px;
    height: auto;
    display: inline-block;
}
.addTitle {
    margin-left: 0.15rem;
    font-size: 28px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #d82138;
    height: 0.8rem;
    line-height: 0.8rem;
    font-weight: 600;
}
.activeClass {
    border: 0.01rem solid red;
    color: red;
}
.active {
    color: red;
}
</style>
