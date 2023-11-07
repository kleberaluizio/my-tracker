<template>
    <section class="projects">
        <h1 class="title">Create new Project</h1>
        <form>
            <div class="field">
                <label for="projectTitle" class="label">Project Title </label>
                <input type="text" class="input" v-model="projectTitle" id="projectTitle">
            </div>
            <div class="field">
                <button class="button" type="submit" @click="saveProject">Save</button>
            </div>
            <h2>Project List</h2>
            <div class="list">
                <ProjectElement v-for="project in projects" :key="project.id" :project="project" />
                <BoxConfig v-if="isProjectEmpty">
                    Project history is empty!
                </BoxConfig>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectElement from '@/components/ProjectElement.vue';
import BoxConfig from '@/components/BoxConfig.vue';
import { useStore } from '@/store';

export default defineComponent({
    name: "ProjectView",
    components:{
        BoxConfig,
        ProjectElement
    },
    data() {
        return {
            projectTitle: "",
        };
    },
    computed:{
        isProjectEmpty() : boolean{
            return this.projects.length === 0
        }
    },
    methods: {
        saveProject() {
            this.store.commit('ADD_PROJECT', this.projectTitle)
            this.projectTitle = "";
        }
    }, 
    setup() {
        const store = useStore()
        return{
            store
        }
    }
})
</script>

<style scoped>

h1,h2,title, label{
    background-color: var(--bg-primary);
    color:  var(--text-primary);
}
.projects {
    padding: 1.25rem;
}
</style>