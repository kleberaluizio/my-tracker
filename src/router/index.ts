import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Tasks from "../views/Tasks.vue"
import Projects from "../views/Projects.vue"
import FormProject from '../views/Projects/FormProject.vue'
import ListView from '../views/Projects/ListView.vue'
import FormTask from '../views/Tasks/FormTask.vue'


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tasks',
        component: Tasks
    },
    {
        path: '/edit-task',
        name: 'Edit Task',
        component: FormTask
    },
    {
        path: '/projects',
        component: Projects,
        children: [
            {
                path: '',  
                name: 'Projects',
                component: ListView,
            },
            {
                path: 'new',   // path: '/projects/new'
                name: 'New Project',
                component: FormProject
            },
            {
                path: ':id',
                name: 'Edit Project',
                component: FormProject,
                props: true  // me diz que o seguindo id sera injetado na visualização
            }
        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes

})

export default router;