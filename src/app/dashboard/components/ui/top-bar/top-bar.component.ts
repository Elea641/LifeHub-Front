import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { TaskModalComponent } from '../../../../task/components/ui/task-modal/task-modal.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, TaskModalComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  @ViewChild(TaskModalComponent) taskModal!: TaskModalComponent;

  @Output() viewChanged = new EventEmitter<string>();

  changeView(view: string) {
    this.viewChanged.emit(view);
  }

  onClickOpenModalTask(): void {
    if (this.taskModal) {
      this.taskModal.openModal();
    }
  }
}
