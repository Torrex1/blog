<template>
    <div class="form-wrapper">
        <form action="#">
            <h1>Sign up</h1>

            <input type="text" placeholder="username">
            <input type="email" placeholder="email">
            <input type="password" placeholder="password">
            <input type="password" placeholder="confirm your password">
            <button>Let's go!</button>
        </form>
    </div>
    
</template>

<style scoped>
.form-wrapper {
    display: flex;
    border: 1px solid red;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

h1 {
    text-align: center;
    color: rgb(102, 115, 100);
}

form {
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    
    gap: 10px;
    padding: 20px;
}

input {
    padding: 10px;
    /* border-radius: 5px; */
    border: unset;
    border-bottom: 1px solid #ccc;
    outline: unset;
    font-size: 16px;
    width: 300px;
    height: 40px;
}

button {
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    border: unset;
    font-size: 16px;
}

</style>