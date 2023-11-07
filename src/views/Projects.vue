<template>
    <div class="projects">
        <h1 class="title">Projects</h1>
        <router-view></router-view>
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjectsView'
})
</script>
<style scoped>
h1,
h2,
.projects,
label {
    background-color: var(--bg-primary);
    color: var(--text-primary);
}

.projects {
  padding: 1.25rem;
}
</style>