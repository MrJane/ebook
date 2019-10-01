<template>
    <div class="book-detail">
        <div class="title-wrapper">
            <div class="left">
                <i class="icon-back"></i>
            </div>
            <div class="right">
                <span class="icon-shelf icon"></span>
                <!--                <span class="icon-share"></span>-->
            </div>
            <div class="text">
                共 23 本图书
            </div>
        </div>
        <Scroll>
            <div class="book-info-wrapper">
                <div class="poster">
                    <img src="http://47.99.166.157/book/res/img//Engineering/2015_Book_ZukunftDerArbeitInIndustrie40.jpeg"
                         alt="">
                </div>
                <div class="book-info">
                    <div class="book-name">Zukunft der Arbeit in Industrie 4.0</div>
                    <div class="author">Alfons Botthof and Ernst Andreas Hartmann</div>
                    <div class="description">Zukunft der Arbeit in Industrie 4.0HerausgeberAlfons Botthof und Ernst
                        Andreas HartmannZukunft
                        der A
                    </div>
                </div>
            </div>
        </Scroll>
        <footer class="bottom-wrapper">
            <div class="bottom-btn">阅读</div>
            <div class="bottom-btn">阅读</div>
            <div class="bottom-btn">阅读</div>
        </footer>
    </div>
</template>

<script>
  import Scroll from '../../components/Scroll'

  export default {
    name: "detail",
    components: {Scroll}
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/global";
    .book-detail {
        .title-wrapper {
            position: relative;
            display: flex;
            width: 100%;
            height: px2rem(42);
            box-shadow: 0 px2rem(2) px2rem(2) 0 rgba(0, 0, 0, .1);
            font-size: px2rem(20);
            color: #666;
            align-items: center;
            justify-content: space-between;
            .left {
                margin-left: px2rem(15);
            }
            .right {
                margin-right: px2rem(15);
            }
            .text {
                position: absolute;
                top: 0;
                left: 0;
                text-align: center;
                width: 100%;
                height: px2rem(42);
                font-size: px2rem(16);
                line-height: px2rem(42);
            }
        }
        .book-info-wrapper {
            display: flex;
            width: 100%;
            padding: px2rem(10) 0;
            border-bottom: px2rem(1) solid #eee;
            .poster {
                flex: 0 0 px2rem(103);
                padding: px2rem(10) 0 px2rem(10) px2rem(15);
                box-sizing: border-box;
                img {
                    width: 100%;
                }
            }
            .book-info {
                flex: 1;
                padding: px2rem(10) px2rem(15);
                box-sizing: border-box;
                .book-name {
                    font-size: px2rem(24);
                    line-height: px2rem(26);
                    font-weight: bold;
                    color: #333;
                }
                .author {
                    font-size: px2rem(14);
                    line-height: px2rem(16);
                    color: $color-blue;
                    margin-top: px2rem(10);
                }
                .description {
                    font-size: px2rem(14);
                    line-height: px2rem(16);
                    color: #666;
                    word-break: keep-all;
                    white-space: normal;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    overflow-wrap: break-word;
                    margin-top: px2rem(10);
                }
            }
        }
        .bottom-wrapper {
            position: fixed;
            width: 100%;
            left: 0;
            bottom: 0;
            height: px2rem(52);
            box-shadow: 0 px2rem(-2) px2rem(2) rgba(0, 0, 0, .1);
            display: flex;
            .bottom-btn {
                flex: 1;
                color: $color-blue;
                font-weight: bold;
                font-size: px2rem(14);
                @include center;
            }
        }
    }
</style>
