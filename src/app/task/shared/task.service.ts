import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment.dev';
import { Task } from '../models/task.class';
import { Crud } from '../../shared/interface/crud.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService implements Crud<Task> {
  private http = inject(HttpClient);
  public task$!: Observable<Task>;

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.urlApi}tasks/`)
  }

  getOne(id: number): void {
    this.http.get<any>(`${environment.urlApi}tasks/` + id)
  }

  save(task: Task): void {
    this.http.post<Task>(`${environment.urlApi}tasks/`, task).subscribe((data) => {
      console.log('Données reçues:', data);
    });
  }

  updateTask(o: Task): Observable<Task> {
    throw new Error('Method not implemented.');
  }
  deleteTask(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
