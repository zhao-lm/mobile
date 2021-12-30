<template>
    <div class="content-box">
        <v-touch @swipeleft="swipeLeft" @swiperight="swipeRight" :swipe-options="{direction: 'horizontal'}">
            <img src="../../assets/loginImg/guide1.png" alt="">

        </v-touch>
    </div>

</template>

<script>
export default {
    components: {},
    data() {
        return {
            transitionName: 'slideright'
        };
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
    }
};
</script>


<style lang="less">
@import '~styles/index.less';
@import '~styles/variable.less';
.content-box {
    width: 100%;
    height: 100%;
}
.content-box img {
    width: 100%;
    height: 100%;
}
</style>