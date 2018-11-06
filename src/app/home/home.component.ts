import { Component } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    public constructor(public sessionService: SessionService) {

    }

}
