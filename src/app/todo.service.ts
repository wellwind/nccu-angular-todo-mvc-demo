import { TodoItem } from './todo-item';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  todoItems: TodoItem[];

  constructor() {
    console.log('ctor');
  }

  addTodoItem(todoText) {
    this.todoItems.push({
      id: this.todoItems.length + 1,
      text: todoText,
      done: false
    });
  }

  removeItem(item: TodoItem) {
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== item.id);
  }
}
