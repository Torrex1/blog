<template>
    <div tabindex="0" class="sidebar-user">
        <img class="avatar" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-70x70.png" alt="">
        <span class="username">Вася Пупкин</span>
        <img class="sidebar-icon" src="../assets/sidebar-mail.png" alt="">
    </div>
</template>

<style scoped>
.sidebar-user {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 10px;
    /* border: 1px solid red; */
    cursor: pointer;
    position: relative;
}

.sidebar-user:hover {
    background-color: #dddddd;
}

.sidebar-user:focus-visible {
    outline : 1px solid #2e2e2e;
    border-radius: 2px;
}

.avatar {
    width: 40px;
    border-radius: 50%;
}

.sidebar-icon {
    width: 20px;
    position: absolute;
    right: 15px;
    user-select: none;
}
</style>