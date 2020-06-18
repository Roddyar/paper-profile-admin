import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LandingComponent} from './landing/landing.component';
import {ProfileComponent} from './profile/profile.component';
import {CarouselModule} from "ngx-owl-carousel-o";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        CarouselModule,
    ],
    declarations: [
        LandingComponent,
        ProfileComponent
    ]
})
export class ExamplesModule {
}
