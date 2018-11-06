import { Component } from '@angular/core';
import { SessionService } from '../services/session.service';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    public constructor(public sessionService: SessionService) {

    }

    public loginClick(): void {

        window.location.href = environment.API_URL + '/login';

    }

}
