import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service';
import { Task } from '../../models/app.model';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.css',
  encapsulation: ViewEncapsulation.None,
  // providers: [AppService]
})
export class ViewTaskComponent implements OnInit {
  constructor(private actRoute: ActivatedRoute, private app: AppService){}

  taskTitle:any
  tasks:any
  currentDate:string

  ngOnInit(): void {
    
    //display clicked task
    this.app.tasksObs().subscribe(taskArr => {
      this.actRoute.paramMap.subscribe(param => {
        this.taskTitle = param.get('title')

        this.tasks = taskArr.find(x => x.title == this.taskTitle)
      })
    })

    //disable previous date
    this.currentDate = new Date().toISOString().split('T')[0];
  }

  //edit input text
  edit:boolean = false

  //on click, edit task
  editTask(){
    this.edit = true
  }

  //on click, update task
  updateTask(task:Task){
    this.edit = false

    //update task in session storage
    this.app.updateTaskInSessionStorage(task)
  }
}
