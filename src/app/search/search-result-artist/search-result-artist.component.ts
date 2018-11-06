import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-result-artist',
    templateUrl: './search-result-artist.component.html',
    styleUrls: ['./search-result-artist.component.scss']
})
export class SearchResultArtistComponent implements OnInit {

    @Input() public artist: any;

    public constructor() {

    }

    public ngOnInit(): void {

        console.log(this.artist);

    }

}
