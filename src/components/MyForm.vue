<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Form for new task creation">
                <input type="text" class="input" placeholder="What task do want to begin?" v-model="taskDescription">
            </div>
            <div class="column">
                <TimerLogic @whenCronometerStop="finishTask" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TimerLogic from './TimerLogic.vue'

export default defineComponent({
    name: 'MyForm',
    components: {
        TimerLogic,
    },
    data (){
        return{
            taskDescription: ''
        }
    },
    methods: {
        finishTask (elapsedTime: number) : void {
            console.log('Task time: ',elapsedTime)
            console.log('Task description: ', this.taskDescription)
            this.taskDescription=''
        }
    }
})
</script>
