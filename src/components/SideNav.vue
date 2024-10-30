<template>
    <div class="wrapper">
        <h3>Your Friends</h3>
        <!-- убрать в компонент {list} -->
        <ul style="display: grid; grid-template-columns: 1fr; gap: 5px;">
            <li>    
                <UserSidebar />
            </li>
        </ul>
    </div>
</template>

<script setup>
    import UserSidebar from './UserSidebar.vue';
</script>

<style scoped>
.wrapper {
    position: fixed;
    width: 220px;
    height: 100vh;
    background-color: #f3f3f3;
    border: 1px solid rgb(207, 212, 221);
    border-radius: 2px;
    margin-top: 1px;
    overflow-y: auto;
    padding: 5px 0;
    z-index: 100;
}

h3 {
    margin: 5px 0 10px 10px;
}  
</style>