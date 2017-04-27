import { TodoItem } from './todo-item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  leftItems = 0;
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

  constructor() {
    this.countLeftItems();
  }

  getLeftItemCount() {
    return this.todoItems.filter(item => !item.done).length;
  }

  countLeftItems() {
    this.leftItems = this.getLeftItemCount();
  }
}
