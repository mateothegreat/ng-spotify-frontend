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
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { LogoutComponent } from './logout/logout.component';
import { GravatarModule } from 'ngx-gravatar';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchResultArtistComponent } from './search/search-result-artist/search-result-artist.component';
import { SearchResultAlbumComponent } from './search/search-result-album/search-result-album.component';
import { SearchResultTrackComponent } from './search/search-result-track/search-result-track.component';

@NgModule({

    //
    // These are loaded Components
    //
    declarations: [

        AppComponent,
        AboutComponent,
        CarouselComponent,
        CarouselCardComponent,
        SearchComponent,
        TrackListComponent,
        ThermometerComponent,
        HeaderComponent,
        HomeComponent,
        CallbackComponent,
        LogoutComponent,
        SearchResultArtistComponent,
        SearchResultAlbumComponent,
        SearchResultTrackComponent

    ],

    //
    // Tells angular what modules to load when the app starts
    //
    imports: [

        BrowserModule,          // Base module needed for any angular app
        GravatarModule,         // Simple gravatar image loader
        HttpClientModule,       // Enables making http requests with the HttpClient service
        NgbModule,
        NgbDropdownModule,
        ReactiveFormsModule,    // Enables using form bindings

        //
        // Binds/maps URLs aka "routes" to Components
        //
        RouterModule.forRoot([

            {

                path: 'home',
                component: HomeComponent

            }, {

                path: 'callback',
                component: CallbackComponent

            }, {

                path: 'about',
                component: AboutComponent

            }, {

                path: 'search/:type/:terms',
                component: SearchComponent

            }, {

                path: 'search',
                component: SearchComponent

            }, {

                path: 'logout',
                component: LogoutComponent

            }, {

                path: '',
                pathMatch: 'full',
                redirectTo: 'home'

            }

        ])

    ],

    //
    // Tells angular which classes are "Services" only available in the current scope vs. globally
    //
    providers: [],

    //
    // Main "entry point" component aka "bootstraps the app"
    //
    bootstrap: [AppComponent]

})
export class AppModule {
}
