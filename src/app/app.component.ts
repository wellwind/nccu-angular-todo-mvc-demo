import { TodoItem } from './todo-item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  items: TodoItem[] = [
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
    }
  ];

  toggleItemEditing(item: TodoItem) {
    item.isEditing = !item.isEditing;
  }
}
