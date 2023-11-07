<template>
    <div class="box formClass">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Form for new task creation">
                <input type="text" class="input" placeholder="What task do want to begin?" v-model="description">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProject">
                        <option value="">Select a project</option>
                        <option 
                        :value="project.id" 
                        v-for="project in projects"
                        :key="project.id"
                        >{{ project.title }}</option>
                    </select>
                </div>
            </div>
            <div class="column">
                <TimerLogic @whenCronometerStop="finishTask" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'
import TimerLogic from './TimerLogic.vue'
import { computed } from '@vue/reactivity'

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
            description: '',
            idProject:''
        }
    },
    methods: {
        finishTask(elapsedTime: number): void {
            this.$emit('onSaveTask', {
                timeLenghtInSeconds: elapsedTime,
                taskDescription: this.description,
                project: this.projects.find(pro => pro.id == this.idProject)
            }
            )
            this.description = ''
            this.idProject = ''
        }
    }, 
    setup() {
        const store = useStore(key)
        return{
            projects: computed(() => (store.state.projects))
        }
    }
})
</script>

<style>
.formClass{
    color: var(--text-primary);
    background-color: var(--bg-primary);
}
</style>