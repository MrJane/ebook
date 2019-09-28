<template>
    <div class="store-home">
        <SearchBar></SearchBar>
        <flap-card></flap-card>
        <Scroll @onScroll="onscroll" :top="52">
            <div class="banner-wrapper">
                <img src="http://47.99.166.157/book/res/home_banner.jpg" alt="" class="banner">
            </div>
            <div class="guess-you-like">
                <div class="home-title-wrapper">
                    <div class="label">猜你喜欢</div>
                    <div class="btn">换一批</div>
                </div>
                <div class="guess-you-like-list">
                    <div class="guess-you-like-item">
                        <div class="img-wrapper">
                            <img src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                 alt="">
                        </div>
                        <div class="content-wrapper">
                            <div class="title title title-big">Ecological Risk Assessment for Chlorpyrifos in
                                Terrestrial and Aquatic
                                Systems in the United States
                            </div>
                            <div class="author sub-title">John P. Giesy and Keith R. Solomon</div>
                            <div class="result third-title">阅读《Living with Disfigurement》的人，97%都在读</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recommend">
                <div class="home-title-wrapper">
                    <div class="label">热门推荐</div>
                    <div class="btn">查看全部</div>
                </div>
                <div class="recommend-list">
                    <div class="recommend-item">
                        <div class="img-wrapper">
                            <img class="img"
                                 src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg">
                        </div>
                        <div class="content-wrapper">
                            <div class="title-medium title">Paris Climate Agreement: Beacon of Hope</div>
                            <div class="num sub-title">4824人同时在读</div>
                        </div>
                    </div>
                    <div class="recommend-item">
                        <div class="img-wrapper">
                            <img class="img"
                                 src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg">
                        </div>
                        <div class="content-wrapper">
                            <div class="title-medium title">Paris Climate Agreement: Beacon of Hope</div>
                            <div class="num sub-title">4824人同时在读</div>
                        </div>
                    </div>
                    <div class="recommend-item">
                        <div class="img-wrapper">
                            <img class="img"
                                 src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg">
                        </div>
                        <div class="content-wrapper">
                            <div class="title-medium title">Paris Climate Agreement: Beacon of Hope</div>
                            <div class="num sub-title">4824人同时在读</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="featured">
                <div class="home-title-wrapper">
                    <div class="label">精选</div>
                    <div class="btn">查看全部</div>
                </div>
                <div class="featured-list">
                    <div class="featured-item">
                        <div class="img-wrapper">
                            <img src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                 alt="">
                        </div>
                        <div class="content-wrapper">
                            <div class="title title-small" ref="title">Paris Climate Agreement: Beacon of Hope</div>
                            <div class="author sub-title-tiny" ref="author">John P. Giesy and Keith R. Solomon</div>
                            <div class="category third-title-tiny" ref="category">经济学</div>
                        </div>
                    </div>
                    <div class="featured-item">
                        <div class="img-wrapper">
                            <img src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                 alt="">
                        </div>
                        <div class="content-wrapper">
                            <div class="title title-small" ref="title">Paris Climate Agreement: Beacon of Hope</div>
                            <div class="author sub-title-tiny" ref="author">John P. Giesy and Keith R. Solomon</div>
                            <div class="category third-title-tiny" ref="category">经济学</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="category-book">
                <div class="home-title-wrapper">
                    <div class="label">分类</div>
                    <div class="btn">查看全部</div>
                </div>
            </div>
            <div class="category">
                <div class="home-title-wrapper">
                    <div class="label">工程学</div>
                    <div class="btn">查看全部</div>
                </div>
                <div class="category-list">
                    <div class="category-list-item-wrapper">
                        <div class="category-list-item">
                            <div class="content-wrapper">
                                <div class="title title-medium">计算机科学</div>
                                <div class="num sub-title-tiny">计算机科学</div>
                            </div>
                            <div class="img-wrapper">
                                <div class="img-group">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="category-list-item-wrapper">
                        <div class="category-list-item">
                            <div class="content-wrapper">
                                <div class="title title-medium">计算机科学</div>
                                <div class="num sub-title-tiny">计算机科学</div>
                            </div>
                            <div class="img-wrapper">
                                <div class="img-group">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="category-list-item-wrapper">
                        <div class="category-list-item">
                            <div class="content-wrapper">
                                <div class="title title-medium">计算机科学</div>
                                <div class="num sub-title-tiny">计算机科学</div>
                            </div>
                            <div class="img-wrapper">
                                <div class="img-group">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="category-list-item-wrapper">
                        <div class="category-list-item">
                            <div class="content-wrapper">
                                <div class="title title-medium">计算机科学</div>
                                <div class="num sub-title-tiny">计算机科学</div>
                            </div>
                            <div class="img-wrapper">
                                <div class="img-group">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="category-list-item-wrapper">
                        <div class="category-list-item">
                            <div class="content-wrapper">
                                <div class="title title-medium">计算机科学</div>
                                <div class="num sub-title-tiny">计算机科学</div>
                            </div>
                            <div class="img-wrapper">
                                <div class="img-group">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="category-list-item-wrapper">
                        <div class="category-list-item">
                            <div class="content-wrapper">
                                <div class="title title-medium">计算机科学</div>
                                <div class="num sub-title-tiny">计算机科学</div>
                            </div>
                            <div class="img-wrapper">
                                <div class="img-group">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="category-list-item-wrapper">
                        <div class="category-list-item">
                            <div class="content-wrapper">
                                <div class="title title-medium">计算机科学</div>
                                <div class="num sub-title-tiny">计算机科学</div>
                            </div>
                            <div class="img-wrapper">
                                <div class="img-group">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="category-list-item-wrapper">
                        <div class="category-list-item">
                            <div class="content-wrapper">
                                <div class="title title-medium">计算机科学</div>
                                <div class="num sub-title-tiny">计算机科学</div>
                            </div>
                            <div class="img-wrapper">
                                <div class="img-group">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="category-list-item-wrapper">
                        <div class="category-list-item">
                            <div class="content-wrapper">
                                <div class="title title-medium">计算机科学</div>
                                <div class="num sub-title-tiny">计算机科学</div>
                            </div>
                            <div class="img-wrapper">
                                <div class="img-group">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="category-list-item-wrapper">
                        <div class="category-list-item">
                            <div class="content-wrapper">
                                <div class="title title-medium">计算机科学</div>
                                <div class="num sub-title-tiny">计算机科学</div>
                            </div>
                            <div class="img-wrapper">
                                <div class="img-group">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="category-list-item-wrapper">
                        <div class="category-list-item">
                            <div class="content-wrapper">
                                <div class="title title-medium">计算机科学</div>
                                <div class="num sub-title-tiny">计算机科学</div>
                            </div>
                            <div class="img-wrapper">
                                <div class="img-group">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="category-list-item-wrapper">
                        <div class="category-list-item">
                            <div class="content-wrapper">
                                <div class="title title-medium">计算机科学</div>
                                <div class="num sub-title-tiny">计算机科学</div>
                            </div>
                            <div class="img-wrapper">
                                <div class="img-group">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                    <img class="img"
                                         src="http://47.99.166.157/book/res/img/Environment/2014_Book_EcologicalRiskAssessmentForChl.jpeg"
                                         alt="">
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Scroll>
    </div>
</template>

<script>
  import SearchBar from '../../components/home/SearchBar'
  import Scroll from '../../components/Scroll'
  import FlapCard from '../../components/home/FlapCard'
  import {home2} from '@/api/book'

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
    },
    mounted () {
      home2().then(response => {
        if (response.status === 200 && response.data) {
          // this.parseHomeData(response.data)
          // saveHome(response.data)
          console.log(response.data);
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/global";
    .banner-wrapper {
        width: 100%;
        padding: px2rem(10);
        box-sizing: border-box;
        /*banner 可以通过背景图实现*/
        img {
            width: 100%;
            height: px2rem(140);
        }
    }
    .home-title-wrapper {
        width: 100%;
        display: flex;
        padding: px2rem(15) px2rem(10);
        justify-content: center;
        align-items: flex-start;
        box-sizing: border-box;
        @include top;
        .label {
            flex: 1;
            font-size: px2rem(18);
            color: #333;
            font-weight: bold;
        }
        .btn {
            font-size: px2rem(14);
            color: rgba(64, 158, 255, 1);
            &.touch {
                color: rgba(64, 158, 255, .5);
            }
        }
    }
    .guess-you-like {
        .guess-you-like-list {
            padding: 0 px2rem(10);
        }
        .guess-you-like-item {
            display: flex;
            .img-wrapper {
                flex: 0 0 20%;
                padding: px2rem(10) px2rem(10) px2rem(10) 0;
                box-sizing: border-box;
                img {
                    width: 100%;
                }
            }
            .content-wrapper {
                flex: 1;
                padding: px2rem(10) 0;
                box-sizing: border-box;
                .author {
                    margin-top: px2rem(15);
                }
                .result {
                    margin-top: px2rem(5);
                }
            }
        }
    }
    .recommend-list {
        width: 100%;
        display: flex;
        .recommend-item {
            flex: 0 0 33.33%;
            width: 33.33%;
            padding: 0 px2rem(5);
            box-sizing: border-box;
            .img-wrapper {
                @include center;
                .img {
                    width: 80%;
                }
            }
            .content-wrapper {
                width: 100%;
                margin-top: px2rem(10);
                @include columnCenter;
                .title {
                    text-align: center;
                }
                .num {
                    margin-top: px2rem(5);
                }
            }
        }
    }
    .featured-list {
        width: 100%;
        padding: 0 px2rem(10);
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        .featured-item {
            flex: 0 0 50%;
            width: 50%;
            padding: px2rem(5) 0;
            @include top;
            .img-wrapper {
                flex: 0 0 30%;
                width: 30%;
                img {
                    width: 100%;
                    // width: px2rem(50);
                    // height: px2rem(75);
                }
            }
            .content-wrapper {
                flex: 1;
                width: px2rem(117.5);
                padding: 0 px2rem(5);
                box-sizing: border-box;
                .author {
                    margin-top: px2rem(15);
                }
                .category {
                    margin-top: px2rem(5);
                }
            }
        }
    }
    .category {
        .category-list {
            display: flex;
            flex-flow: row wrap;
            width: 100%;
            .category-list-item-wrapper {
                flex: 0 0 50%;
                width: 50%;
                padding: 0 px2rem(5) px2rem(10) px2rem(5);
                box-sizing: border-box;
                &:nth-child(odd) {
                    padding-left: px2rem(10);
                }
                &:nth-child(even) {
                    padding-right: px2rem(10);
                }
            }
            .category-list-item {
                display: flex;
                background: #eee;
                .content-wrapper {
                    flex: 0 0 50%;
                    width: 50%;
                    @include columnCenter;
                    .title {
                        text-align: center;
                    }
                    .num {
                        text-align: center;
                        margin-top: px2rem(5);
                    }
                }
                .img-wrapper {
                    flex: 0 0 50%;
                    width: 50%;
                    padding: px2rem(20) px2rem(10);
                    box-sizing: border-box;
                    .img-group {
                        position: relative;
                        width: 100%;
                        height: px2rem(60);
                        @include left;
                        .img {
                            position: absolute;
                            left: 0;
                            top: 0;
                            z-index: 100;
                            width: px2rem(45);
                            height: px2rem(60);
                        }
                        .img2 {
                            position: absolute;
                            left: px2rem(30);
                            top: px2rem(7.5);
                            z-index: 99;
                            width: px2rem(30);
                            height: px2rem(45);
                        }
                    }
                }
            }
        }
    }
</style>
