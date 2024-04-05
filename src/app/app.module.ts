import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { ListsComponent } from './lists/lists.component';
// import { UpdateComponent } from './lists/update/update.component';
import { ViewTaskComponent } from './lists/view-task/view-task.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListsComponent,
    // UpdateComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
