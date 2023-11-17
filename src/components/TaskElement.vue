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
                <router-link :to="`/edit/${task.id}`">
                    <button class="button is-warning">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                </router-link>
                <button class="button is-danger" @click="deleteTask(task.id)">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    </BoxConfig>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CronometerLogic from './CronometerLogic.vue';
import ITask from '@/interfaces/ITask';
import BoxConfig from './BoxConfig.vue';
import { useStore } from '@/store';
import { DELETE_TASK } from '@/store/mutations-type';

export default defineComponent({
    name: "TaskElement",
    components: {
        CronometerLogic,
        BoxConfig,
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