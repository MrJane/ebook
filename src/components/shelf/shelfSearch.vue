<template>
    <div class="shelf-search" :class="{'search-top':showCancel,'hide-shadow':isShowShadow}">
        <div class="shelf-search-box" :class="{'search-top':showCancel}">
            <div class="search-input-box">
                <span class="icon-search"></span>
                <div class="input-wrapper">
                    <input @click="onSearchClick" type="text" v-model="searchText">
                </div>
                <span @click="clearSearchText" class="icon-close-circle-fill" v-show="searchText.length>0"></span>
            </div>
            <div class="search-locale-box" @click="switchLocale">
                <span class="icon-cn icon"></span>
                <!--                <span class="icon-en icon"></span>-->
            </div>
            <div class="cancel-btn-box" @click="onCancelClick" v-show="showCancel">
                <span>取消</span>
            </div>
        </div>
        <transition name="shelf-tab-slide-up">
            <div class="search-tab-wrapper" v-if="showCancel">
                <div class="search-tab-item" @click="toggleTab(tab)" v-for="(tab,index) in tabs">
                    <span>{{tab.text}}</span>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "shelfSearch",
        data() {
            return {
                showCancel: false,
                searchText: '',
                isShowShadow:true,
                tabs: [
                    {id: 1, selected: true, text: '默认'},
                    {id: 1, selected: false, text: '按进度'},
                    {id: 1, selected: false, text: '按购买'}


                ]
            }
        },
        computed: {
            ...mapGetters([])
        },
        methods: {
            onSearchClick() {
                this.showCancel = true;
                this.$store.commit('SET_SHELF_TITLE_SHOW', false);
            },
            onCancelClick() {
                this.$store.commit('SET_SHELF_TITLE_SHOW', true);
                this.showCancel = false;
            },
            switchLocale() {

            },
            clearSearchText() {
                this.searchText = ''

            },
            toggleTab() {

            },
            showShadow() {
                this.isShowShadow = false;

            },
            hideShadow() {
                this.isShowShadow = true;
            }

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/global";

    .shelf-search {
        position: absolute;
        width: 100%;
        height: px2rem(94);
        background: white;
        box-shadow: 0 px2rem(2) px2rem(2) 0 rgba(0, 0, 0, .1);
        &.hide-shadow {
            box-shadow: none;
        }

        &.search-top {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 101;
        }

        /*top: px2rem(42);*/
        .shelf-search-box {
            position: absolute;
            top: px2rem(42);
            /*background: red;*/
            height: px2rem(52);
            width: 100%;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            &.search-top {
                top: px2rem(0);
                transition: top .2s linear;
            }

            .search-input-box {
                /*height: px2rem(42);*/
                flex: 1;
                margin: px2rem(8) 0 px2rem(8) px2rem(10);
                display: flex;
                border: 1px solid #ccc;
                border-radius: px2rem(3);
                align-items: center;
                height: px2rem(34);

                .icon-search {
                    flex: 0 0 px2rem(22);
                    font-size: px2rem(12);
                    text-align: right;
                }

                .input-wrapper {
                    flex: 1;
                    padding: 0 px2rem(10);
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;

                    input {
                        width: 100%;
                        font-size: px2rem(14);
                        border: none;
                        color: #333;

                        &:focus {
                            outline: none;
                        }

                        &::-webkit-input-placeholder {
                            font-size: px2rem(14);
                            color: #ccc;
                        }
                    }
                }

                .icon-close-circle-fill {
                    flex: 0 0 px2rem(24);
                    font-size: px2rem(14);
                    justify-content: left;
                    color: #ccc;
                }
            }

            .search-locale-box {
                flex: 0 0 px2rem(55);
                @include center;

                .icon-cn, .icon-en {
                    font-size: px2rem(22);
                    color: #666;
                }
            }

            .cancel-btn-box {
                flex: 0 0 px2rem(55);
                font-size: px2rem(14);
                color: $color-blue;
            }
        }

        .search-tab-wrapper {
            position: absolute;
            display: flex;
            top: px2rem(52);
            left: 0;
            z-index: 100;
            width: 100%;
            height: px2rem(42);
            justify-content: center;
            align-items: center;

            .search-tab-item {
                flex: 1;
                font-size: px2rem(12);
                color: #999;
                text-align: center;

                &.is-selected {
                    color: $color-blue;
                }
            }
        }
    }
</style>
