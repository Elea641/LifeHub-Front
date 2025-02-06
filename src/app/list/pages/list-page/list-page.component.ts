import { Component, Input } from '@angular/core';
import { ListTasksComponent } from '../../components/ui/list-tasks/list-tasks.component';
import { Task } from '../../../task/models/task.class';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ListTasksComponent],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent {
  @Input() tasks: Task[] = [];
}
