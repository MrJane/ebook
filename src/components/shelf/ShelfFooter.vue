<template>
    <footer class="shelf-footer">
        <div class="tab-item" :class="{'is-selected':isSelected}">
            <span class="icon-private tab-icon"></span>
            <span class="tab-text">私密阅读</span>
        </div>
        <div class="tab-item" :class="{'is-selected':isSelected}">
            <span class="icon-download tab-icon"></span>
            <span class="tab-text">离线下载</span>
        </div>
        <div class="tab-item" :class="{'is-selected':isSelected}">
            <span class="icon-move tab-icon"></span>
            <span class="tab-text">私密阅读</span>
        </div>
        <div class="tab-item" :class="{'is-selected':isSelected}">
            <span class="icon-shelf tab-icon"></span>
            <span class="tab-text">私密阅读</span>
        </div>
    </footer>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "ShelfFooter",
        computed: {
            ...mapGetters(['shelfSelected']),
            isSelected() {
                return this.shelfSelected && this.shelfSelected.length > 0
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/global";

    .shelf-footer {
        position: fixed;
        left: 0;
        height: px2rem(48);
        bottom: 0;
        width: 100%;
        background: white;
        display: flex;
        box-shadow: 0 px2rem(-2) px2rem(4) 0 rgba(0, 0, 0, .1);
        z-index: 120;

        .tab-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: .5;

            &.is-selected {
                opacity: 1;
            }

            .tab-icon {
                font-size: px2rem(20);
                color: #666;
            }

            .tab-text {
                margin-top: px2rem(5);
                font-size: px2rem(12);
                color: #666;
            }
        }
    }
</style>
