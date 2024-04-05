import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  //push task to Tasks array in session storage
  saveTaskToSessionStorage(tasks:Task){
    let storage = this.getTaskFromSessionStorage()
    storage.push(tasks)
    // if(typeof sessionStorage !== 'undefined'){
    sessionStorage.setItem('tasks', JSON.stringify(storage))
    // }
  }

  // //get task from Tasks array in session storage
  getTaskFromSessionStorage(){
    let taskArray;
    let taskSessionStorage = sessionStorage.getItem('tasks')
    if(taskSessionStorage === null || taskSessionStorage === undefined){
      taskArray = []
    } else {
      taskArray = JSON.parse(taskSessionStorage)
    } return taskArray
  }

  //return observable for task array
  tasksObs():Observable<Task[]>{
    return of(this.getTaskFromSessionStorage())
  }

  //remove task from session storage
  removeTaskFromSessionStorage(id: number | undefined){

    this.tasksObs().subscribe(storage => {
      storage.forEach((taskID, index) => {
        if(taskID.id === id){
          storage.splice(index, 1)
        }
      })
  
      sessionStorage.setItem('tasks', JSON.stringify(storage))
    })
  }

  //update task
  updateTaskInSessionStorage(task:Task){
    this.tasksObs().subscribe(storage => {
      storage.forEach((taskObj) => {
        if(taskObj.id === task.id){
          taskObj.title = task.title
          taskObj.date = task.date
          taskObj.priority = task.priority
          taskObj.status = task.status
          taskObj.description = task.description
        }
      })

      sessionStorage.setItem('tasks', JSON.stringify(storage))
    })
  }
}
