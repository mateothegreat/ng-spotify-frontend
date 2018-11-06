import { Component } from '@angular/core';
import { SessionService } from '../services/session.service';
import { environment } from '../../environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    public formGroup = new FormGroup({

        terms: new FormControl('', [

            Validators.required,
            Validators.minLength(2)

        ]),

        type: new FormControl('artist')

    });

    public constructor(private router: Router,
                       public sessionService: SessionService) {

    }

    public loginClick(): void {

        window.location.href = environment.API_URL + '/login';

    }

    public searchButtonClick(): void {

        this.router.navigate([`/search/${this.formGroup.controls.type.value}/${this.formGroup.controls.terms.value}`]);

    }


}
