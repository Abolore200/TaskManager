import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent {
  constructor(private app: AppService){}
  title:string;
  description:string;
  date: string;
  priority:string;
  status:string

  //add task
  addTask(){
    if(this.title || this.description || this.date || this.priority || this.status){
      const task = {
        id: this.createTaskId(),
        title: this.title,
        description: this.description,
        date: this.date,
        priority: this.priority,
        status: this.status
      }

      //add task to session storage
      this.app.saveTaskToSessionStorage(task)

    }
  }

  //generate ID number for each task
  createTaskId(){
    if(this.app.getTaskFromSessionStorage()){
      return this.app.getTaskFromSessionStorage().length + 1
    }
  }
}
