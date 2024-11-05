<template>
    <div class="wrapper" @click.self="closeModal">
        <div class="user-popup">
            <div class="user-unit">
                <img src="https://ui-avatars.com/api/?name=Tarikuliev&rounded=true&background=f8ebf4&color=d36ba9" alt="">
                <span>Вася Пупкин</span>
            </div>

            <div class="logout">
                <img src="../../assets/logout.png" alt="fffff">
                <span>logout</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useModalStore } from '../../store/modalStore';

    const modalStore = useModalStore();

    const closeModal = () => {
        modalStore.closeModal();
    }
</script>

<style scoped>
.wrapper {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
}

.user-popup {
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 20px;
    right: 20px;
    top: 55px;
    width: 15vw;
    height: 40vh;

    border: 1px solid #c9c9d1;
    background-color: #eeeef2;
    border-radius: 5px;
    padding: 15px;
    z-index: 20;
}

.user-unit {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 80px;
    padding: 5px;

    border-bottom: 1px solid #c9c9d1;
}

.user-unit img {
    width: 50px;
    height: 50px;
    border: 1px solid rgb(219, 205, 205);
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
}

.logout {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    padding: 10px 5px;
    border-radius: 5px;
    user-select: none;
}

.logout img {
    width: 20px;
}

.logout:hover {
    background-color: #d1d1d9;
}
.logout:active {
    background-color: #c1c1c9;
}
</style>