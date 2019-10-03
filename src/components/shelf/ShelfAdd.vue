<template>
    <div class="shelf-add">
        <span class="icon-add"></span>
    </div>
</template>

<script>
    export default {
        name: "ShelfAdd"
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/global";
    .shelf-add {
        width: 100%;
        height: 100%;
        border: px2rem(1) solid #ccc;
        @include center;
        .icon-add{
            color: #ccc;
            font-size: px2rem(40);
            @include center;
        }
    }
</style>
