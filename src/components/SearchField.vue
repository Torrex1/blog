<template>
    <div class="search-field">
        <input placeholder="Search new friends" type="text">
        <button><div class="search-icon"></div></button>
    </div>
</template>

<style scoped>
.search-field {
    display: flex;
    align-items: center;
    padding: 10px;
}

.search-field input {
    width: 400px;
    height: 35px;
    border: 1px solid #ada8a8;
    border-radius: 4px 0 0 4px;
    padding: 10px;
    font-size: 16px;
}

.search-field input:focus {
    outline: none;
    border: 2px solid #ada8a8;
}

.search-field button {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-left: unset;
    border: 1px solid #eaeaea;
    border-radius: 0 4px 4px 0;
    cursor: pointer;  
}

.search-icon {
    background-image: url('../assets/search.svg');
    width: 20px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>