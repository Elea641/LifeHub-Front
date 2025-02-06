import { Component, Input } from '@angular/core';
import { Task } from '../../../../task/models/task.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  @Input() tasks: Task[] = [];
}
