<template>
    <div class="register-wrapper">
        <form action="/">
            <h1>Sign up</h1>

            <input type="text" placeholder="username">
            <input type="email" placeholder="email">
            <input type="password" placeholder="password">
            <input type="password" placeholder="confirm password">
            <button type="submit">Let's go!</button>

        </form>
        <p>Already have an account? <RouterLink to="/login"><span style="color: green;">Log in</span></RouterLink></p>
    </div>
    
</template>

<style scoped>
.register-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

h1 {
    text-align: center;
    color: rgb(102, 115, 100);
}

form {
    background-color: #fff;
    border-radius: 25px 5px 25px 25px;
    display: flex;
    flex-direction: column;
    
    gap: 10px;
    padding: 20px;
}

input {
    padding: 10px;
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

button:focus-visible {
    outline: 2px solid green;
}

button:hover {
    background-color: rgb(4, 166, 4);
    color: #fff;
}

button:active {
    background-color: rgb(0, 148, 0);
}

</style>