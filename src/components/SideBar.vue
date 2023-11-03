<template>
    <header>
        <h1> <img src="../assets/logo.png" alt="" srcset=""></h1>
        <button class="button" @click="enableNightMode">
            {{buttonText}}
        </button>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SideBar',
    emits:['onNightModeEnabled'],
    data(){
        return{
            nightModeEnabled: false
        }
    },
    computed:{
        buttonText() {
            if(this.nightModeEnabled){
                return "Disable night mode"
            } else {
                return "Enable night mode"
            }
        
        }
    },
    methods: {
        enableNightMode(){
            this.nightModeEnabled = !this.nightModeEnabled
            this.$emit('onNightModeEnabled', this.nightModeEnabled)
        }
    }
})
</script>

<style scoped>
header {
    padding: 1rem;
    background-color: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}

img {
    border-radius: 20px;
    width: 80%;
    height: 80%;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>