<script setup>
    import Header from './components/Header.vue';
    import SideNav from './components/SideNav.vue';
    import UserPopup from './components/UsersComponents/UserPopup.vue';
    import PostContent from './components/PostComponents/PostContent.vue';
</script>

<template>
    <Header />
    <!-- <UserPopup/> -->
    <SideNav />

    <main>
        <PostContent />
    </main>

</template>

<style scoped>
    main {
        margin-left: 250px;
        margin-top: 20px;
    }
</style>
