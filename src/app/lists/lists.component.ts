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

  filterStatus:string = 'all'
  filterPriority:string = ''

  status = [
    {id:'1',name:'all'},
    {id:'2',name:'pending'},
    {id:'3',name:'in progress'},
    {id:'4',name:'completed'}
  ]

  ngOnInit(): void {
    this.app.tasksObs().subscribe(tasks => {
      if(tasks.length !== 0){
        this.tasksArr = tasks
      }
    })
  }

  //delete task and remove from session storage
  deleteTask(id:number | undefined){

    //confirm alert to delete task
    const response = confirm('Are you sure you want to delete?')

    if(response){
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
}
