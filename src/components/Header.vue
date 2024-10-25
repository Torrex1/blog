<template>
    <div class="wrapper">
        <img src="../assets/logo.png" alt="logo">
        <div class="title">
            <h1>Just Blog</h1>
            <span>community</span>
        </div>  

        <div class="search-field">
            <input type="text">
            <button><div class="search-icon"></div></button>
        </div>

    </div>
    
</template>

<style scoped>
.wrapper {
    border: 1px solid red;
    display: flex;
    align-items: center;
    padding: 10px;
}

.wrapper img {
    width: 70px;
}

.title span {
    font-size: 18px;
}

.search-field {
    border: 1px solid red;
    display: flex;
    align-items: center;
    padding: 10px;
}

.search-field input {
    width: 400px;
    height: 30px;
    border: 1px solid #eaeaea;
    border-radius: 4px 0 0 4px;
    padding: 10px;
}

.search-field button {
    width: 25px;
    height: 30px;
    
    border-left: unset;
    border: 1px solid #eaeaea;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
}

.search-icon {
    background-image: url('../assets/search.svg');
    width: 15px;
    height: 15px;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>