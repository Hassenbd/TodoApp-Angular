import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todo } from '../models/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url: string = 'https://localhost:7219';

  constructor(private http: HttpClient) {}

  getAll(): Observable<todo[]> {
    return this.http.get<todo[]>(this.url + '/api/todo');
  }

  add(td: todo): Observable<todo> {
    //empty guid
    td.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<todo>(this.url + '/api/todo', td);
  }

  update(id: string, td: todo): Observable<todo> {
    return this.http.put<todo>(this.url + '/api/todo/' + id, td);
  }

  delete(id: string): Observable<todo> {
    return this.http.delete<todo>(this.url + '/api/todo/' + id);
  }

  getDeleted(): Observable<todo[]> {
    return this.http.get<todo[]>(this.url + '/api/todo/deletedTodos');
  }

  undoDeleted(id: string, td: todo): Observable<todo> {
    return this.http.put<todo>(this.url + '/api/todo/undo:' + id, td);
  }
}
