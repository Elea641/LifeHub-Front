import { Component, Input } from '@angular/core';
import { Task } from '../../../../task/models/task.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.scss'
})
export class ListTasksComponent {
  @Input() tasks: Task[] = [];
}
