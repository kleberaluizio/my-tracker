<template>
    <BoxConfig>
        <div class="columns">
            <div class="column is-9">
                {{project.title}}
            </div>
            <div class="column is-3">
                <button class="button is-warning">Editar</button>
                <button class="button is-danger">Deletar</button>
            </div>
        </div>
    </BoxConfig>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import BoxConfig from './BoxConfig.vue';
import IProject from '@/interfaces/IProject';

export default defineComponent({
    name: "ProjectElement",
    components: {
        BoxConfig
    },
    props: {
        project: {
            type: Object as PropType<IProject>,
            required: true
        }
    }
})

</script>

<style scoped>
.button{
    margin-right: 1rem;
}
</style>
