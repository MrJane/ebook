<template>
    <transition name="slide-down">

            <div class="title-wrapper" v-show="menuVisible">
                <div class="left">
                    <div class="icon-wrapper">
                        <span class="icon-back icon"></span>
                    </div>
                </div>
                <div class="right">
                    <div class="icon-wrapper">
                        <span class="icon-cart icon"></span>
                    </div>
                    <div class="icon-wrapper">
                        <span class="icon-person icon"></span>
                    </div>
                    <div class="icon-wrapper">
                        <span class="icon-more icon"></span>
                    </div>
                </div>
            </div>

    </transition>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "EbookTitle",
    computed: {
      ...mapGetters(['menuVisible'])
    },
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/global";

    .title {
        position: relative;

    }
    .title-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: px2rem(48);
        display: flex;
        background: #fff;
        box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15);
        .left {
            flex: 0 0 px2rem(60);
            @include center;
            .icon {
                font-size: px2rem(24);
            }
        }
        .right {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            .icon-wrapper {
                flex: 0 0 px2rem(40);
                @include center;
                .icon {
                    font-size: px2rem(24);
                }
                .icon-cart {
                    font-size: px2rem(24);
                }
            }
        }
    }

</style>
