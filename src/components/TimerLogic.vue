<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometerLogic :timeInSeconds="timeInSeconds" />
        <button class="button" @click="startCronometer()" :disabled="runningCronometer">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="stopCronometer()" :disabled="!runningCronometer">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CronometerLogic from './CronometerLogic.vue'

export default defineComponent({
    name: 'TimerLogic',
    emits:[
        'whenCronometerStop'
    ],
    components: {
        CronometerLogic,
    },
    data() {
        return {
            timeInSeconds: 0,
            cronometer: 0,
            runningCronometer: false
        }
    },
    methods: {
        startCronometer() { //console.log('Starting cronometer')
            this.runningCronometer = true;
            this.cronometer = setInterval(() => {
                this.timeInSeconds++
            }, 1000)
        },
        stopCronometer() { //console.log('Stoping cronometer')    
            this.runningCronometer = false;
            clearInterval(this.cronometer)
            this.$emit('whenCronometerStop',this.timeInSeconds)
            this.timeInSeconds = 0
        }
    }
})
</script>