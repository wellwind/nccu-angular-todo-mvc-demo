import { TodoService } from './../todo.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Output() addTodo = new EventEmitter<string>();

  title = '<u>todo</u>';

  inputPlaceholder = 'What needs to be done?';

  inputValue;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  enter($event) {
    console.log(this.inputValue);
    this.addTodo.emit(this.inputValue);
  }
}
