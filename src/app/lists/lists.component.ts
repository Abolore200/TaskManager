import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit {
  constructor(private app: AppService){}

  ngOnInit(): void {
    this.app.tasksObs().subscribe(val => {
      if(val !== undefined){
        console.log(val)
      }
    })
  }
}
