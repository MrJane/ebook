<template>
    <div class="shelf-category">
        <div class="category-item">
            <img src="http://47.99.166.157/book/res/img/Biomedicine/978-981-10-8488-1_CoverFigure.jpg" alt="">
        </div>
        <div class="category-item">
            <img src="http://47.99.166.157/book/res/img/Biomedicine/978-981-10-8488-1_CoverFigure.jpg" alt="">
        </div>
        <div class="category-item">
            <img src="http://47.99.166.157/book/res/img/Biomedicine/978-981-10-8488-1_CoverFigure.jpg" alt="">
        </div>
        <div class="category-item">
            <img src="http://47.99.166.157/book/res/img/Biomedicine/978-981-10-8488-1_CoverFigure.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShelfCategory"
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/global";
    .shelf-category {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        padding-top: px2rem(5);
        box-sizing: border-box;
        opacity: 1;
        .category-item{
            flex: 0 0 33.33%;
            width: 33.33%;
            height: 33.33%;
            box-sizing: border-box;
            padding: px2rem(0) px2rem(2);
            /*border: 1px solid red;*/
            /*&:nth-child(3n+1) {*/
            /*    padding: 0 px2rem(2.5) px2rem(5) px2rem(5);*/
            /*}*/
            /*&:nth-child(3n+2) {*/
            /*    padding: 0 px2rem(2.5) px2rem(5) px2rem(2.5);*/
            /*}*/
            /*&:nth-child(3n+3) {*/
            /*    padding: 0 px2rem(5) px2rem(5) px2rem(2.5);*/
            /*}*/
            .shelf-category-img,img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
