<template>
    <div class="ebook-read">
        <div id="read"></div>
        <!--              这个mask DOM元素控制点击事件 上翻下翻显示导航-->
        <div class="mask">
            <div class="left" @click="prevPage"></div>
            <div class="center" @click="toggleTitleAndMenu"></div>
            <div class="right" @click="nextPage"></div>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Epub from 'epubjs'

  global.epub = Epub;
  export default {
    name: "EbookReader",
    data () {
      return {
        touchStartX: 0,
        touchStartTime: 0
      }
    },
    computed: {
      ...mapGetters(['fileName', 'menuVisible'])
    },
    mounted () {
      console.log('dddd');
      this.initEpub();
    },
    methods: {
      prevPage () {
        this.rendition.prev();
      },
      nextPage (e) {
        this.rendition.next();
      },
      initEpub () {
        const url = '' + this.fileName;
        this.book = new Epub(url);
        // console.log(this.book);
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight,
          method: 'default'
        });
        this.rendition.display();
        //epub电子书原理是嵌入iframe,可以把事件绑定到iframe即this.rendition监听事件
        this.rendition.on('touchstart', event => {
          console.log(event);
          this.touchStartX = event.changedTouches[0].clientX
          this.touchStartTime = event.timeStamp
        })
        this.rendition.on('touchend', (event) => {
          const offsetX = event.changedTouches[0].clientX - this.touchStartX
          const time = event.timeStamp - this.touchStartTime
          console.log('time', time);
          console.log('offsetX', offsetX);
          event.preventDefault();
          event.stopPropagation()
        })
      },
      toggleTitleAndMenu () {
        // this.setMenuVisible(!this.menuVisible)
        if (this.menuVisible) {
          this.$store.commit('SET_SETTING_VISIBLE', -1)
        }
        this.$store.dispatch('setMenuVisible', !this.menuVisible)
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/global';

    .ebook-read {
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 200;

        .mask {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            /*background-color: red;*/
            display: flex;

            .left, .right {
                flex: 0 0 px2rem(100);
                /*background: #42b983;*/
            }

            .center {
                flex: 1;
                /*background: goldenrod;*/
            }
        }

        #read {
            /*z-index: 300;*/
            /*height: 400px;*/
            width: 100%;
            /*overflow: hidden;*/
            /*background-color: rebeccapurple;*/
        }
    }
</style>
