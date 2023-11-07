import IProject from "@/interfaces/IProject";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";


interface state{
    projects: IProject[]
}

export const key: InjectionKey<Store<state>> = Symbol()
export const store = createStore<state>({
    state:{
        projects:[]
    },
    mutations: { // tem o pode de adicionar coisas ao estado
        'ADD_PROJECT' (state, projectName: string){
            const newProject = {
                id: new Date().toISOString(),
                title: projectName
            } as IProject
            state.projects.push(newProject)
        },
        'EDIT_PROJECT' (state, project: IProject){
            const index = state.projects.findIndex(proj => proj.id == project.id)
            state.projects[index] = project
        },
        'DELETE_PROJECT' (state, id: string){
            state.projects = state.projects.filter(proj => proj.id != id)
        }
        
    }
})

export function useStore(): Store<state>{
    return vuexUseStore(key)
}