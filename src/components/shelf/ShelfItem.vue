<template>
    <div class="shelf-item">
        <component :is="item" :data-source="dataSource">

        </component>
    </div>
</template>

<script>
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
            item() {
                return this.dataSource.type === 1 ? this.ShelfBook : (this.dataSource.type === 2 ? this.ShelfCategory : this.ShelfAdd)
            }
        },
        components: {
            ShelfAdd,
            ShelfBook,
            ShelfCategory
        }
    }
</script>

<style lang="scss" scoped>
    .shelf-item {
        width: 100%;
        /*height: 100%;*/
    }
</style>
