import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TaskBuilder } from '../../../models/taskBuilder.class';
import { Crud } from '../../../../shared/interface/crud.interface';
import { Task } from '../../../models/task.class';
import { TASK_SERVICE_TOKEN } from '../../../shared/tokens/task-service.token';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.scss'
})
export class TaskModalComponent {
  isModalVisible: boolean = false;

  taskForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor(@Inject(TASK_SERVICE_TOKEN) private taskService: Crud<Task>) { }

  openModal(): void {
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  async onSubmit() {
    if (this.taskForm.valid) {
      const formData = this.taskForm.value;

      try {
        if (formData.name && formData.description) {
          const task = new TaskBuilder()
            .setName(formData.name)
            .setDescription(formData.description)
            .build();

          this.taskService.save(task);
          this.taskForm.reset();
          this.closeModal();
        }
      } catch (error) {
        console.error("Erreur lors de l'envoi du message:", error);
      }
    }
  }
}
