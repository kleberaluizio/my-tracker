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
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { ADD_PROJECT, EDIT_PROJECT, NOTIFY } from "@/store/mutations-type";
import { NotificationType } from '@/interfaces/INotification';
import {MixinNotification} from '@/mixins/notify'

export default defineComponent({
    name: "FormProject",
    props: {
        id: {
            type: String
        }
    },
    mixins: [
        MixinNotification
    ],
    data() {
        return {
            projectTitle: "",
        };
    },
    mounted() {
        if(this.id){
           const editProject = this.store.state.projects.find(proj => proj.id == this.id)
           this.projectTitle = editProject?.title || ''
        }
    },
    methods: {
        saveProject() {
            if(this.id){
                this.store.commit(EDIT_PROJECT, {
                    id: this.id,
                    title: this.projectTitle
                })
            } else {
                this.store.commit(ADD_PROJECT, this.projectTitle)
            }
            this.projectTitle = "";
            this.notify (NotificationType.SUCCESS,'Excellent', 'Project was successfully registred!' );
            this.$router.push('/projects')// Fprmece a rpta mpva desejada
        },
    },
    setup() {
        const store = useStore()
        return {
            store
        }
    }
})
</script>,

<style scoped>
.label {
    background-color: var(--bg-primary);
    color: var(--text-primary);
}
</style>