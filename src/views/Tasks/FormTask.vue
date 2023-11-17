<template>
    <section>
        <form class="form" @submit.prevent="saveTask">
            <div class="field">
                <label for="taskDescription" class="label">Task Description</label>
                <input type="text" class="input" v-model="taskDescription" id="taskDescription">
            </div>
            <div class="field">
                <button class="button" type="submit">Save</button>
                <router-link :to="`/`">
                <button class="button" type="reset">Cancel</button>
                </router-link>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import ITask from '@/interfaces/ITask';
import { useStore } from '@/store';
import { EDIT_TASK } from '@/store/mutations-type';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "FormTask",
    props: {
        id: {
            type: String
        }
    },
    data() {
        return {
            taskDescription: ""
        };
    },
    mounted() {
        if (this.id) {
            const editTask = this.store.state.tasks.find(t => t.id == this.id)
            this.taskDescription = editTask?.taskDescription || ''
        }
    },
    methods: {
        saveTask() {
            if (this.id) {
                const editedTask = this.store.state.tasks.find(t => t.id == this.id)

                this.store.commit(EDIT_TASK, {
                    id: editedTask?.id,
                    timeLenghtInSeconds: editedTask?.timeLenghtInSeconds,
                    taskDescription: this.taskDescription,
                    project: editedTask?.project

                })
            }
            this.taskDescription = "";
            this.$router.push('/')// Fprmece a rpta mpva desejada
        }
    },
    setup() {
        const store = useStore()
        return {
            store,
            tasks: store.state.tasks
        }
    }

})
</script>

<style scoped>
.label {
    background-color: var(--bg-primary);
    color: var(--text-primary);
}

button{
    margin-right: 10px;
}

form{
    padding: 1.25rem;
}
</style>