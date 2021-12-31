<template>
    <div class="content-box">
        <common-header tittle="评价运单" :showRightTitle='true' rightTitle="提交" @sureClick='onTosuccess'></common-header>
        <div class="page-content stor_box2">
            <div class="item content">
                <div>
                    <p>
                        <span>运单编号：</span>
                        <span>{{ data.code }}</span>
                    </p>
                    <p>
                        <span>华盛编号：</span>
                        <span>{{ data.hscode }}</span>
                    </p>
                    <p>
                        <span>运单图片：</span>
                        <img v-for="(val, index) in dataList[0].imgList" :src="val.src" :key="index" alt=""
                            @click="show(index)" />
                        <previewer ref="previewer" :list="dataList[0].imgList"> </previewer>
                    </p>
                    <p>
                        <span>上传时间：</span>
                        <span>{{data.applicationTime }}</span>
                    </p>
                </div>
            </div>
            <div class="eResult">
                <p>评价结果</p>
                <div class="eBtn">
                    <p>是否合格</p>
                    <mt-button @click="hege()" :class="{ active: isActive == 1, hegebtn: hegebtn }">合格</mt-button>
                    <mt-button @click="nohege()" :class="{ active: isActive == 2, hegebtn: hegebtn }">不合格</mt-button>
                </div>
            </div>
            <div class="reision1" v-show="ishege == '2'">
                <div class="rBtn">
                    <p style="display: inline-block">原因分类</p>
                    <div style="position: relative; display: inline-block" @click="handleClick">
                        <input class="selectBtn" v-model="message" />
                        <img src="../../assets/qianshou/downDrop.png" alt="" />
                    </div>
                    <mt-popup v-model="popupVisible" popup-transition="popup-fade" closeOnClickModal="true"
                        position="bottom">
                        <mt-picker :slots="slots" @change="onValuesChange" class="mtPicker" showToolbar>
                            <div class="picker-toolbar-title">
                                <div class="usi-btn-cancel" @click="cncle()">取消</div>
                                <div class="">请选择</div>
                                <div class="usi-btn-sure" @click="addSave()">确认</div>
                            </div>
                        </mt-picker>
                    </mt-popup>
                </div>

                <div class="otherR" v-show="juti">
                    <mt-field label="具体原因" type="textarea" rows="6" v-model="introduction"></mt-field>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex";
import commonHeader from "common/common-header";
import { Popup } from "mint-ui";
export default {
    data() {
        return {
            showContent: '提交',
            showToolbar: true,
            message: "请选择",
            slots: [
                {
                    values: [
                        "请选择",
                        "非签收单图片",
                        "电子签收单不完整",
                        "图片不清晰",
                        "签收标准未维护",
                        "未按签收标准执行",
                        "其他",
                    ],
                },
            ],
            popupVisible: false,
            showContent: true,
            isActive: "1", //颜色切换
            hegebtn: true,
            ishege: "1", //原因分类是否显示
            juti: false, //选择其他的时候显示具体原因
            active: 0,
            dataList: [
                {
                    code: "JDV003530362356",
                    hscode: "4961081535",
                    status: 1,
                    imgList: [
                        {
                            src: require("../../assets/qianshou/qianshou3.jpg"),
                            msrc: require("../../assets/qianshou/qianshou3.jpg"),
                            w: 600,
                            h: 400
                        }
                    ],
                    applicationTime: "2021-12-21 11:27",
                    isqualified: "0",
                    clickFlag: true,
                },
            ],
            arr: [],
            data: {
                code: "JDV003530362356",
                hscode: "4961081535",
                status: 1,
                imgList: [
                    {
                        src: require("../../assets/qianshou/qianshou3.jpg"),
                        msrc: require("../../assets/qianshou/qianshou3.jpg"),
                        w: 600,
                        h: 400
                    }
                ],
                applicationTime: "2021-12-21 11:27",
                isqualified: "0",
                clickFlag: true,
            },
        };
    },
    created() {
        if (this.$route.query.item != '{}') {
            this.data = JSON.parse(this.$route.query.item);
            console.log(this.data)
        }
        // this.getData();
    },
    methods: {
        show(index) {
            // 显示特定index的图片，使用ref
            this.$refs.previewer.show(index);
        },
        //原因分类
        handleClick() {
            this.popupVisible = true;
        },
        //选中事件
        onValuesChange(picker, values) {
            if (values[0] == "请选择") {
                this.message = "请选择";
            } else {
                this.message = values;
            }
        },
        //取消
        cncle() {
            this.popupVisible = false;
            this.$data.message = "请选择";
            this.$data.juti = false;
        },
        //确认
        addSave() {
            this.popupVisible = false;
            if (this.$data.message == "其他") {
                this.$data.juti = true;
            } else {
                this.$data.juti = false;
            }
        },
        //待办点击事件
        addGoodsHandler() {
            this.$router.togo("/Logistics/evaluate");
        },
        //点击合格
        hege() {
            let self = this;
            self.$data.isActive = "1";
            self.$data.ishege = "1";
        },
        //点击不合格
        nohege() {
            let self = this;
            self.$data.isActive = "2";
            self.$data.ishege = "2";
        },
        //数据初始化加载
        getData() {
            let arr = this.data.filter((item, key) => {
                if (this.active == 0) {
                    return item.status == 1;
                } else {
                    return item.status != 1;
                }
            });
            this.arr = arr;
        },
        //点击提交
        onTosuccess() {
            this.$router.togo("/Logistics/loginsuccess");
        }
    },
    components: {
        commonHeader,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
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
.stor_box2 {
    padding-bottom: 100px;
    & > div:nth-of-type(1) {
        margin-top: 0;
    }
    .van-tabs__wrap {
        height: 60px;
        border-top: 1px solid #e1e1e1;
    }
    .van-tab__text--ellipsis {
        overflow: visible;
    }
    & > div.content {
        background: #fff;
        margin-top: 20px;
    }
    .item {
        height: 300px;
        padding: 30px;
        & > div > p {
            display: flex;
            margin-bottom: 20px;
            font-size: 30px;
            font-family: PingFangSC-Regular, PingFang SC;
            & > img {
                width: 80px;
                height: 60px;
            }
        }
    }
}
.eResult {
    & > p {
        font-size: 30px;
        padding: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
    }
    & > div.eBtn {
        background-color: #fff;
        height: 110px;
        padding-top: 30px;
        padding-left: 30px;
        border-radius: 10px;
        & > p {
            margin-right: 40px;
            font-size: 30px;
            display: inline-block;
        }
        & > .hegebtn {
            width: 160px;
            height: 50px;
            line-height: 40px;
            margin-right: 20px;
            border-radius: 12px;
            .mint-button-text {
                font-size: 30px;
            }
        }
        & > .active {
            color: #d82138;
            border: 1px solid #d82138;
            background-color: #fff !important;
        }
    }
}
.reision1 {
    margin-top: 20px;
    & > div.rBtn {
        background-color: #fff;
        height: 110px;
        padding-top: 20px;
        padding-left: 30px;
        border-radius: 10px;
        & > p {
            font-size: 30px;
        }
        & > div > .selectBtn {
            display: inline-block;
            margin-left: 40px;
            border: 1px solid #ccc;
            width: 480px;
            height: 60px;
            padding: 30px;
            border-radius: 12px;
            font-size: 30px;
        }
        & > div > img {
            width: 40px;
            height: 50px;
            position: absolute;
            right: 10px;
            top: 10px;
        }
    }
    .mint-cell {
        padding-bottom: 20px !important;
    }
    .mint-cell-title {
        width: 150px !important;
    }
    .mint-cell-text {
        font-size: 30px !important;
        margin-left: 20px !important;
        color: #000 !important;
    }
    .mint-field-core {
        border: 1px solid #ccc !important;
        margin-left: 40px !important;
        margin-right: 65px !important;
    }
}
.picker-toolbar-title {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 40px;
    line-height: 40px;
    font-size: 30px;
    margin-top: 30px;
}

.otherR .mint-field-core {
    font-size: 30px;
    color: #000;
}

.usi-btn-cancel {
    font-size: 30px;
}
.usi-btn-sure {
    color: #ff6600;
    font-size: 30px;
}
.picker-slot-wrapper {
    height: 750px !important;
    font-size: 30px;
}
.mtPicker {
    width: 750px;
    height: 750px;
}
</style>