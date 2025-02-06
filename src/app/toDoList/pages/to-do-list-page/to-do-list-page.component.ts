import { Component, Input } from '@angular/core';
import { Task } from '../../../task/models/task.class';
import { ToDoListComponent } from '../../components/ui/to-do-list/to-do-list.component';

@Component({
  selector: 'app-to-do-list-page',
  standalone: true,
  imports: [ToDoListComponent],
  templateUrl: './to-do-list-page.component.html',
  styleUrl: './to-do-list-page.component.scss'
})
export class ToDoListPageComponent {
  @Input() tasks: Task[] = [];
}
