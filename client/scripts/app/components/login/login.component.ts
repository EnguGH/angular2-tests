/* beautify ignore:start */
import { Component, Pipe, PipeTransform} from 'angular2/core';

import { Router, ROUTER_DIRECTIVES } from 'angular2/router'
import {TodoStore} from '../../services/todo.store';
/* beautify ignore:end */

@Component({
    selector: 'login',
    directives: [ROUTER_DIRECTIVES],
    providers: [TodoStore],
    styles: [require('./login.component.css')],
    template: require('./login.component.html')
})
export class LoginComponent {
    public show: boolean;
    public clickCount = 0;
    public todos;
    constructor(private todoStr: TodoStore, private router: Router) {
        // this.routeParam = routeParam;
        this.show = false;
        todoStr.todos$.subscribe(updatedTodo => this.todos = updatedTodo);
        //this.todos = this.todoStr.state;
        setTimeout(() => {
            this.todoStr.remove('BDEEFCA3-EF7E-413F-9A53-CCFF6B5A6FBB');
        }, 5000);
    }
    authenticate(email, pwd) {
        if (email === '' && pwd === '') {
            this.router.parent.navigate(['Missions']);
        } else {
            this.show = true;
        }
    }
    clicked() {
        console.log(this.clickCount);
        setTimeout(() => {
            this.clickCount++;
        }, 1000);
    }
}
