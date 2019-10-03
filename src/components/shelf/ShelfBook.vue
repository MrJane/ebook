<template>
    <div class="shelf-book">
        <img :src="dataSource.cover" alt="">
    </div>
</template>

<script>
    export default {
        name: "SheflBook",
        props:{
            dataSource:Object
        }
    }
</script>

<style lang="scss" scoped>
    .shelf-book {
        position: relative;
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>
