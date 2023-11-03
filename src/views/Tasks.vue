<template>
    <MyForm @onSaveTask="saveTask" />
    <div class="list">
        <TaskElement v-for="(task, index) in tasks" :key="index" :task="task" />
        <BoxConfig v-if="isTasksEmpty">
            Task history is empty!
        </BoxConfig>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import MyForm from '../components/MyForm.vue'
import TaskElement from '../components/TaskElement.vue'
import ITask from '../interfaces/ITask';
import BoxConfig from '../components/BoxConfig.vue';

export default defineComponent({
    name: 'TaskView',
    components: {
        MyForm,
        TaskElement,
        BoxConfig
    },
    data() {
        return {
            tasks: [] as ITask[]
        }
    },
    computed: {
        isTasksEmpty(): boolean {
            return this.tasks.length === 0
        }
    },
    methods: {
        saveTask(task: ITask) {
            this.tasks.push(task)
        }
    }
});
</script>
 