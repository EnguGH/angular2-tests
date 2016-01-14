/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {isPresent} from 'angular2/src/facade/lang';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import * as _ from 'lodash';
/* beautify ignore:end */

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
        }]
};

@Injectable()
export class TodoStore {
    todos$;
    public state;
    private _todosObserver;
    constructor() {
        this.state = state;
        this.todos$ = new Observable(observer =>
            this._todosObserver = observer).share();
        setTimeout(() => {
            this._todosObserver.next(this.state.list);
        }, 1000);

    }
    remove(todo_id) {
        _.remove(this.state.list, function(n) {
            return n.id === todo_id;
        });
        this._todosObserver.next(this.state.list);
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
