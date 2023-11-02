<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometerLogic :timeInSeconds="timeInSeconds" />
        <ButtonLogic @clicked="startCronometer" buttonIcon="fas fa-play" buttonText="play" :isButtonDisabled="runningCronometer"/>
        <ButtonLogic @clicked="stopCronometer" buttonIcon="fas fa-stop" buttonText="stop" :isButtonDisabled="!runningCronometer"/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CronometerLogic from './CronometerLogic.vue'
import ButtonLogic from './ButtonLogic.vue'

export default defineComponent({
    name: 'TimerLogic',
    emits:[
        'whenCronometerStop'
    ],
    components: {
        CronometerLogic,
        ButtonLogic
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