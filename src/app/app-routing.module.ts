import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './Components/todos/todos.component';
import { DeletedComponent } from './Components/deleted/deleted.component';

const routes: Routes = [
  {path:'',component:TodosComponent},
  {path:'todos',component:TodosComponent},
  {path:'deleted',component:DeletedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
