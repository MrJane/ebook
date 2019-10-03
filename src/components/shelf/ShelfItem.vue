<template>
    <div class="shelf-item" @click="onItemClick">
        <component
                class="comp-wrapper"
                :is="item"
                :data-source="dataSource"
                :class="{'is-edit':isEditMode&&dataSource.type===2}"
        ></component>
        <div class="icon-selected" :class="{'is-selected':dataSource.selected}"
             v-show="isEditMode&&dataSource.type===1"></div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ShelfAdd from "./ShelfAdd";
    import ShelfBook from "./ShelfBook";
    import ShelfCategory from "./ShelfCategory";

    export default {
        name: "ShelfItem",
        props: {
            dataSource: Object
        },
        data() {
            return {
                ShelfAdd, ShelfBook, ShelfCategory
            }
        },
        computed: {
            ...mapGetters(['isEditMode', 'shelfSelected', 'shelfList']),
            item() {
                return this.dataSource.type === 1 ? this.ShelfBook : (this.dataSource.type === 2 ? this.ShelfCategory : this.ShelfAdd)
            }
        },
        components: {
            ShelfAdd,
            ShelfBook,
            ShelfCategory
        },
        methods: {
            onItemClick() {
                console.log(this.shelfSelected,'点击事件');
                if (this.isEditMode) {
                    //编辑模式
                    this.dataSource.selected = !this.dataSource.selected;
                    if (this.dataSource.selected) {
                        this.shelfSelected.push(this.dataSource)
                    } else {
                        this.$store.commit('SET_SHELF_SELECTED', this.shelfSelected.filter(item => item.id !== this.dataSource.id))
                    }


                } else {
                    //非编辑模式才跳转
                    if (this.dataSource.type === 1) {
                        this.$router.push({
                            path: '/store/detail',
                            query: {
                                fileName: this.dataSource.fileName,
                                category: this.dataSource.categoryText
                            }
                        })
                        //调到详情页
                    } else if (this.dataSource === 2) {

                    } else {
                        this.toStoreHome()
                    }
                }

            },
            toStoreHome() {
                this.$router.push({
                    path: '/store/search'
                })
            }
        },
        mounted() {
            console.log(this.isEditMode, 'dddddddd5555');
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/global";

    .shelf-item {
        width: 100%;
        height: 100%;
        position: relative;

        .comp-wrapper {
            opacity: 1;

            &.is-edit {
                opacity: .5;
            }
        }

        .icon-selected {
            position: absolute;
            bottom: px2rem(2);
            right: px2rem(2);
            font-size: px2rem(18);
            color: rgba(0, 0, 0, .5);

            &.is-selected {
                color: $color-blue;
            }
        }
    }
</style>
