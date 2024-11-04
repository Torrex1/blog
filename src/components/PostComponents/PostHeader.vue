<template>
    <div class="post-header">
        <div class="user-info">
            <img src="https://ui-avatars.com/api/?name=Вася&rounded=true&background=f8ebf4&color=d36ba9" alt="">
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