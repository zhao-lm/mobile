<template>
    <div class="content-box">
        <img src="../../assets/loginImg/guide2.png" alt="">
        <mt-button class="word2" @click="nextGuide"></mt-button>
          <v-touch
                @swipeleft = "swipeLeft"
                @swiperight = "swipeRight"
                :swipe-options="{direction: 'horizontal'}">
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
    swipeleft(){
        // 页面跳转或其它操作
    },
    nextGuide() {
         this.$router.togo({ path: '/home' })
    }
  }
};
</script>


<style lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.content-box {
    width: 100%;
    height: 100%;
}
.content-box img {
    width: 100%;
    height: 100%;
}
.word2 {
    width: 4rem;
    height: 1.5rem;
    background: none;
    position: absolute;
    bottom: 1.2rem;
    left: 3rem;
    z-index: 12;
    box-shadow: none;
    -webkit-box-shadow: none;
}
</style>