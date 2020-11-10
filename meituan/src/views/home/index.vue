<template>
    <div>
        <!-- Head组件-->
        <Head></Head>
        <!-- Category组件 -->
        <Category></Category>
        <!-- List组件 -->
        <List></List>
    </div>
</template>

<script>

 /*1.impor引入
   2.compoments声明
   3.template使用
 */
    import Head from './Head'
    import Category from './Category'
    import List from './List'
    export default {
        components:{
            Head,
            Category,
            List
        }
    }
</script>

<style lang="scss" scoped>

</style>