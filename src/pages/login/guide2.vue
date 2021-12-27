<template>
    <div class="content-box guide2">
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
.guide2 img {
    width: 100%;
    height: 100%;
}
.word2 {
    width: 5rem;
    height: 2rem;
    background: none;
    position: absolute;
    bottom: 1rem;
    left: 3rem;
    z-index: 1200;
    box-shadow: none;
    background-color: transparent;
    -webkit-box-shadow: none;
}
</style>