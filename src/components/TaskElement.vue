<template>
    <BoxConfig>
        <div class="columns">
            <div class="column is-7">
                {{ task.taskDescription || 'Task without description' }}
            </div>
            <div class="column is-5">
                <CronometerLogic :timeInSeconds="task.timeLenghtInSeconds" />
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

<style>
.column{
    color:  #000;
}
</style>