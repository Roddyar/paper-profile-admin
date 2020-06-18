import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {ExamplesModule} from './pages/examples.module';
import {CarouselModule} from "ngx-owl-carousel-o";


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        ExamplesModule,
        AppRoutingModule,
        CarouselModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
