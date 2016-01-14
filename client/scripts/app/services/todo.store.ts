/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {isPresent} from 'angular2/src/facade/lang';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import * as _ from 'lodash';
/* beautify ignore:end */

// Closure
var state = {
    list: [{
        id: 'D6835C2B-6DC4-4036-BE04-D7135F55737D',
        name: 'D6835C2B-6DC4-4036-BE04-D7135F55737D',
        completed: false
    }, {
            id: 'BDEEFCA3-EF7E-413F-9A53-CCFF6B5A6FBB',
            name: 'BDEEFCA3-EF7E-413F-9A53-CCFF6B5A6FBB',
            completed: true
        }, {
            id: 'C984C7B7-51B7-476D-B48F-3247871B7678',
            name: 'C984C7B7-51B7-476D-B48F-3247871B7678',
            completed: false
        }],
    filter: todo => todo,
    currentFilter: 'all',
    editing: null
};

function setState(newState) {
    //console.log('SET State');
    Object.assign(state, newState);
    // Emit change
}

@Injectable()
export class TodoStore {
    todos$;
    public state;
    private _todosObserver;
    constructor() {
        // //console.log('TodoStore');
        this.state = state;
        this.todos$ = new Observable(observer =>
            this._todosObserver = observer).share();
        setTimeout(() => { this._todosObserver.next(this.state.list); }, 1000);
        
    }

    get list() {
        // Immutable
        return this.state.list.slice(0);
    }
    set list(val) {
        // Immutable
    }

    get count() {
        return this.list.length;
    }
    get remainingCount() {
        return this.list.filter(function(todo) {
            return !todo.completed;
        }.bind(this)).length;
    }
    get completedCount() {
        return this.list.filter(function(todo) {
            return todo.completed;
        }.bind(this)).length;
    }

    getFilteredList() {
        return this.list.filter(this.state.filter);
    }

    toggleComplete(todo) {
        todo.completed = !todo.completed;
        //this.update(todo);
    }

    filterList(func) {
        setState({
            filter: func || this.state.filter
        });
    }

    editing(todo = null) {
        setState({
            editing: todo
        });
    }

    clearCompleted() {
        var todos = this.list.filter(function(todo) {
            return !todo.completed;
        }.bind(this));
        setState({
            list: todos
        });
    }

    toggleAll(isComplete = true) {
        var todos = this.list.map(function(todo) {
            todo.completed = isComplete;
            return todo;
        }.bind(this));
        setState({
            list: todos
        });
    }

    create(newTodo) {
        var completed = isPresent(newTodo.completed) ? newTodo.completed : false;
        var id = UUID();
        var todo = {
            id: id,
            name: id,
            completed: completed,
            created_at: new Date()
        };
        this.state.list.push(todo);
        this._todosObserver.next(this.state.list);
    }

    remove(todo_id) {
        //console.log('Remove todo : ', todo_id);
        //console.log('BEFORE :', JSON.stringify(this.state.list, null, 4));


        // var toBeRemoved = _.find(this.state.list, {
        //     id: todo_id
        // });
        // console.log(toBeRemoved);

        // var todos = this.state.list;
        // todos.splice(todos.indexOf(toBeRemoved), 1);

        // setTimeout(() => {
        //     this.state.list = todos;
        // }, 5000);

        _.remove(this.state.list, function(n) {
            if (n.id === todo_id) {
                //console.log('removing todo : ', todo_id);
            }
            return n.id === todo_id;
        });
        this._todosObserver.next(this.state.list);
        //console.log('AFTER :', JSON.stringify(this.state.list, null, 4));
        // var todos = this.list.filter(function(todo) { return todo.id !== todo_id; }.bind(this));
        // setState({
        //     list: todos
        // });
    }

    toggle(todo_id) {
        //console.log('Toggle id : ', todo_id);

        //console.log('COMPARE ', JSON.stringify(this.state.list, null, 4))

        var todos = this.state.list;
        _.map(this.state.list, function(n, index) {
            if (n.id === todo_id) {
                //console.log('found ! ', JSON.stringify(n, null, 4));
                todos[index].completed = !n.completed;
                //n.completed = !n.completed
            }
        });

        setState({
            list: todos
        });

        //console.log(JSON.stringify(this.state.list, null, 4));
        // var todos = this.list;
        // for (var i = 0; i < todos.length; i++) {
        //     if (todos[i].id && todos[i].id === todo_id) {
        //         todos[i].completed = !todos[i].completed;
        //         break; 
        //     }
        // }
        // setState({
        //     list: todos
        // });
    }
}

export function UUID() {
    // Otherwise, just use Math.random
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
