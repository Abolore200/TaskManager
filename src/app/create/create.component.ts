import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../services/app.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {
  constructor(private app: AppService){}

  formTitle:string;
  currentDate:string

  ngOnInit(): void {
    //disable previous date
    this.currentDate = new Date().toISOString().split('T')[0];
  }

  //display fixed header
  showFixedHeader:boolean = false

  //add task to session storage
  addTask(form: NgForm){
    const task = {
      id: this.createTaskId(form),
      title: form.value.title,
      description: form.value.description,
      date: form.value.date,
      priority: form.value.priority,
      status: form.value.status
    }

    //add task to session storage
    this.app.saveTaskToSessionStorage(task)

    //display header
    this.showFixedHeader = true

    setTimeout(() => {
      form.reset()
      //hide fixed header
      this.showFixedHeader = false
    },2000)

    //
    this.formTitle = form.value.title
  }

  //generate ID number for each task
  createTaskId(form: NgForm){
    const time = new Date().toTimeString().replaceAll(':','').replaceAll(' ','').substring(0,6)
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const day = new Date().getDay()
    const second = new Date().getMilliseconds()
    const formTitle = form.value.title.replace(' ','').substring(0,3)
    const formDescription = form.value.description.replace(' ','').substring(0,3)
    const formDate= form.value.date.replaceAll('-','').substring(4,8)
    const ID = time + second + formTitle + year + formDescription + month + formDate + day 
    return ID
  }
}
