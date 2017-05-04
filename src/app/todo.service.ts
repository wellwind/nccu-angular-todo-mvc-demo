import { Http } from '@angular/http';
import { TodoItem } from './todo-item';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  _todoItems : TodoItem[];

  get todoItems() {
    return this._todoItems;
  }

  set todoItems(val){
    this._todoItems = val;
  }
  // todoItems: TodoItem[];

  constructor(private http: Http) {
    console.log('ctor');
  }

  loadTodoItems(){
    let request = this.http.get('assets/data.json');
    request.subscribe(response => {
      this.todoItems = response.json();
    });
    return request;
    // return this.http.get('assets/data.json');
    // this.http.get('assets/data.json').subscribe(response => {
    //   this.todoItems = response.json();
    // });
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
