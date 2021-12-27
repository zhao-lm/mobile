<template>
    <div class="content-box">
        <!-- <common-header :tittle="tittle" :showback="false"></common-header> -->
        <div class="page-content user_box">
            <div>
                <img src="../../assets/detailImg/头像 男孩备份.png" alt="">
                <div>
                    <p>{{data.name}}</p>
                    <p>ID {{data.id}}</p>
                </div>
            </div>
            <ul>
                <li class="item_list">
                    <p>头像</p><img src="../../assets/detailImg/返回键备份 5.png" alt="">
                </li>
                <li class="item_list">
                    <p class="active">用户名</p>
                    <p>{{data.userName}}</p>
                </li>
                <li class="item_list">
                    <p>性别</p>
                    <p>{{data.gender}}</p>
                </li>
                <li class="item_list">
                    <p>部门</p>
                    <p>{{data.department}}</p>
                </li>
            </ul>
            <ul>
                <li class="item_list">
                    <p>已绑手机号</p>
                    <p>{{data.phone}}</p>
                </li>
                <li class="item_list">
                    <p class="active">账号类型</p>
                    <p>{{data.numberType}}</p>
                </li>
                <li class="item_list">
                    <p>所属组织</p>
                    <p>{{data.organization}}</p>
                </li>
                <li class="item_list">
                    <p>是否为联通内部员工</p>
                    <p v-text="data.staff?'是':'否'"></p>
                </li>
                <li class="item_list">
                    <p>云门户邮箱</p>
                    <p>{{data.email}}</p>
                </li>
            </ul>
            <div>
                退出
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex'
import commonHeader from 'common/common-header'
export default {
    data() {
        return {
            data: {
                img: '',
                name: 'sunyong51',
                id: '爱吃滋补鸡腿',
                userName: '孙勇',
                gender: '男',
                department: '数字化部',
                phone: '12345678912',
                numberType: '云门户账号',
                organization: '',
                staff: true,
                email: ''
            }
        }
    },
    created() { },
    methods: {
    },
    components: {
        commonHeader
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~styles/index.less';
@import '~styles/variable.less';
.page-content {
    .mb(98);
}
.user_box {
    padding: 0px 0px 66px;
    & > div:nth-of-type(1) {
        height: 190px;
        // padding-top: 20px;
        display: flex;
        align-items: center;
        background: #fff;
        & > img {
            width: 160px;
            height: 170px;
        }
        & > div {
            & > p:nth-of-type(1) {
                font-size: 36px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #000000;
            }
            & > p:nth-of-type(2) {
                margin-top: 8px;
                padding: 2px 14px;
                background: #f8f8f8;
                border-radius: 18px;
                font-size: 22px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #000000;
            }
        }
    }
    & > div:nth-of-type(2) {
        width: 598px;
        height: 84px;
        background: linear-gradient(270deg, #fd7f63 0%, #f6565c 100%);
        border-radius: 42px;
        margin: 122px auto 0;
        line-height: 84px;
        text-align: center;
        font-size: 36px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
    }
    & > ul {
        margin-top: 20px;
    }
    .item_list {
        background: #fff;
        margin-bottom: 2px;
        padding: 24px 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & > p:nth-of-type(1) {
            font-size: 28px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
        }
        & > p.active {
            color: #000000;
        }
        & > p:nth-of-type(2) {
            font-size: 24px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #666666;
            
        }
        & img {
                width: 32px;
                height: 32px;
            }
    }
}
</style>
