<template>
    <div class="hot-search">
        <div class="hot-search-title">
            <span class="label">{{label}}</span>
            <span class="btn">{{btn}}</span>
        </div>
        <div class="hot-search-list">
            <div class="hot-search-item" v-for="item in hotSearch">
                <div class="icon-wrapper">
                    <span class="icon-book icon" v-if="item.type===1"></span>
                    <span class="icon-search icon" v-if="item.type===2"></span>
                </div>
                <div class="hot-search-text-wrapper">
                    <div class="text">{{item.text}}</div>
                    <div class="num">{{item.num}}人搜索</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "HotSearch",
    props: {
      label: String,
      btn:String
    },
    data () {
      return {
        hotSearch: [
          {
            type: 1,
            text: 'Self-Reported Population Health',
            num: '1.8万'
          },
          {
            type: 1,
            text: 'Library and Information Sciences',
            num: '1.1万'
          },
          {
            type: 1,
            text: 'Global Business Strategy',
            num: '1.3万'
          },
          {
            type: 1,
            text: 'Corporate Data Quality',
            num: '1.0万'
          },
          {
            type: 1,
            text: 'Verrechnungspreise',
            num: '3.9万'
          }
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/global";

    .hot-search-title {
        display: flex;
        width: 100%;
        font-size: px2rem(13);
        padding: px2rem(10);
        box-sizing: border-box;

        .label {
            flex: 1;
            text-align: left;
            font-weight: bold;
            color: #666;
        }

        .btn {
            flex: 1;
            text-align: right;
            font-weight: bold;
            color: #409EFF;
        }
    }

    .hot-search-list {
        width: 100%;
        padding: 0 px2rem(10);
        box-sizing: border-box;

        .hot-search-item {
            padding: px2rem(10) 0;
            display: flex;

            .icon-wrapper {
                flex: 0 0 px2rem(40);
                @include center;

                .icon-book {
                    font-size: px2rem(16);
                }

                .icon-search {
                    font-size: px2rem(16);
                }
            }

            .hot-search-text-wrapper {
                flex: 1;
                height: px2rem(35);
                @include columnLeft;

                .text {
                    flex: 1;
                    height: 100%;
                    @include ellipsis;
                    @include left;
                    font-size: px2rem(14);
                    font-weight: bold;
                    color: #666;
                }

                .num {
                    font-size: px2rem(12);
                    color: #999;
                    margin-top: px2rem(5);
                }
            }
        }
    }
</style>
