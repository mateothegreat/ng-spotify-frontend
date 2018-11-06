import { Injectable } from '@angular/core';
import { Session } from './session';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    public session: Session;

    public constructor() {

        this.loadFromStorage();

    }

    private loadFromStorage(): void {

        const session = localStorage.getItem('session');

        if (session) {

            this.session = new Session(JSON.parse(session));

        } else {

            this.session = null;

        }

    }

    public save(sessionObj: any): void {

        localStorage.setItem('session', JSON.stringify(sessionObj));

        this.session = new Session(sessionObj);

    }

    public logout(): void {

        localStorage.removeItem('session');

        this.session = null;

    }

}
