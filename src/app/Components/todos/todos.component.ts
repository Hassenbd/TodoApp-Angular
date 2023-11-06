import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/Services/todo.service';
import { todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

todos:todo[]=[];

newTodo:todo={
  id:'',
  description:'',
  isCompleted:false,
  createdDate:new Date(),
  completedDate:new Date(),
  deleted:false,
  deletedDate:new Date(),
}

constructor(private service:TodoService){}

ngOnInit(): void {
  this.get();
}

get()
{
   this.service.getAll().subscribe({next:(data)=>this.todos=data});
}

add()
{
  this.service.add(this.newTodo).subscribe({next:(data)=>this.get()});
}

changeCompleted(id:string, td:todo)
{
  td.isCompleted=!td.isCompleted;
  this.service.update(id,td).subscribe({next:(data)=>this.get()});
}

delete(id:string)
{
  this.service.delete(id).subscribe({next:(data)=>this.get()});
}

}
