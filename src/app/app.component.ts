import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'taskManager';
  constructor(private app: AppService){}

  ngOnInit(): void {
    this.app.tasksObs().subscribe(val => {
      console.log(val)
    })
  }
}
