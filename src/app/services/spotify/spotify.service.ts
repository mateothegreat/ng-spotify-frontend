import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SessionService } from '../session.service';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    public constructor(private httpClient: HttpClient,
                       private sessionService: SessionService) {

    }

    public search(type: string, terms: string): Observable<any> {

        let subject: Subject<any> = new Subject();

        this.httpClient.get(`${environment.API_URL}/search?type=${type}&terms=${terms}&access_token=${this.sessionService.getAccessToken()}`).subscribe((results: any) => {

            if (results.error) {

                this.sessionService.logout();

            } else {

                subject.next(results);

            }

        });

        return subject;

    }

}
