import { TodoItem } from './../models/todo.model';
import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'title-bar',
    templateUrl: './todo-titlebar.component.html'
})

export class TodoTitleBar{
    enteredCategory = '';
    enteredContent = '';
    @Output () todoCreated = new EventEmitter ();


    addTodoItem(){
        const todoItem = {
            category: this.enteredCategory,
            content: this.enteredContent
        };
        this.todoCreated.emit(todoItem);
    }
}