import { CommonModule, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarWeekViewComponent } from '../../components/ui/calendar-week-view/calendar-week-view.component';
import { CalendarMonthViewComponent } from '../../components/ui/calendar-month-view/calendar-month-view.component';
import { CalendarDayViewComponent } from '../../components/ui/calendar-day-view/calendar-day-view.component';
import { CalendarYearViewComponent } from '../../components/ui/calendar-year-view/calendar-year-view.component';

@Component({
  selector: 'app-calendar-page',
  standalone: true,
  imports: [CommonModule, NgSwitch, CalendarYearViewComponent, CalendarMonthViewComponent, CalendarWeekViewComponent, CalendarDayViewComponent],
  templateUrl: './calendar-page.component.html',
  styleUrl: './calendar-page.component.scss'
})
export class CalendarPageComponent {
  isOpen = false;
  selectedOption: string = 'Mois';
  options = [
    { label: 'Année' },
    { label: 'Mois' },
    { label: 'Semaine' },
    { label: 'Jour' },
    { label: 'Planning' },
  ];

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: { label: string }, event: MouseEvent): void {
    event.stopPropagation();
    this.selectedOption = option.label;
    this.isOpen = false;
  }
}
