<template>
    <div class="content-box">
        <common-header @sureClick='onSureClick' :isBack='false' @goBack='goBack' :showRightTitle="true" :rightTitle='rightTitle'
            :tittle="tittle" :showback="true" :showright='true'></common-header>
        <div class="page-content sel_box">
            <div class="header">
                <div class="headerInput">
                    <input class="headInput" type="text" placeholder="请输入产品名称或编码">
                    <div class="headSearch">
                        <i @click="search" class="mintui mintui-search"></i>
                    </div>
                </div>

            </div>
            <div class="content">

                <div class="leftContent">
                    <div @click="logoClick(index)" class="phoneName" :class="actives==index?'active':''"
                        v-for="(item,index) in imgArr" :key="index">
                        <img :src="require('../../'+item.img)" alt="">
                        <span>{{item.title}}</span>
                    </div>

                    <!-- <div class="phone
                Name ">
                    <img src="../../assets/logoImg/360.png" alt="">
                    <span>360</span>
                </div>
                <div class="phoneName ">
                    <img src="../../assets/logoImg/360.png" alt="">
                    <span>360</span>
                </div> -->
                </div>
                <div class="rightContent">
                    <!-- .borderActive -->
                    <div class="phoneItem" v-for="(item,index) in itemArr" :key="index" @click="rightActiveClick(index)"
                        :class="rightActive==index?'borderActive':' '">
                        <div class="itemLeft">
                            <img :src="require('../../'+item.icon)" alt="">
                        </div>
                        <div class="itemRight">
                            <div class="itemTitle">{{item.describe}}</div>
                            <div class="itemBot">
                                <div class="itemNum">{{item.code}}</div>
                                <div class="itemPrice">￥<span>{{item.price}}</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import commonHeader from "@/components/common-header";
import list from '@/assets/data/product';
export default {
    data() {
        return {
            tittle: "选择产品",
            rightTitle: "确定",
            actives: 0,
            rightActive: null,
            imgArr: [
                { img: "assets/logoImg/hw.png", title: "华为" },
                { img: "assets/logoImg/mi.png", title: "小米" },
                { img: "assets/logoImg/iphpne.png", title: "苹果" },
                { img: "assets/logoImg/360.png", title: "360" },
                { img: "assets/logoImg/VIVO.png", title: "vivo" },
                { img: "assets/logoImg/cw.png", title: "创维" },
                { img: "assets/logoImg/zx.png", title: "中兴" },
                { img: "assets/logoImg/H3C.png", title: "h3c" },
                { img: "assets/logoImg/njy.png", title: "诺基亚" }
            ],
            itemArr: [],
        };
    },
    created() {
        this.getList()
    },
    mounted() {
        console.log(list)
    },
    watch: {
        actives(val) {
            this.getList()
        }
    },
    methods: {
        logoClick(index) {
            this.actives = index;
        },
        rightActiveClick(index) {
            this.rightActive = index;
        },
        //点击确定的时候
        onSureClick() {
            this.$router.push({
                path: "/selection/selectContract",
                query: { item: JSON.stringify(this.itemArr[this.rightActive]) }
            });
        },
        search() {

        },
        getList() {
            let arr = [];
            arr = list.filter((item) => {
                return this.imgArr[this.actives].title == item.brand
            });
            if (arr.length >= 1) {
                this.itemArr = arr[0].data;
            }
        },
        goBack() {
            this.$router.push('/Home/procurement')
        }
    },
    components: {
        commonHeader
    },

};
</script>

<style lang="less" scoped>
@import '~styles/index.less';
@import '~styles/variable.less';
.header {
    height: 1rem;
    width: 100%;
    background: rgb(242 242 242);
    // box-shadow: 0 0 10px rgba(0 0 0, 0.8);
}
.sel_box{
    padding-bottom: 100px;
}
.headerInput {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    box-shadow: 0 4px 6px 0px #999;
    width: 100%;
}
.headInput {
    height: 0.6rem;
    width: 90%;
    border-radius: 0.6rem;
    outline: none;
    border: none;
    background: white;
}
.headInput::-webkit-input-placeholder {
    color: rgb(174 175 180);
    text-indent: 0.2rem;
}
.headSearch {
    color: red;
    position: absolute;
    right: 0.65rem;
    top: 0.3rem;
}
.headSearch i {
    font-size: 0.32rem;
}
.photoName {
    margin: 0.1rem 0rem 0.1rem 0.1rem;
}
.content {
    // overflow: hidden;
    // height: 80%;
    margin-top: 0.25rem;
    display: flex;
    justify-content: space-between;
}

.leftContent {
    overflow-x: hidden;
    height: 100%;
    /* width: 1.4rem; */
    width: 2.3rem;
    padding-right: 20px;
    overflow-y: auto;
}
.phoneName {
    height: 1.6rem;
    /* width: 1.6rem; */
    width: 100%;
    text-align: center;
    background: #fff;
    display: inline-block;
    padding-top: 15px;
    /* border-bottom: 1px solid  #fff; */
    box-shadow: 0 15px 10px -15px #fff;
}
.phoneName span {
    font-size: 24px;
    display: block;
    /* width: 1.35rem; */
    /* text-align: center; */
    /* margin-top: 0.1rem; */
    // text-indent: 0.1rem;
}
.phoneName img {
    height: 0.8rem;
    width: 0.8rem;
    /* vertical-align: unset; */
    /* display: inline-block; */
    /* margin-left: 0.35rem; */
    /* margin:0.1rem 0 0.1rem 0.1rem  */
}
.rightContent {
    overflow-x: hidden;
    overflow-y: auto;
    width: 8.2rem;
}
.phoneItem {
    /* height: 1.4rem; */
    width: 93.5%;
    border-radius: 0.1rem;
    display: flex;
    padding: 20px;
    align-items: center;
    border-radius: 0.2rem;
    background: white;
    margin-left: 0.2rem;
}
.phoneItem:not(:first-child) {
    margin-top: 0.2rem;
}
.itemLeft {
    height: 1rem;
    width: 1rem;
    margin-top: 0.15rem;
}
.itemLeft img {
    margin-left: 0.15rem;
    height: 1rem;
    width: 0.7rem;
    display: inline-block;
}
.itemRight {
    height: 1.2rem;
    margin-left: 0.15rem;
}
.itemTitle {
    min-height: 0.65rem;
    width: 98%;
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
    height: 0.35rem;
    margin-top: 5px;
    width: 98%;
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
.borderActive {
    border: 0.04rem solid red;
}
.active {
    background: rgb(242 242 242);
    /* height: 1.4rem; */
    /* width: 1.4rem; */
    width: 100%;
}
/* .active img{
    height: 1.1rem;
    width: 1.1rem;
    display: inline-block;
     
} */
</style>
