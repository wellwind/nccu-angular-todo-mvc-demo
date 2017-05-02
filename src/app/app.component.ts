import { TodoService } from './todo.service';
import { TodoItem } from './todo-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'app works!';
  leftItems = 0;
  todoItems: TodoItem[];

  constructor(private todoService: TodoService) {
    // this.countLeftItems();
  }

  ngOnInit(): void {
    this.todoItems = this.todoService.todoItems;
  }


  // getLeftItemCount() {
  //   return this.todoItems.filter(item => !item.done).length;
  // }

  // countLeftItems() {
  //   this.leftItems = this.getLeftItemCount();
  // }

  addTodoItem(text) {
    this.todoService.addTodoItem(text);
  }

  removeItem(item: TodoItem){
    this.todoService.removeItem(item);
  }
}
