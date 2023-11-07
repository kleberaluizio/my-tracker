<template>
    <section>
        <form @submit.prevent="saveProject">
            <div class="field">
                <label for="projectTitle" class="label">Project Title </label>
                <input type="text" class="input" v-model="projectTitle" id="projectTitle">
            </div>
            <div class="field">
                <button class="button" type="submit" >Save</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
    name: "FormProject",
    props: {
        id: {
            type: String
        }
    },
    mounted() {
        if(this.id){
           const editProject = this.store.state.projects.find(proj => proj.id == this.id)
           this.projectTitle = editProject?.title || ''
        }
    },
    data() {
        return {
            projectTitle: "",
        };
    },
    methods: {
        saveProject() {
            if(this.id){
                this.store.commit('EDIT_PROJECT', {
                    id: this.id,
                    title: this.projectTitle
                })
            } else {
                this.store.commit('ADD_PROJECT', this.projectTitle)
            }
            this.projectTitle = "";
            this.$router.push('/projects')// Fprmece a rpta mpva desejada
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