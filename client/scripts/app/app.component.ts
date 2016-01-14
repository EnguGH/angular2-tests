import {Component} from 'angular2/core';
import {TodoStore} from './services/todo.store';

@Component({
    selector: 'app',
    providers: [TodoStore],
    template: `
        <ul>
    <li *ngFor="#t of todos">{{t.id}}</li>
</ul>
    `
})

export class AppComponent {
    public todos;
    constructor(private todoStr: TodoStore) {
        todoStr.todos$.subscribe(updatedTodo => this.todos = updatedTodo);
        setTimeout(() => {
            this.todoStr.remove('BDEEFCA3-EF7E-413F-9A53-CCFF6B5A6FBB');
        }, 5000);
    }
}
