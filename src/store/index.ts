import IProject from "@/interfaces/IProject";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";
import ITask from "@/interfaces/ITask";
import { ADD_PROJECT, ADD_TASK, DELETE_PROJECT, DELETE_TASK, EDIT_PROJECT, EDIT_TASK } from "./mutations-type";


interface state{
    projects: IProject[],
    tasks: ITask[]
}

export const key: InjectionKey<Store<state>> = Symbol()
export const store = createStore<state>({
    state:{
        projects:[],
        tasks:[]
    },
    mutations: { // tem o pode de adicionar coisas ao estado
        [ADD_PROJECT] (state, projectName: string){
            const newProject = {
                id: new Date().toISOString(),
                title: projectName
            } as IProject
            state.projects.push(newProject)
        },
        [EDIT_PROJECT] (state, project: IProject){
            const index = state.projects.findIndex(proj => proj.id == project.id)
            state.projects[index] = project
        },
        [DELETE_PROJECT] (state, id: string){
            state.projects = state.projects.filter(proj => proj.id != id)
        },
        //Adicionar acoes da task
        [ADD_TASK] (state, newTask: ITask){
            newTask.id = new Date().toISOString(),
            state.tasks.push(newTask)
            console.log(state.tasks)
        },
        [EDIT_TASK] (state, task: ITask){
            const index = state.tasks.findIndex(t => t.id == task.id)
            state.tasks[index] = task
        },
        [DELETE_TASK] (state,  id: string){
            console.log('PASSOU AQUI')
            state.tasks = state.tasks.filter(t => t.id != id)

        },
    }
})

export function useStore(): Store<state>{
    return vuexUseStore(key)
}