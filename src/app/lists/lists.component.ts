import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../services/app.service';
import { Task } from '../models/app.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ListsComponent implements OnInit {
  constructor(private app: AppService){}

  tasksArr:Task[] = []

  ngOnInit(): void {
    this.app.tasksObs().subscribe(tasks => {
      if(tasks.length !== 0){
        this.tasksArr = tasks
      }
    })
    // this.tasksArr = this.app.getTaskFromSessionStorage()
  }


  deleteTask(id:number | undefined){

    //remove task from session storage
    this.app.removeTaskFromSessionStorage(id)

    //remove task from TaskArr
    this.tasksArr.forEach((taskID, index) => {
      if(taskID.id === id){
        this.tasksArr.splice(index, 1)
      }
    })
  }
}
