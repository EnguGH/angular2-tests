import {
    Component
}
from 'angular2/core';
import {
    ROUTER_DIRECTIVES
}
from 'angular2/router';

import {
    MissionCardComponent
}
from '../missionCard/missionCard.component';

@
Component({
    selector: 'missions',
    directives: [ROUTER_DIRECTIVES, MissionCardComponent],
    template: require('./missions.component.html')
})

export class MissionsComponent {
    missions: Object[] = [{
        id: '1',
        title: 'Mission 1',
        image: 'http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg'
    }, {
        id: '2',
        title: 'Mission 2',
        image: 'https://cdn.photographylife.com/wp-content/uploads/2014/06/Nikon-D810-Image-Sample-6.jpg'
    }, {
        id: '3',
        title: 'Mission 3',
        image: 'http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg'
    }];
}
