import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../../recipes/shared/recipe.model';

@Injectable()
export class SubscriptionService {

    private _appUrl = 'http://localhost:4200/API';

    constructor(private _http: Http, private _auth: AuthenticationService) { }

    subscribeTo(user): Observable<string> {
        return this._http.post(`${this._appUrl}/subscribe`, { user: user }, {
            headers: new Headers({ Authorization: `Bearer ${this._auth.token}` })
        }).map(res => res.json());
    }

    unsubscribeFrom(user): Observable<string> {
        return this._http.post(`${this._appUrl}/unsubscribe`, { user: user }, {
            headers: new Headers({ Authorization: `Bearer ${this._auth.token}` })
        }).map(res => res.json());
    }

    isSubscribedto(user): Observable<boolean> {
        return this._http.post(`${this._appUrl}/checkSubscription`, { user: user }, {
            headers: new Headers({ Authorization: `Bearer ${this._auth.token}` })
        }).map(res => res.json()).map(item => {
            return (item.result === 'subscribed');
        });
    }

    getUsername(user): Observable<string> {
        return this._http.post(`${this._appUrl}/getUsername`, { user: user }, {
            headers: new Headers({ Authorization: `Bearer ${this._auth.token}` })
        }).map(res => res.json()).map(item => item.username);
    }
}
