import { TodoItem } from './todo-item';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  todoItems: TodoItem[] = [
    {
      id: 1,
      text: 'item 1',
      done: true
    },
    {
      id: 2,
      text: 'item 2',
      done: false
    },
    {
      id: 3,
      text: 'item 3',
      done: true
    },
    {
      id: 4,
      text: 'item 4',
      done: false
    }
  ];

  constructor() { }

  addTodoItem(todoText) {
    this.todoItems.push({
      id: this.todoItems.length + 1,
      text: todoText,
      done: false
    });
  }
}
