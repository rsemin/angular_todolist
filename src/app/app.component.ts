import { TodoItem } from './models/todo.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = ' Angular todo-list-app';
  sTodoItems = [];

  TodoAdd(todoItem){
    this.sTodoItems.push(todoItem);
  }
}
