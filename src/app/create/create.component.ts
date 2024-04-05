import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {
  constructor(private app: AppService){}
  title:string;
  description:string;
  date: string;
  priority:string;
  status:string

  currentDate:string

  ngOnInit(): void {
    //disable previous date
    this.currentDate = new Date().toISOString().split('T')[0];
  }

  //display fixed header
  showFixedHeader:boolean = false

  //add task to session storage
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

    this.showFixedHeader = true

    setTimeout(() => {
      this.title = '';
      this.description = '';
      this.date = '';
      this.priority = ''
      this.status = ''

      //hide fixed header
      this.showFixedHeader = false
    },2000)
  }

  //generate ID number for each task
  createTaskId(){
    const time = new Date().toTimeString()
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const day = new Date().getDay()

    //random id generator
    return this.title.substring(0,3) + 
    this.description.substring(0,5) + 
    this.date.substring(3,7) +
     time.substring(0,8) + 
     String(year).substring(0,3) + 
     String(month).substring(0,1) + 
     String(day).substring(0,1)
  }
}
