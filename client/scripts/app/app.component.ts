// import {Component, OnInit} from 'angular2/core';
// import {IHero} from '../common/interfaces/ihero';
// import {HeroService} from '../common/services/hero.service';

// @Component({
//     selector: 'app',
//     styles: [require('./app.component.css')],
//     providers: [HeroService],
//     template: require('./app.component.html')
// })
// export class AppComponent implements OnInit {
//     public title = 'Tour Of Heroes';
//     public heroes;
//     public selectedHero: IHero;
//     url: string = 'https://twitter.com/AngularClass';

//     constructor(private heroService: HeroService) {

//     }

//     ngOnInit() {
//         this.getHeroes();
//     }

//     getHeroes() {
//         this.heroes = this.heroService.getHeroes();
//     }

//     onSelect(hero: IHero) {
//         this.selectedHero = hero;
//     }
// }

import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './components/home/home.component';
import {LoginComponent } from './components/login/login.component';
import {MissionComponent} from './components/mission/mission.component';
import {MissionsComponent} from './components/missions/missions.component';

// import { Login } from '../components/login/login';
// import { Missions } from '../components/missions/missions';
// import { Mission } from '../components/mission/mission';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <main>
            <router-outlet></router-outlet>
        </main>
    `
})

@RouteConfig([{
    path: '/',
    redirectTo: ['/Login'],
    name: 'root'
}, {
    path: '/home',
    name: 'Home',
    component: HomeComponent
}, {
    path: '/login',
    component: LoginComponent,
    name: 'Login'
}, {
    path: '/missions',
    name: 'Missions',
    component: MissionsComponent
}, {
    path: '/mission/:id',
    name: 'Mission',
    component: MissionComponent
}, ])

export class AppComponent {
    title: String;
    constructor() {
        this.title = 'App title';
    }
}
