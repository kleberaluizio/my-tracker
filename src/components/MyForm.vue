<template>
    <div class="box formClass">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Form for new task creation">
                <input type="text" class="input" placeholder="What task do want to begin?" v-model="description">
            </div>
            <div class="column">
                <TimerLogic @whenCronometerStop="finishTask" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent , useStore} from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'

import TimerLogic from './TimerLogic.vue'

export default defineComponent({
    name: 'MyForm',
    emits: [
        'onSaveTask'
    ],
    components: {
        TimerLogic,
    },
    data() {
        return {
            description: ''
        }
    },
    methods: {
        finishTask(elapsedTime: number): void {
            this.$emit('onSaveTask', {
                timeLenghtInSeconds: elapsedTime,
                taskDescription: this.description
            }
            )
            this.description = ''
        }
    }, 
    setup() {
        const store = useStore(key)
    }
})
</script>

<style>
.formClass{
    color: var(--text-primary);
    background-color: var(--bg-primary);
}
</style>