<template>
    <div class="box has-text-weight-bold" :style="styles">
        <slot>
            
        </slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BoxConfig',
    data(){
        return{
            styles:{
            'background-color': '#FAF0CA'  // OUTRA FORMA DE USAR ESTILOS, FORNECE MAIS FLEXIBILIDADE PARA ALTERAÇÃO
            }
        }
    }
})

</script>

<style>
.box{
    margin: 0.5rem;
}
</style>
