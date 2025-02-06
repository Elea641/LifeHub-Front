import { Component } from '@angular/core';
import { CommonModule, NgSwitch } from '@angular/common';
import { TopBarComponent } from '../../components/ui/top-bar/top-bar.component';
import { FilterBarComponent } from '../../components/ui/filter-bar/filter-bar.component';
import { CalendarPageComponent } from '../../../calendar/pages/calendar-page/calendar-page.component';
import { ListPageComponent } from '../../../list/pages/list-page/list-page.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, TopBarComponent, FilterBarComponent, CommonModule, NgSwitch, ListPageComponent, CalendarPageComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {
  // currentView: string = 'home';
  currentView: string = 'agenda';

  setView(view: string) {
    this.currentView = view;
  }

  // task$!: Observable<Task | null>;
  // constructor(private route: ActivatedRoute) { }
  // ngOnInit() {
  //   if (this.route.data) {
  //     this.task$ = this.route.data.pipe(
  //       concatMap(data => {
  //         if (data && data['task']) {
  //           return of(data['task']);
  //         } else {
  //           return of(null);
  //         }
  //       })
  //     );
  //   }
  // }
}
