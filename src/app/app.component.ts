import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'taskManager';
  constructor(private app: AppService){}

  ngOnInit(): void {
    
  }
}
