import { Response, Http } from '@angular/http';
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

  constructor(private todoService: TodoService, private http: Http) {
    // this.countLeftItems();
  }

  callApiA() {
    return new Promise((resolve, rejcet) => {
      // call api...
      setTimeout(() => {
        console.log('api A finished');
        resolve('123');
        // rejcet();
      }, 1500);
    });

  }

  callApiB() {
    // call api...
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('api B finished');
        resolve();
      }, 1000);
    });

  }

  ngOnInit(): void {

    // this.callApiA();
    // this.callApiB();
    // this.callApiA(() => {
    //   this.callApiB(() => {
    //     console.log('done');
    //   });
    // });

    this.callApiA()
      .then(() => this.callApiB())
      .then(() => console.log('done'));


    this.todoService.loadTodoItems().subscribe((response: Response) => {
      this.todoItems = response.json();
    });
    // this.todoItems = this.todoService.todoItems;
    // this.http.get('assets/data.json').subscribe((response: Response) => {
    //   this.todoItems = this.todoService.todoItems = response.json();
    // });
    // this.todoItems = this.todoService.todoItems;
  }


  // getLeftItemCount() {
  //   return this.todoItems.filter(item => !item.done).length;
  // }

  // countLeftItems() {
  //   this.leftItems = this.getLeftItemCount();
  // }

  addTodoItem(text) {
    this.todoService.addTodoItem(text);
    this.todoItems = this.todoService.todoItems;
  }

  removeItem(item: TodoItem) {
    this.todoService.removeItem(item);
  }
}
