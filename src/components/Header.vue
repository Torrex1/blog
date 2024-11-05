<template>
    <div class="wrapper">

        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
            <h2>FLU<span class="flipped-text">vv</span>ER</h2>
        </div>
        
        <!-- убрать в свой компонент -->
        <SearchField />

        <div style="display: flex; align-items: center; gap: 20px;">
            <Notifications />
            <UserIcon />
        </div>
    </div>
</template>

<script setup>
    import UserIcon from '../components/UsersComponents/UserIcon.vue';
    import SearchField from './SearchField.vue';
    import Notifications from './Notifications.vue';
</script>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: #f0f0f0 2px solid;
    z-index: 20;
}

.logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
}

.logo img {
    width: 70px;
}

.flipped-text {
    color: rgb(57, 160, 57);
    display: inline-block;
    transition: transform 0.5s ease;
}

h2:hover .flipped-text  {
    transform: rotateX(180deg);
}
</style>