import { Component } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

    public constructor(private sessionService: SessionService,
                       private router: Router) {

        sessionService.logout();

        router.navigate(['/home']);

    }

}
