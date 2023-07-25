import { Component,OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()
  todo: Todo = new Todo;
  @Input()
  i!: number;
  @Output() 
  todoDelete: EventEmitter<Todo> = new EventEmitter;
  @Output()
  todoCheckbox: EventEmitter<Todo> = new EventEmitter;

  constructor() {}

  ngOnInit(): void{

  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been trigred")
  }
  onCheckboxClick(todo: Todo): void {
    this.todoCheckbox.emit(todo);
  }
}
