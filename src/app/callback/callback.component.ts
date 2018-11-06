import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
    selector: 'app-callback',
    templateUrl: './callback.component.html',
    styleUrls: ['./callback.component.scss']
})
export class CallbackComponent {

    public constructor(private route: ActivatedRoute,
                       private router: Router,
                       private sessionService: SessionService) {

        route.queryParams.subscribe((params: any) => {

            console.log(params);

            sessionService.save(params);

            router.navigate(['/home']);

        });

    }

}
