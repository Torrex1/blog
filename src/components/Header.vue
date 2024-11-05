<template>
    <div class="wrapper">

        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
            <h2>FLU<span class="flipped-text">vv</span>ER</h2>
        </div>
        
        <!-- убрать в свой компонент -->
        <div class="search-field">
            <input placeholder="Search new friends" type="text">
            <button><div class="search-icon"></div></button>
        </div>

        <div style="display: flex; align-items: center; gap: 20px;">
            <div class="notifications">
                <img src="../assets/mailbox.png" alt="notification">
            </div>

            <!-- убрать в свой компонент -->
            <div class="user-profile">
                <img src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-70x70.png" alt="user">
            </div>
        </div>
        
    </div>
    
</template>

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

.user-profile {
    display: flex;
    align-items: center;
}

.user-profile img {
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
}

.notifications {
    display: flex;
}

.notifications img {
    width: 25px;
    cursor: pointer;
}
</style>