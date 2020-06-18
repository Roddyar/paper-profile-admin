import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})

export class LandingComponent implements OnInit {
    focus: any;
    focus1: any;
    customOptions: OwlOptions = {
        autoplay: true,
        center: true,
        autoHeight: true,
        autoWidth: true,
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            740: {
                items: 3
            },
            940: {
                items: 4
            }
        },
        nav: true
    }

    constructor() {
    }

    ngOnInit() {
    }

    goToLink(url: string){
        window.open(url, "_blank");
    }

}
