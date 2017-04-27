import { TodoItem } from './../todo-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() items: TodoItem[];

  constructor() { }

  ngOnInit() {
  }

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

}
