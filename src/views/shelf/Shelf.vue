<template>
    <div class="shelf">
        <shelf-title ref="shelfTitle" class="title-wrapper"></shelf-title>
        <scroll :bottom="48" class="shel-scroll-wrapper" @onScroll="onscroll">
            <ShelfSearch ref="list"></ShelfSearch>
            <!--            <shelf-list></shelf-list>-->
            <!--            <shelfList class="shelf-list-wrapper"></shelfList>-->
            <div class="shelf-list-wrapper">
                <div class="shelf-list-item" v-for="(data,index) in shelfList">
                    <div class="container">
                        <shelf-item :data-source="data"></shelf-item>
                    </div>
                    <div class="shelf-title title-small">{{data.title}}</div>
                </div>
<!--                <div class="shelf-list-item">-->
<!--                    <div class="container">-->
<!--                        <ShelfAdd></ShelfAdd>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </scroll>
        <ShelfFooter v-show="isEditMode"></ShelfFooter>
    </div>
</template>

<script>
    import ShelfTitle from '../../components/shelf/shelf-title';
    import Scroll from "../../components/Scroll";
    import ShelfSearch from "../../components/shelf/shelfSearch";
    import ShelfList from "../../components/shelf/ShelfList";
    import ShelfItem from "../../components/shelf/ShelfItem";
    import ShelfAdd from "../../components/shelf/ShelfAdd";
    import ShelfFooter from "../../components/shelf/ShelfFooter";
    import {shelf} from '../../api/book';
    import {addToShelf} from '../../utils/store'
    // import shelfList from "./shelfList";
    import {mapGetters} from 'vuex'


    export default {
        name: "Shelf",
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['shelfList','isEditMode'])
        },
        components: {
            ShelfSearch,
            Scroll,
            ShelfTitle,
            ShelfList,
            ShelfItem,
            ShelfAdd,
            ShelfFooter
        },
        methods: {
            onscroll(offsetY) {
                console.log(offsetY);
                if (offsetY > 0) {
                    this.$refs.shelfTitle.showShadow();
                    this.$refs.list.showShadow();
                } else {
                    this.$refs.shelfTitle.hideShadow();
                    this.$refs.list.hideShadow();
                }
            },
            getShelfList() {
                shelf().then((res) => {
                    if (res.status === 200 && res.data) {
                        // console.log(res.data.bookList,'oooooo');
                        // console.log(addToShelf(res.data.bookList))
                        this.$store.commit('SET_SHELF_LIST', addToShelf(this.shelfList))
                    }
                })
            }
        },
        mounted() {
            // console.log(this.shelfList);
            this.getShelfList()
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/global";

    .shelf {
        position: relative;
        width: 100%;
        height: 100%;
        background: white;

        .title-wrapper {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 110;
        }

        .shel-scroll-wrapper {
            position: absolute;
            top: 0;
            left: 0;
        }

        .shelf-list-wrapper {
            position: absolute;
            top: px2rem(93.5);
            left: 0;
            width: 100%;
            z-index: 100;
            display: flex;
            flex-flow: row wrap;
            padding: 0 px2rem(15);
            box-sizing: border-box;

            .shelf-list-item {
                flex: 0 0 33.33%;
                width: 33.33%;
                padding: px2rem(15);
                box-sizing: border-box;

                .container {
                    width: 100%;
                    @include shelfImgHeight;
                    box-shadow: px2rem(2) px2rem(2) px2rem(6) px2rem(2) rgba(200, 200, 200, .3);
                    //@include center;
                    border: px2rem(1) solid #eee;
                    box-sizing: border-box;
                }

                .shelf-title {
                    font-size: px2rem(12);
                }
            }
        }
    }
</style>
