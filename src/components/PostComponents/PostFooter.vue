<template>
    <div class="post-footer">
        <button>Like</button>
        <div>
            <time>02.02.2004</time>
        </div>
        
    </div>
</template>

<style scoped>
.post-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    height: 40px;
}

button {
    padding: 10px 20px;
    border: unset;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    border: 2px solid green;
    color: #fff;
    background-color: green;
}

time {
    font-size: 12px;
    color: gray;
}
</style>

<!-- time {
    font-size: 12px;
    color: gray;
} -->