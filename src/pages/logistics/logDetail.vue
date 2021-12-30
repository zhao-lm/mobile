<template>
    <div class="content-box">
        <common-header tittle="评价运单" :showContent="showContent"></common-header>
        <div class="page-content stor_box3">
            <div class="item content" v-for="(item, key) in arr" :key="key">
                <div>
                    <p>
                        <span>运单编号：</span>
                        <span>{{ item.code }}</span>
                    </p>
                    <p>
                        <span>华盛编号：</span>
                        <span>{{ item.hscode }}</span>
                    </p>
                    <p>
                        <span>运单图片：</span>
                        <img v-for="(val, index) in item.imgList" :key="index" :src="val.src" alt=""
                            @click="show(index)" />
                        <previewer ref="previewer" :list="item.imgList"> </previewer>
                    </p>
                    <p>
                        <span>上传时间：</span>
                        <span>{{ item.applicationTime }}</span>
                    </p>
                </div>
            </div>
            <div class="eResult">
                <p>评价结果</p>
                <div class="eBtn1">
                    <p>
                        <span>是否合格：</span>
                        <span>{{hege}}</span>
                    </p>
                    <p v-show="hege=='不合格'">
                        <span>原因分类：其他</span>
                    </p>
                    <p v-show="hege=='不合格'">
                        <span>具体原因：非本单签收单</span>
                    </p>
                </div>
            </div>
            <div class='hecha'>
                <p>核查信息</p>
                <div class="hBtn">
                    <p>
                        <span>核查人员：乔士兰</span>
                    </p>
                    <p>
                        <span>核查时间：2021-12-25 11:57</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>
import commonHeader from "common/common-header";
export default {
    data() {
        return {
            hege: '',
            active: 0,
            data: [
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
        };
    },
    created() {
        this.getData();
        this.init();
    },
    methods: {
        show(index) {
            // 显示特定index的图片，使用ref
            this.$refs.previewer[0].show(index);
        },
        init() {
            if (this.$route.params.flag == '1') {
                this.$data.hege = '合格'
            } else {
                this.$data.hege = '不合格'
            }
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
.stor_box3 {
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
        font-size: 0.4rem;
        padding: 0.3rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
    }
    & > div.eBtn1 {
        background-color: #fff;
        padding: 30px;
        padding-bottom: 5px;
        border-radius: 10px;
        & > p {
            margin-right: 60px;
            display: block;
            margin-bottom: 40px;
            span {
                font-size: 30px;
            }
        }
    }
}
.hecha > p {
    font-size: 30px;
    padding: 25px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
}
.hecha .hBtn {
    background-color: #fff;
    padding: 40px;
    padding-top: 10px;
    border-radius: 10px;
    font-size: 30px;
}
.hecha .hBtn p {
    margin-right: 60px;
    margin-top: 50px;
    font-size: 30px;
}
</style>