<template>
    <transition name="fade">
        <div class="shelf-title" :class="{'hide-shadow':isShowShadow}" v-show="showShelfTitle">
            <div class="title-text-wrapper">
                <div class="title-text">选择图书</div>
                <div class="sub-title-text" v-show="isEditMode">已选择2本图书</div>
            </div>
            <div class="title-btn clear-cache-btn">
                <span class="" @click="clearCache">清除缓存</span>
            </div>
            <div class="title-btn edit-btn">
                <span class="" @click="onEditClick">{{isEditMode?'取消':'编辑'}}</span>
            </div>
        </div>
    </transition>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "shelf-title",
        data() {
            return {
                // hideShadow: true,
                isShowShadow: true,
            }
        },
        computed: {
            ...mapGetters(['isEditMode', 'shelfList', 'shelfSelected', 'showShelfTitle'])
        },
        methods: {
            onEditClick() {
                if (!this.isEditMode) {
                    this.$store.commit('SET_SHELF_SELECTED',[]);
                    this.shelfList.forEach(item=>item.selected=false);
                }
                this.$store.commit('SET_IS_EDIT_MODE', !this.isEditMode)
            },
            clearCache() {
                console.log('清除缓存')
            },
            showShadow() {
                this.isShowShadow = false;

            },
            hideShadow() {
                this.isShowShadow = true;
            }
        },
        mounted() {
            console.log(this.isEditMode);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/global";

    .shelf-title {
        position: relative;
        width: 100%;
        height: px2rem(42);
        background: #ffffff;
        box-shadow: 0 px2rem(2) px2rem(2) 0 rgba(0, 0, 0, .1);

        &.hide-shadow {
            box-shadow: none;
        }

        .title-text-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: px2rem(42);

            .title-text {
                font-size: px2rem(16);
                font-weight: bold;
                color: #333;
                line-height: px2rem(20);
            }

            .sub-title-text {
                font-size: px2rem(10);
                color: #333;
            }
        }

        .title-btn {
            position: absolute;
            top: 0;
            font-size: px2rem(14);
            color: #666;
            height: px2rem(42);
            @include center;

            &.clear-cache-btn {
                left: 0;
                padding-left: px2rem(15);
            }

            &.edit-btn {
                right: 0;
                padding-right: px2rem(15);
            }
        }

    }

</style>
