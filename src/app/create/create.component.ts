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

  addTask(){
    if(this.title || this.description || this.date || this.priority || this.status){
      const task = {
        title: this.title,
        description: this.description,
        date: this.date,
        priority: this.priority,
        status: this.status
      }

      this.app.saveTaskToSessionStorage(task)
    }
  }
}
