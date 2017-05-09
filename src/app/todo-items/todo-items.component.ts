import { TodoService } from './../todo.service';
import { TodoItem } from './../todo-item';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() items: TodoItem[];
  @Output() itemRemoved = new EventEmitter<TodoItem>();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    console.log(this.todoService.todoItems);
  }

  private toggleEditing(item: TodoItem) {
    item.isEditing = !item.isEditing;
  }

  toggleItemEditing(item: TodoItem, inputText: HTMLInputElement) {
    item.oldText = item.text;
    this.toggleEditing(item);

    setTimeout(() => {
      inputText.select();
      inputText.focus();
    }, 0);

  }

  confirmItemEditing(item: TodoItem) {
    // call api
    this.toggleEditing(item);
  }

  cancelItemEditing(item: TodoItem) {
    item.text = item.oldText;
    this.toggleEditing(item);
  }

  destroyButtonClick(item: TodoItem) {
    this.itemRemoved.emit(item);
  }
}
