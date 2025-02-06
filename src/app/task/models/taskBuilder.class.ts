import { Task } from "./task.class";

export class TaskBuilder {
    private name: string = '';
    private description: string = '';

    setName(name: string): TaskBuilder {
        this.name = name;
        return this;
    }

    setDescription(description: string): TaskBuilder {
        this.description = description;
        return this;
    }

    build(): Task {
        return new Task(this.name, this.description);
    }
}
