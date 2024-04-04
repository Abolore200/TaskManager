import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Task } from '../models/app.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit {
  constructor(private app: AppService){}

  tasks:Task[] = []

  ngOnInit(): void {
    // this.app.tasksObs().subscribe(tasks => {
    //   if(tasks.length !== 0 ){
    //     console.log(tasks)
    //   }
    // })
  }
}
