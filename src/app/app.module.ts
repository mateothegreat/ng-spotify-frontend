import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';
import { SearchComponent } from './search/search.component';
import { TrackListComponent } from './track-list/track-list.component';
import { ThermometerComponent } from './thermometer/thermometer.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({

    declarations: [

        AppComponent,
        AboutComponent,
        CarouselComponent,
        CarouselCardComponent,
        SearchComponent,
        TrackListComponent,
        ThermometerComponent,
        HeaderComponent,
        HomeComponent

    ],
    imports: [

        BrowserModule,
        NgbModule,

        RouterModule.forRoot([

            {

                path: 'home',
                component: HomeComponent

            }, {

                path: 'about',
                component: AboutComponent

            }, {

                path: 'search',
                component: SearchComponent

            }, {

                path: '',
                pathMatch: 'full',
                redirectTo: 'home'

            }

        ])

    ],

    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule {
}
