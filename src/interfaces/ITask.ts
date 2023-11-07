import IProject from "./IProject"

export default interface ITask{
    timeLenghtInSeconds: number,
    taskDescription: string
    project: IProject
}