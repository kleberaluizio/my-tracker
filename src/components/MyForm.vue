<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Form for new task creation">
                <input type="text" class="input" placeholder="What task do want to begin?">
            </div>
            <div class="column">
                <section>
                    <strong>00:00:00</strong>
                </section>
                <button class="button">
                    <span class="icon">
                        <i class="fas fa-play"></i>
                    </span>
                    <span>play</span>
                </button>
                <button class="button">
                    <span class="icon">
                        <i class="fas fa-stop"></i>
                    </span>
                    <span>stop</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'MyForm'
})
</script>

<style scoped></style>