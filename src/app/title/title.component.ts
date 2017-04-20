import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title = '<u>todo</u>';

  inputPlaceholder = 'What needs to be done?';

  constructor() { }

  ngOnInit() {
  }

  someEvent($event) {
    console.log($event);
  }
}
