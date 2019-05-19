<template>
    <div class="ebook-read" @click="test">
        <div id="read" @click="test2"></div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Epub from 'epubjs'

  global.epub = Epub;
  export default {
    name: "EbookReader",
    computed: {
      ...mapGetters(['fileName'])
    },
    mounted () {
      this.initEpub();
    },
    methods: {
      test(){
        // console.log('lllllll')
      },
      test2(e){
        e.stopPropagation()
        console.log('222222222222222')
      },
      initEpub () {
        // const url = '' + this.fileName;
        // this.book = new Epub(this.fileName);
        // this.rendition = this.book.renderTo('read', {
        //   width: window.innerWidth,
        //   height: window.innerHeight*0.5,
        //   method:'default'
        // });
        // this.rendition.display();
        // //epub电子书原理是嵌入iframe,可以把事件绑定到iframe即this.rendition监听事件
        // this.rendition.on('touchstart', event => {
        //   // console.log(event);
        //   this.touchStartX = event.changedTouches[0].clientX
        //   this.touchStartTime = event.timeStamp
        // })
        // this.rendition.on('touchend',(event)=>{
        //   console.log('event',event)
        // })
      }
    }
  }
</script>

<style lang="scss" scoped>
.ebook-read{
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 200;
    #read{
        z-index: 300;
        height: 400px;
        width: 100%;
        overflow: hidden;
        background-color: rebeccapurple;
    }
}
</style>