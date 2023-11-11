<template>
    <MyForm />
    <div class="list">
        <TaskElement v-for="task in tasks" :key="task.id" :task="task" />
        <BoxConfig v-if="isTasksEmpty">
            Task history is empty!
        </BoxConfig>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, computed } from 'vue';
import MyForm from '../components/MyForm.vue'
import TaskElement from '../components/TaskElement.vue'
import BoxConfig from '../components/BoxConfig.vue';
import { useStore } from '@/store';

export default defineComponent({
    name: 'TaskView',
    components: {
        MyForm,
        TaskElement,
        BoxConfig
    },
    computed: {
        isTasksEmpty(): boolean {
            return this.tasks.length === 0
        }
    },
    setup() {
        const store = useStore()
        return {
            tasks: computed(() => (store && store.state.tasks) || []),
            store
            // tasks: computed(() => store.state.tasks),
            // store
        }
    }

});
</script>
 