<template>
    <div class="content-box guide1">
        <div>
            <v-touch @swipeleft="swipeLeft" @swiperight="swipeRight" :swipe-options="{direction: 'horizontal'}">
                <img src="../../assets/loginImg/guide1.png" alt="">

            </v-touch>
        </div>
    </div>
</template>

<script>
let viewG;
export default {
    components: {},
    data() {
        return {
            transitionName: 'slideright'
        };
    },
    created() {
        viewG = setTimeout(() => {
            this.swipeLeft()
        }, 1000)
    },
    methods: {
        swipeRight() {
            this.$router.go(-1)
            // 页面跳转或其它操作
        },
        swipeLeft() {
            this.$router.togo({ path: '/login/guide2' })
        },
        nextGuide() {
            this.$router.togo({ path: '/login/guide2' })
        }
    },
    destroyed() {
        clearTimeout(viewG)
    }
};
</script>


<style lang="less" scoped>
@import '~styles/index.less';
@import '~styles/variable.less';
.content-box {
    width: 100%;
    height: 100%;
}
.guide1 img {
    width: 100%;
    height: 100%;
    display: block;
}
.guide1>div:nth-of-type(1){
    background: #F6F9FA;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    &>div{
        width: 100%;
    }
}
</style>