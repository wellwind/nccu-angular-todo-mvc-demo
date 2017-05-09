import { TodoItem } from './todo-item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'done'
})
export class DonePipe implements PipeTransform {

  transform(value: TodoItem, displayUndone?: any): any {
    if (value.done) {
      return '(done)';
    } else if (displayUndone) {
      return '(undone)';
    }
  }

}
