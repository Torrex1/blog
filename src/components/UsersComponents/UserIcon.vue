<template>
    <div class="user-profile" @click="openModal">
        <img src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-70x70.png" alt="user">
    </div>

    <UserPopup />
</template>

<script setup>
    import { useModalStore } from '../../store/modalStore';

    const modalStore = useModalStore();

    const openModal = () => {
        modalStore.openModal();    
    }

</script>

<style scoped>
.user-profile {
    display: flex;
    align-items: center;
}

.user-profile img {
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
}
</style>