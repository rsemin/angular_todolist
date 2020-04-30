import { TodoItem } from './../models/todo.model';
import { Component, Input } from "@angular/core";


@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html'
})

export class TodoItemComponent{
    // todoItems = [{
    //     category: 'Groceries',
    //     content: 'Meat'
    // },
    // {
    //     category: 'Groceries',
    //     content: 'Garlic'
    // },
    // {
    //     category: 'Groceries',
    //     content: 'Milk'
    // }];
    @Input() todoItems = []; 
}