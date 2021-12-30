<template>
    <van-action-sheet v-model="shows" title="地点库位" class="van_sheet">
        <div class="ModalContent">
            <div class="modalHead">
                <input type="text" placeholder="请输入地点名称或编码">
            </div>
            <div class="modalWare">
                <div class="wareTitle">常用仓库</div>
                <div class="wareCompany">
                    <div @click="oftenWare(index)" :class="activeClass==index?'activeClass':''"
                        v-for="(item,index) in cityList" :key="index">{{item}}</div>
                </div>
            </div>
            <div class="scroll">
                <div class="scrollTitle">选择仓库与库位</div>
                <div class="scrollMain">
                    <div class="scrollLeft">
                        <div @click="letfScrollClcik(index)" class="leftItem" v-for="(item,index) in LeftList"
                            :key="index">
                            <span v-if="scrollLeftActive==index" class="scrollActive"></span>
                            <div style="margin-left:0.3rem">
                                <p :class="scrollLeftActive==index?'active':''">{{item.name}}</p>
                                <p>{{item.value}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="scrollRight">
                        <div class="scrollRightContent">
                            <div @click="rightScrollClcik(index)" class="rightItem" v-for="(item,index) in rightList"
                                :key="index">
                                <div class="itemCon">
                                    <p>{{item.name}}</p>
                                    <p>{{item.value}}</p>
                                </div>
                                <div v-if="scrollRightActive==index" class="itemIcon">
                                    <Icon type="ios-checkmark" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wareBot">
                <div class="reset">重置</div>
                <div @click="sure" class="sure">确定</div>
            </div>
        </div>
    </van-action-sheet>
</template>

<script>
export default {
    props: ['shows'],
    data() {
        return {
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
        }
    },
    methods: {
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
            this.$emit('refresh');
            this.$emit('update:shows',false);
        },
    }
}
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
    font-size: 20px;
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
    border: 3px solid #ccc;
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
    // line-height: 20px;
}
.leftItem p:nth-child(2) {
    font-size: 18px;
    // line-height: 18px;
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
.activeClass {
    border: 0.01rem solid red;
    color: red;
}
.active {
    color: red;
}
</style>