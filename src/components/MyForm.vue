<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Form for new task creation">
                <input type="text" class="input" placeholder="What task do want to begin?">
            </div>
            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <section>
                        <strong>{{elapsedTime}}</strong>
                    </section>
                    <button class="button" @click="startCronometer()">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>play</span>
                    </button>
                    <button class="button" @click="stopCronometer()">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>stop</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MyForm',
    data(){
        return{
            timeInSeconds: 0,
            cronometer: 0
        }
    },
    computed: {
        elapsedTime() : string {
            return (new Date(this.timeInSeconds * 1000)).toISOString().substr(11,8)
        }
    },
    methods:{
        startCronometer (){ //console.log('Starting cronometer')
            this.cronometer = setInterval(()=>{
                this.timeInSeconds++
            },1000)
        },
        stopCronometer (){ //console.log('Stoping cronometer')    
            clearInterval(this.cronometer)
        }
    }
})
</script>

<style scoped></style>