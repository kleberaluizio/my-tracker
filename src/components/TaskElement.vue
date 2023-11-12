<template>
    <BoxConfig>
        <div class="columns">
            <div class="column is-6">
                {{ task.taskDescription || 'Task without description' }}
            </div>
            <div class="column is-3">
                <CronometerLogic :timeInSeconds="task.timeLenghtInSeconds" :isNightModeColorEnabled="false" />
            </div>
            <div class="column is-3">
                <button class="button is-warning" @click="showModal">
                    <i class="fas fa-pencil-alt"></i>
                </button>
                <button class="button is-danger" @click="deleteTask(task.id)">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        <EditTask v-if="isModalVisible" @close-modal="closeModal"> </EditTask>
    </BoxConfig>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CronometerLogic from './CronometerLogic.vue';
import ITask from '@/interfaces/ITask';
import BoxConfig from './BoxConfig.vue';
import EditTask from './EditTask.vue';
import { useStore } from '@/store';
import { DELETE_TASK } from '@/store/mutations-type';

export default defineComponent({
    name: "TaskElement",
    data() {
        return {
            isModalVisible: false
        }
    },
    components: {
        CronometerLogic,
        BoxConfig,
        EditTask,
    },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true
        },
    },
    methods: {
        deleteTask(id: string): void {
            this.store.commit(DELETE_TASK, id)
        },
        showModal() {
            this.isModalVisible = true
        },
        closeModal() {
            this.isModalVisible = false
        }
    },
    setup() {
        const store = useStore()
        return {
            store
        }
    }
})
</script>

<style scoped>
.column {
    color: #000;
}

.button {
    margin-right: 1rem;
}
</style>