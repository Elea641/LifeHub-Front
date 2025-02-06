import { Observable } from 'rxjs';

export interface Crud<T> {
  getAll(): Observable<T[]>;
  getOne(id: number): void
  save(o: T): void;
  updateTask(o: T): Observable<T>;
  deleteTask(id: number): Observable<void>;
}
