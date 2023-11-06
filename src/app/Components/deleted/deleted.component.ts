import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/Services/todo.service';
import { todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit{

todos:todo[]=[];

constructor(private service :TodoService) {}


ngOnInit(): void {
  this.get();
}

get()
{
  this.service.getDeleted().subscribe(data=>(this.todos=data));
}

undo(id:string, td:todo)
{
  this.service.undoDeleted(id,td).subscribe((data)=>this.get());
}

}
