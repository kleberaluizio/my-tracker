<template>
    <section>
        <span>
            <span class="icon">
                <i class="fa-regular fa-clock"></i>
            </span>
            <strong :class="{ 'display': isNightModeColorEnabled }">{{ elapsedTime }}</strong>
        </span>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CronometerLogic',
    props: {
        timeInSeconds: {
            type: Number,
            default: 0
        },
        isNightModeColorEnabled: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        elapsedTime(): string {
            return (new Date(this.timeInSeconds * 1000)).toISOString().substr(11, 8)
        }
    }
})
</script>

<style scoped>
.display {
    color: var(--text-primary);
}
</style>
