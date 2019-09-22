<template>
    <div class="menu-bar">
        <transition name="slide-up">
            <div class="menu-wrapper" :class="{'hide-box-shadow': menuVisible || !ifTitleAndMenuShow}"
                 v-show="menuVisible">
                <div class="icon-wrapper">
                    <span class="icon-menu icon"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-progress icon"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-bright icon"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-a icon" @click="showSetting(0)">A</span>
                </div>
            </div>
        </transition>
        <transition name="slide-up">
            <div class="setting-wrapper" v-show="menuVisible&&settingVisible===0">
                <!--设置字体-->
                <div class="setting-font-size">
                    <div class="preview" :style="{fontSize:defaultFontSize+'px'}">A</div>
                    <div class="select">
                        <div class="select-wrapper" v-for="fontSize in fontSizeList"
                             @click="setFontSize(fontSize.fontSize)">
                            <div class="line"></div>
                            <div class="point-wrapper">
                                <div class="point" v-show="defaultFontSize===fontSize.fontSize">
                                    <div class="small-point"></div>
                                </div>
                            </div>
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="preview" :style="{fontSize:fontSizeList[fontSizeList.length-1].fontSize+'px'}">A</div>
                </div>
                <div class="setting-font-family">
                    <div class="setting-font-family-text-wrapper" @click="showFontFamilySetting">
                        <span class="setting-font-family-text">{{defaultFontFamily}}</span>
                    </div>
                    <div class="setting-font-family-icon-wrapper">
                        <span class="icon-forward"></span>
                    </div>
                </div>

            </div>
        </transition>
       <transition name="slide-up">
           <div class="ebook-popup-list" v-show="fontFamilyVisible">
               <div class="ebook-popup-title">
                   <div class="ebook-popup-title-icon" @click="hideFontFamilySetting">
                       <span class="icon-down2"></span>
                   </div>
                   <span class="ebook-popup-title-text">选择字体</span>
               </div>
               <div class="ebook-popup-list-wrapper">
                   <div class="ebook-popup-item" v-for="(item, index) in fontFamily" :key="index"
                        @click="setFontFamily(item.font)">
                       <div class="ebook-popup-item-text" :class="{'selected': isSelected(item)}">{{item.font}}
                       </div>
                       <div class="ebook-popup-item-check" v-show="isSelected(item)">
                           <span class="icon-check"></span>
                       </div>
                   </div>
               </div>
           </div>
       </transition>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  // import ContentView from '@/components/Content'
  export default {
    // components: {
    //     ContentView
    // },
    props: {
      ifTitleAndMenuShow: {
        type: Boolean,
        default: false
      },
      themeList: Array,
      defaultTheme: Number,
      bookAvailable: {
        type: Boolean,
        default: false
      },
      navigation: Object
    },
    data () {
      return {
        ifSettingShow: false,
        showTag: 0,
        progress: 0,
        ifShowContent: false,
        fontSizeList: [{fontSize: 12},
          {fontSize: 14},
          {fontSize: 16},
          {fontSize: 18},
          {fontSize: 20},
          {fontSize: 22},
          {fontSize: 24}],
        fontFamily: [
          {font: 'Default'},
          {font: 'Cabin'},
          {font: 'Days One'},
          {font: 'Montserrat'},
          {font: 'Tangerine'}]
      }
    },
    computed: {
      ...mapGetters(['menuVisible', 'defaultFontSize', 'settingVisible', 'defaultFontFamily', 'fontFamilyVisible'])
    },
    methods: {
      // 隐藏目录
      hideContent () {
        this.ifShowContent = false
      },
      showFontFamilySetting () {
        this.$store.commit('SET_FONT_FAMILY_VISIBLE', true)
      },
      hideFontFamilySetting () {
        this.$store.commit('SET_FONT_FAMILY_VISIBLE', false)
      },
      isSelected (item) {
        return this.defaultFontFamily === item.font
      },
      setFontFamily(item){
      this.$store.commit('SET_DEFAULT_FONT_FAMILY',item)
      },
      // 跳转方法，调用父组件方法
      jumpTo (target) {
        this.$emit('jumpTo', target)
      },
      // 拖动进度条时触发事件
      onProgressInput (progress) {
        this.progress = progress
        this.$refs.progress.style.backgroundSize = `${this.progress}% 100%`
      },
      // 进度条松开后触发事件，根据进度条数值跳转到指定位置
      onProgressChange (progress) {
        this.$emit('onProgressChange', progress)
      },
      // 设置主题
      setTheme (index) {
        this.$emit('setTheme', index)
      },
      // 设置字号
      setFontSize (fontSize) {
        this.$store.commit('SET_DEFAULT_FONT_SIZE', fontSize)
        // this.$emit('setFontSize', fontSize)
      },
      // 显示设置面板
      showSetting (tag) {
        // this.showTag = tag
        // if (this.showTag === 3) {
        //   this.ifSettingShow = false
        //   this.ifShowContent = true
        // } else {
        //   this.ifSettingShow = true
        // }
        this.$store.commit('SET_SETTING_VISIBLE', tag)
      },
      // 显示设置面板
      hideSetting () {
        this.ifSettingShow = false
      }
    }
  }

</script>

<style lang='scss' scoped>
    @import '../../assets/styles/global';

    .menu-bar {
        .ebook-popup-list {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 350;
            width: 100%;
            font-size: 0;
            background: #fff;
            box-shadow: 0 px2rem(-4) px2rem(6) rgba(0, 0, 0, .1);

            .ebook-popup-title {
                position: relative;
                text-align: center;
                padding: px2rem(15);
                border-bottom: px2rem(1) solid #b8b9bb;
                box-sizing: border-box;
                @include center;

                .ebook-popup-title-text {
                    font-size: px2rem(14);
                    font-weight: bold;
                }

                .ebook-popup-title-icon {
                    position: absolute;
                    left: px2rem(15);
                    top: 0;
                    height: 100%;
                    @include center;

                    .icon-down2 {
                        font-size: px2rem(16);
                        font-weight: bold;
                    }
                }
            }

            .ebook-popup-list-wrapper {
                .ebook-popup-item {
                    display: flex;
                    padding: px2rem(15);

                    .ebook-popup-item-text {
                        flex: 1;
                        font-size: px2rem(14);
                        text-align: left;

                        &.selected {
                            color: #346cb9;
                            font-weight: bold;
                        }
                    }

                    .ebook-popup-item-check {
                        flex: 1;
                        text-align: right;

                        .icon-check {
                            font-size: px2rem(14);
                            font-weight: bold;
                            color: #346cb9;
                        }
                    }
                }
            }
        }
        .menu-wrapper {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 102;
            display: flex;
            width: 100%;
            height: px2rem(48);
            background: white;
            box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);

            &.hide-box-shadow {
                box-shadow: none;
            }

            .icon-wrapper {
                flex: 1;
                @include center;

                .icon-progress {
                    font-size: px2rem(28);
                }

                .icon-bright {
                    font-size: px2rem(24);
                }
            }
        }

        .setting-wrapper {
            position: absolute;
            bottom: px2rem(48);
            left: 0;
            z-index: 190;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: px2rem(90);
            background: #fff;
            box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);

            .setting-font-size {
                display: flex;
                height: 100%;

                .preview {
                    flex: 0 0 px2rem(40);
                    @include center;
                }

                .select {
                    display: flex;
                    flex: 1;

                    .select-wrapper {
                        flex: 1;
                        display: flex;
                        align-items: center;

                        &:first-child {
                            .line {
                                &:first-child {
                                    border-top: none;
                                }
                            }
                        }

                        &:last-child {
                            .line {
                                &:last-child {
                                    border-top: none;
                                }
                            }
                        }

                        .line {
                            flex: 1;
                            height: 0;
                            border-top: px2rem(1) solid #ccc;
                        }

                        .point-wrapper {
                            position: relative;
                            flex: 0 0 0;
                            width: 0;
                            height: px2rem(7);
                            border-left: px2rem(1) solid #ccc;

                            .point {
                                position: absolute;
                                top: px2rem(-8);
                                left: px2rem(-10);
                                width: px2rem(20);
                                height: px2rem(20);
                                border-radius: 50%;
                                background: white;
                                border: px2rem(1) solid #ccc;
                                box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, .15);
                                @include center;

                                .small-point {
                                    width: px2rem(5);
                                    height: px2rem(5);
                                    background: black;
                                    border-radius: 50%;
                                }
                            }
                        }
                    }
                }
            }

            .setting-font-family {
                flex: 1;
                font-size: px2rem(14);
                @include center;

                .setting-font-family-text-wrapper {
                    @include center;
                }

                .setting-font-family-icon-wrapper {
                    @include center;
                }
            }



            .setting-theme {
                height: 100%;
                display: flex;

                .setting-theme-item {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    padding: px2rem(5);
                    box-sizing: border-box;

                    .preview {
                        flex: 1;
                        border: px2rem(1) solid #ccc;
                        box-sizing: border-box;

                        &.no-border {
                            border: none;
                        }
                    }

                    .text {
                        flex: 0 0 px2rem(20);
                        font-size: px2rem(14);
                        color: #ccc;
                        @include center;

                        &.selected {
                            color: #333;
                        }
                    }
                }
            }

            .setting-progress {
                position: relative;
                width: 100%;
                height: 100%;

                .progress-wrapper {
                    width: 100%;
                    height: 100%;
                    @include center;
                    padding: 0 px2rem(30);
                    box-sizing: border-box;

                    .progress {
                        width: 100%;
                        -webkit-appearance: none;
                        height: px2rem(2);
                        background: -webkit-linear-gradient(#999, #999) no-repeat, #ddd;
                        background-size: 0 100%;

                        &:focus {
                            outline: none;
                        }

                        &::-webkit-slider-thumb {
                            -webkit-appearance: none;
                            height: px2rem(20);
                            width: px2rem(20);
                            border-radius: 50%;
                            background: white;
                            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .15);
                            border: px2rem(1) solid #ddd;
                        }
                    }
                }

                .text-wrapper {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    color: #333;
                    font-size: px2rem(12);
                    text-align: center;
                }
            }
        }

        .content-mask {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 101;
            display: flex;
            width: 100%;
            height: 100%;
            background: rgba(51, 51, 51, .8);
        }
    }
</style>
