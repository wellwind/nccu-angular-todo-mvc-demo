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

  private toggleEditing(item: TodoItem) {
    item.isEditing = !item.isEditing;
  }

  toggleItemEditing(item: TodoItem) {
    item.oldText = item.text;
    this.toggleEditing(item);
  }

  confirmItemEditing(item: TodoItem) {
    // call api
    this.toggleEditing(item);
  }

  cancelItemEditing(item: TodoItem) {
    item.text = item.oldText;
    this.toggleEditing(item);
  }

  getCompletedCount() {
    return this.items.filter(item => item.done).length;
  }
}
