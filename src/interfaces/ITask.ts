import IProject from "./IProject"

export default interface ITask{
    id: string,
    timeLenghtInSeconds: number,
    taskDescription: string
    project: IProject
}