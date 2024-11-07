<script setup>
    import { useModalStore } from '../store/modalStore';
    import SideNav from '../components/SideNav.vue';
    import UserPopup from '../components/UsersComponents/UserPopup.vue';
    import PostContent from '../components/PostComponents/PostContent.vue';
    import Header from '../components/Header.vue';
</script>

<template>
    <Header/>
        
    <UserPopup v-show="useModalStore().isModalOpen" />
    <SideNav />

    <main>
        <PostContent />
    </main>
</template>

<style scoped>
main {
    display: grid;
    grid-template-columns: 1fr;
    gap: 25px;
    
    margin-left: 250px;
    margin-top: 20px;
}
</style>