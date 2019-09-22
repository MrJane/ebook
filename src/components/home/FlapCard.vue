<template>
    <div class="flap-card-wrapper" v-show="flapCardVisiable">
        <!--    翻转动画 难点-->
        <div class="flap-card-bg" v-show="false">
            <div class="flap-card">
                <div class="flap-card-circle">
                    <div class="flap-card-semi-circle left" :style="semiCircleStyle('left')"></div>
                    <div class="flap-card-semi-circle right" :style="semiCircleStyle('right')"></div>
                </div>
            </div>
        </div>
        <div class="book-card">
            <div class="book-card-wrapper">
                <div class="img-wrapper">
                    <img src="http://47.99.166.157/book/res/img/Environment/2015_Book_LifeCycleManagement.jpeg" alt="">
                </div>
                <div class="content-wrapper">
                    <div class="title">Life Cycle Management</div>
                    <div class="author sub-title">Guido Sonnemann and Manuele Margni</div>
                    <div class="category">jiaoyu</div>
                </div>
                <div class="read-btn">立即阅读</div>
            </div>
        </div>
        <div class="close-btn-wrapper" @click="close">
            <span class="icon icon-close"></span>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "FlapCard",
    data () {
      return {
        flapCardList: [
          {
            r: 255,
            g: 102,
            _g: 102,
            b: 159,
            imgLeft: 'url(' + require('@/assets/images/gift-left.png') + ')',
            imgRight: 'url(' + require('@/assets/images/gift-right.png') + ')',
            backgroundSize: '50% 50%',
            zIndex: 100,
            rotateDegree: 0
          },
          {
            r: 74,
            g: 171,
            _g: 171,
            b: 255,
            imgLeft: 'url(' + require('@/assets/images/compass-left.png') + ')',
            imgRight: 'url(' + require('@/assets/images/compass-right.png') + ')',
            backgroundSize: '50% 50%',
            zIndex: 99,
            rotateDegree: 0
          },
          {
            r: 255,
            g: 198,
            _g: 198,
            b: 102,
            imgLeft: 'url(' + require('@/assets/images/star-left.png') + ')',
            imgRight: 'url(' + require('@/assets/images/star-right.png') + ')',
            backgroundSize: '50% 50%',
            zIndex: 98,
            rotateDegree: 0
          },
          {
            r: 255,
            g: 102,
            _g: 102,
            b: 159,
            imgLeft: 'url(' + require('@/assets/images/heart-left.png') + ')',
            imgRight: 'url(' + require('@/assets/images/heart-right.png') + ')',
            backgroundSize: '50% 50%',
            zIndex: 97,
            rotateDegree: 0
          },
          {
            r: 59,
            g: 201,
            _g: 201,
            b: 22,
            imgLeft: 'url(' + require('@/assets/images/crown-left.png') + ')',
            imgRight: 'url(' + require('@/assets/images/crown-right.png') + ')',
            backgroundSize: '50% 50%',
            zIndex: 96,
            rotateDegree: 0
          }
        ],
      }
    },
    computed: {
      ...mapGetters(['flapCardVisiable'])
    },

    methods: {
      semiCircleStyle (dir) {
        return {
          backgroundColor: 'rgba(255,102,159)',
          backgroundSize: '50% 50%',
          backgroundImage: dir === 'left' ? 'url(' + require('@/assets/images/crown-left.png') + ')' : 'url(' + require('@/assets/images/crown-right.png') + ')'
        }
      },
      close () {
        this.$store.commit('SET_FLAP_CARD_VISIABLE', false)
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/global";

    .flap-card-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        background: rgba(0, 0, 0, 0.6);
        @include center;

        .flap-card-bg {
            position: relative;
            width: px2rem(64);
            height: px2rem(64);
            border-radius: px2rem(5);
            background: #fff;

            .flap-card {
                width: px2rem(48);
                height: px2rem(48);
                background: orange;
                @include absCenter;

                .flap-card-circle {
                    .flap-card-semi-circle {
                        &.left {
                        }

                        &.right {
                        }
                    }
                }
            }
        }

        .book-card {
            position: relative;
            width: 65%;
            box-sizing: border-box;
            border-radius: px2rem(15);
            background: white;

            .book-card-wrapper {
                width: 100%;
                height: 100%;
                margin-bottom: px2rem(50);
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;

                .img-wrapper {
                    width: 100%;
                    margin-top: 0.53333rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        width: 2.4rem;
                        height: 3.46667rem;
                    }
                }

                .content-wrapper {
                    padding: 0 px2rem(20);
                    margin-top: px2rem(20);

                    .title {
                        color: #333;
                        font-weight: bold;
                        font-size: px2rem(18);
                        line-height: px2rem(20);
                        max-height: px2rem(40);
                        text-align: center;
                        @include ellipsis2(2)
                    }

                    .author {
                        margin-top: px2rem(10);
                        text-align: center;
                    }
                    .category{
                        color: #999;
                        font-size: px2rem(14);
                        margin-top: px2rem(10);
                        text-align: center;
                    }
                }
                .read-btn{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    z-index: 1100;
                    width: 100%;
                    border-radius: 0 0 0.4rem 0.4rem;
                    padding: 0.4rem 0;
                    text-align: center;
                    color: white;
                    font-size: 0.37333rem;
                    background: #4aabff;
                }
            }
        }

        .close-btn-wrapper {
            position: absolute;
            bottom: px2rem(30);
            left: px2rem(0);
            width: 100%;
            z-index: 1100;
            @include center;
            cursor: pointer;

            .icon-close {
                width: px2rem(45);
                height: px2rem(45);
                background: #333;
                border-radius: 50%;
                font-size: px2rem(20);
                color: #fff;
                @include center;

            }
        }
    }
</style>
