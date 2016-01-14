import {
	Component
}
from 'angular2/core';
import { RouterLink, RouteParams } from 'angular2/router';

@Component({
	selector: 'mission',
	directives: [RouterLink],
	template: `
		<a [routerLink]="['/Missions']">Back</a> <br/>
		This is mission {{id}}
	`
})

export class MissionComponent {
	id: string;
	routeParam: RouteParams;
	constructor(private routeParams: RouteParams) {
		this.id = this.routeParams.get('id');
	}
}