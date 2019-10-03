<template>
    <div class="search-bar-wrapper">
        <div class="search-bar" :class="{'hide':!titleVisiable,'hide-shadow':!shadowVisiable}">
            <transition name="title">
                <div class="search-bar-title-wrapper" v-show="titleVisiable">
                    <!--            <div class="title-icon-back-wrapper">-->
                    <!--                <span class="icon-back"></span>-->
                    <!--            </div>-->
                    <div class="title-icon-text-wrapper">
                        <span class="icon-text">书城</span>
                    </div>
                    <div class="title-icon-shake-wrapper" @click="showFlapCard">
                        <span class="icon-shake"></span>
                    </div>
                </div>
            </transition>
            <!-- 这个返回单独抽出来，因为下拉时，要同和搜索框显示-->
            <div class="title-icon-back-wrapper" @click="back" :class="{'show-search':!titleVisiable}">
                <span class="icon-back"></span>
            </div>
            <div class="search-bar-input-wrapper" :class="{'show-search':!titleVisiable}">
                <div class="search-back-wrapper" :class="{'show-search':!titleVisiable}">
                    <span class="icon-back icon"></span>
                </div>
                <!-- <div class="blank"></div>-->
                <div class="search-bar-input">
                    <span class="icon-search"></span>
                    <input type="text" placeholder="请输入..." class="input" v-model="searchText" @click="showSearch">
                </div>
            </div>

        </div>
        <transition name="host-search">
            <Scroll class="hot-search-wrapper" :top="52" @onScroll="onscroll" v-show="hotSearchVisiable">
                <hot-search label="热门搜索" btn="换一批"></hot-search>
                <hot-search label="历史搜索" btn="清空"></hot-search>
                <hot-search label="热门搜索" btn="换一批"></hot-search>
                <hot-search label="历史搜索" btn="清空"></hot-search>
                <!--                <div class="hot-search-wrapper" v-show="hotSearchVisiable">-->
                <!--                    <hot-search label="热门搜索" btn="换一批"></hot-search>-->
                <!--                    <hot-search label="历史搜索" btn="清空"></hot-search>-->
                <!--                    <hot-search label="热门搜索" btn="换一批"></hot-search>-->
                <!--                    <hot-search label="历史搜索" btn="清空"></hot-search>-->
                <!--                </div>-->
            </Scroll>

        </transition>

    </div>

</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import HotSearch from '../../components/home/HotSearch';
  import HotSearchList from '../../components/home/HotSearchList'
  import Scroll from '../../components/Scroll'

  export default {
    name: "SearchBar",
    components: {
      HotSearch,
      HotSearchList,
      Scroll
    },
    data () {
      return {
        searchText: '',
        titleVisiable: true,
        shadowVisiable: false,
        hotSearchVisiable: false,
      }
    },
    computed: {
      ...mapGetters(['offsetY', 'hotOffsetY'])
    },
    methods: {
      onscroll (offset) {
        this.$store.commit('SET_SEARCH_OFFSETY', offset)
      },
      hideTitle () {
        this.titleVisiable = false;
      },
      showTitle () {
        this.titleVisiable = true;
      },
      hideShadow () {
        this.shadowVisiable = false;
      },
      showShadow () {
        this.shadowVisiable = true;
      },
      showSearch () {
        this.hideTitle();
        this.hideShadow();
        this.hotSearchVisiable = true;
      },
      showFlapCard(){
        this.$store.commit('SET_FLAP_CARD_VISIABLE', true)
      },
      back () {
        if (this.offsetY > 0) {
          this.showShadow()
        } else {
          this.hideShadow();
        }
        if (this.hotSearchVisiable){
            this.showTitle();
            this.hotSearchVisiable = false;
        }else {
            this.$router.push('/store/shelf')
        }

      }
    },
    watch: {
      offsetY (offset) {
        if (offset > 0) {
          this.hideTitle();
          this.showShadow()
        } else {
          this.showTitle();
          this.hideShadow()
        }
        console.log(offset);
      },
      hotOffsetY (offset) {
        if (offset > 0) {
          this.hideTitle();
          this.showShadow()
        } else {
          this.showTitle();
          this.hideShadow()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/global";

    .search-bar {
        position: relative;
        width: 100%;
        font-size: px2rem(20);
        height: px2rem(94);
        z-index: 102;
        box-shadow: 0 px2rem(2) px2rem(2) 0 rgba(0, 0, 0, .1);

        &.hide-shadow {
            box-shadow: none;
        }

        &.hide {
            height: px2rem(52)
        }

        .title-icon-back-wrapper {
            position: absolute;
            left: px2rem(15);
            height: px2rem(42);
            top: 0;
            @include center;
            z-index: 200;
            transition: all .2s linear;

            &.show-search {
                height: px2rem(52);
            }
        }

        .search-bar-title-wrapper {
            width: 100%;
            height: px2rem(42);
            /*background: red;*/
            position: absolute;
            z-index: 110;

            .title-icon-text-wrapper {
                width: 100%;
                height: px2rem(42);
                @include center
            }

            .title-icon-shake-wrapper {
                position: absolute;
                right: px2rem(15);
                height: px2rem(42);
                top: 0;
                @include center
            }
        }

        .search-bar-input-wrapper {
            width: 100%;
            position: absolute;
            padding: px2rem(10);
            box-sizing: border-box;
            top: px2rem(42);
            left: 0;
            display: flex;
            transition: top .2s linear;

            &.show-search {
                top: 0;
            }

            .blank {
                flex: 0 0 px2rem(31);
                width: px2rem(31);
            }

            .search-back-wrapper {
                flex: 0;
                width: 0;
                @include center;
                transition: all .2s linear;
                visibility: hidden;

                &.show-search {
                    margin-right: px2rem(10);
                    flex: 0 0 px2rem(20);
                    width: px2rem(20);
                }

                .icon-back {
                    font-size: 0;

                    &.show-search {
                        font-size: px2rem(20);
                    }
                }
            }

            .search-bar-input {
                border-radius: px2rem(20);
                padding: px2rem(5) px2rem(15);
                background: #f4f4f4;
                box-sizing: border-box;
                @include left;
                border: px2rem(1) solid #eee;
                flex: 1;

                .icon-search {
                    color: #999;
                }

                .input {
                    width: 100%;
                    height: px2rem(22);
                    border: none;
                    background: transparent;
                    outline: none;
                    margin-left: px2rem(10);

                    &::placeholder {
                        color: #ccc;
                    }
                }
            }
        }
    }

    .hot-search-wrapper {
        height: 750px;
        overflow-x: hidden;
        overflow-y: scroll
    }
</style>
