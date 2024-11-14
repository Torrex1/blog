<template>
    <div class="login-wrapper">
        <form action="#" @submit.prevent="loginUser">
            <h1>Welcome back :D</h1>

            <input v-model="username" type="text" placeholder="username or email">
        
            <input v-model="password" type="password" placeholder="password">
            
            <button type="submit">Log in</button>
        </form>
        <span>Don't have an account? <RouterLink to="/registration"><span style="color: green;">Sign up</span></RouterLink></span>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import axios from "axios";

    const username = ref('');
    const password = ref('');  

    const loginUser = async () => {
        try {
            await axios.post('http://localhost:3000/login', {
                username: username.value,
                password: password.value
            }).then( res => {

                if (res.status === 200) {
                    window.location.href = "/";
                } 
            })
        }
        catch(error) {
            if (error.response.status === 404) {
                alert("User not found");
            }
        }
    }
</script>

<style scoped> 
.login-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
}

h1 {
    text-align: center;
    color: rgb(102, 115, 100);
}

form {
    background-color: #fff;
    border-radius: 25px 25px 5px 25px;
    display: flex;
    flex-direction: column;
    
    gap: 20px;
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