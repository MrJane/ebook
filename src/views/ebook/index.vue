<template>
    <div class="ebook" @click="test">
        <ebook-title v-show="isTitleAndMenuShow"></ebook-title>
        <ebook-reader></ebook-reader>
        <ebook-menu v-show="isTitleAndMenuShow"></ebook-menu>
    </div>
</template>

<script>
  import EbookTitle from '../../components/ebook/EbookTitle';
  import EbookMenu from '../../components/ebook/EbookMenu';
  import EbookReader from '../../components/ebook/EbookReader';

  export default {
    name: "index",
    components:
      {
        EbookTitle,
        EbookMenu,
        EbookReader
      },
    data () {
      return {
        isTitleAndMenuShow:true
      }
    },
    methods:{
      toggleTitleAndMenu(){
        this.isTitleAndMenuShow = !this.isTitleAndMenuShow;
      },
      test(){
        // console.log(this.isTitleAndMenuShow)
      }
    }
  }
</script>

<style lang="scss" scoped>
.ebook{
    height: 100%;
    width: 100%;
}
</style>