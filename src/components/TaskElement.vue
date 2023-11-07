<template>
    <BoxConfig>
        <div class="columns">
            <div class="column is-6">
                {{ task.taskDescription  + ' ['+ task.project.title + ']'|| 'Task without description' }}
            </div>
            <div class="column is-3">
                <CronometerLogic :timeInSeconds="task.timeLenghtInSeconds" :isNightModeColorEnabled="false" />
            </div>
            <div class="column is-3">
                <button class="button is-warning"><i class="fas fa-pencil-alt"></i></button>
                <button class="button is-danger"> <i class="fas fa-trash"></i></button>
            </div>
        </div>
    </BoxConfig>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CronometerLogic from './CronometerLogic.vue';
import ITask from '@/interfaces/ITask';
import BoxConfig from './BoxConfig.vue';

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
        }
    }
})
</script>

<style scoped>
.column {
    color: #000;
}
.button{
    margin-right: 1rem;
}
</style>