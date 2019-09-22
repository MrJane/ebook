<template>
    <div class="store-home">
        <SearchBar></SearchBar>
        <flap-card></flap-card>
        <Scroll @onScroll="onscroll" :top="94">
            <div class="banner-wrapper">
                <img src="http://47.99.166.157/book/res/home_banner.jpg" alt="" class="banner">
            </div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
            <div>1111111111111111111111111</div>
        </Scroll>
    </div>
</template>

<script>
  import SearchBar from '../../components/home/SearchBar'
  import Scroll from '../../components/Scroll'
  import FlapCard from '../../components/home/FlapCard'

  export default {
    name: "StoreHome",
    components: {
      SearchBar,
      Scroll,
      FlapCard
    },
    methods: {
      onscroll (offset) {
        this.$store.commit('SET_OFFSETY', offset);
        // console.log(offset);
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/global";

    .banner-wrapper {
        width: 100%;
    }
</style>
