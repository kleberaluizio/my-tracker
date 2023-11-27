import IProject from "@/interfaces/IProject";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";
import ITask from "@/interfaces/ITask";
import { ADD_PROJECT, ADD_TASK, DELETE_PROJECT, DELETE_TASK, EDIT_PROJECT, EDIT_TASK, NOTIFY } from "./mutations-type";
import { INotification, NotificationType } from "@/interfaces/INotification";

interface state{
    projects: IProject[],
    tasks: ITask[],
    notifications: INotification[]
}

export const key: InjectionKey<Store<state>> = Symbol()
export const store = createStore<state>({
    state:{
        projects:[],
        tasks:[],
        notifications: []
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
        },
        [EDIT_TASK] (state, task: ITask){
            const index = state.tasks.findIndex(t => t.id == task.id)
            state.tasks[index] = task
        },
        [DELETE_TASK] (state,  id: string){
            state.tasks = state.tasks.filter(t => t.id != id)

        },
        [NOTIFY] (state, newNotification: INotification){
            newNotification.id = new Date().getTime()
            state.notifications.push(newNotification)

            setTimeout(()=> {
                state.notifications = state.notifications.filter(n => n.id != newNotification.id)
            },2000)
        }
    }
})

export function useStore(): Store<state>{
    return vuexUseStore(key)
}