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
    if(sessionStorage !== undefined || sessionStorage !== null){
      this.app.tasksObs().subscribe(tasks => {
        this.tasksArr = tasks
      })
    }
  }
}
