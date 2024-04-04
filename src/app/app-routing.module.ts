import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  // {path:'',component:AppComponent},
  {path:'',component:CreateComponent},
  {path:'create',component:CreateComponent},
  {path:'lists',component:ListsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "top"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
