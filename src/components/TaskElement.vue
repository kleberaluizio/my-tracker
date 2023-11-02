<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
              {{task.taskDescription}}
            </div>
            <div class="column is-5">
                <CronometerLogic :timeInSeconds="task.timeLenghtInSeconds"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CronometerLogic from './CronometerLogic.vue';
import ITask from '@/interfaces/ITask';

export default defineComponent({
    name: "TaskElement",
    components: { CronometerLogic },
    props:{
        task:{
            type: Object as PropType<ITask>,
            required: true
        }
    }
})
</script>

<style scoped>
.box{
    background-color: #FAF0CA;
}
</style>