<template>
    <div class="wrapper">
        <PostHeader />
        <PostMain />
        <PostFooter />
    </div>
</template>

<script setup>
    import PostHeader from './PostHeader.vue';
    import PostMain from './PostMain.vue';
    import PostFooter from './PostFooter.vue';
</script>

<style scoped>
.wrapper {
    border: 1px solid rgb(211, 227, 217);
    width: 70%;
    margin: 0 auto;
    padding: 10px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>