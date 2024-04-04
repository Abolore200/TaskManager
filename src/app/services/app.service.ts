import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  //empty task array
  taskArray:Task[] = []

  //push task to Tasks array in session storage
  saveTaskToSessionStorage(tasks:Task){
    let storage = this.getTaskFromSessionStorage()
    storage.push(tasks)
    sessionStorage.setItem('tasks', JSON.stringify(storage))
  }

  //get task from Tasks array in session storage
  getTaskFromSessionStorage(){
    let taskSessionStorage = sessionStorage.getItem('tasks')
    if(taskSessionStorage === null || taskSessionStorage === undefined){
      this.taskArray = []
    } else {
      this.taskArray = JSON.parse(taskSessionStorage)
    } return this.taskArray
  }

  //
  tasksObs():Observable<Task[]>{
    return of(this.getTaskFromSessionStorage())
  }
}
