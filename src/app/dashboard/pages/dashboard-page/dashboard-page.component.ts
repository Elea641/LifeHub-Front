import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../../components/ui/top-bar/top-bar.component';
import { FilterBarComponent } from '../../components/ui/filter-bar/filter-bar.component';
import { CalendarPageComponent } from '../../../calendar/pages/calendar-page/calendar-page.component';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Task } from '../../../task/models/task.class';
import { ToDoListPageComponent } from '../../../toDoList/pages/to-do-list-page/to-do-list-page.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, TopBarComponent, FilterBarComponent, CommonModule, ToDoListPageComponent, CalendarPageComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {
  currentView: string = 'home';
  private route = inject(ActivatedRoute)
  task$: Observable<Task[]> = this.route.data.pipe(
    map(data => data['tasks'] ?? [])
  );

  setView(view: string) {
    this.currentView = view;
  }
}
