<template>
    <div class="post-header">
        <div class="user-info">
            <img src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-70x70.png" alt="">
            <span class="username">Вася Пупкин</span>
        </div>
        <time>19:00</time>
    </div>
</template>

<style scoped>
.post-header {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 10px;
}

img {
    width: 40px;
    border-radius: 50%;
}

time {
    font-size: 14px;
    color: gray;
}
</style>