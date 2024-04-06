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

  //toogle menu header
  toggleMenu:boolean = false
  displayMenu(menu:HTMLDivElement){
    menu.classList.toggle('show')
  }

  hideMenu(menuLink:HTMLDivElement){
    if(menuLink.classList.contains('show')){
      menuLink.classList.remove('show')
    }
  }
}
