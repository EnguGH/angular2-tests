import {
    Component
}
from 'angular2/core';
import {
    ROUTER_DIRECTIVES
}
from 'angular2/router';

@
Component({
    selector: 'missionCard',
    properties: ['id', 'title', 'image'],
    directives: [ROUTER_DIRECTIVES],
    template: require('./missionCard.component.html')

})

export class MissionCardComponent {
    id: string;
    title: string;
    image: string;
}
