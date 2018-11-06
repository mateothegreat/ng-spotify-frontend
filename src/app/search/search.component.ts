import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {

    public searchType: string;
    public searchResults: any[];
    public searchTerms: string;

    public constructor(private route: ActivatedRoute,
                       private spotifyService: SpotifyService) {

        route.params.subscribe((params: any) => {

            this.searchType = params.type;
            this.searchTerms = params.terms;

            spotifyService.search(params.type, params.terms).subscribe((results: any) => {

                console.log(results);

                this.searchResults = results;

            });

        });

    }

}
