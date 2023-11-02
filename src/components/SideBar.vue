<template>
    <header>
        <h1> <img src="../assets/logo.png" alt="" srcset=""></h1>
    </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'SideBar'
})
</script>

<style scoped>
header {
    padding: 1rem;
    background-color: #0d3b66;
    width: 100%;
    height: 100vh;
}

img {
    border-radius: 20px;
    width: 100%;
    height: 100%;
}
@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>