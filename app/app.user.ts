import {Component, Directive} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: "user",
    template: `
        <ul>
            <li *ngFor="#user of users">
                <span>{{user.name}}</span>
                ->
                <span>{{user.email}}</span>
            </li>
        </ul>
    `
})
export class User {

    public users = null;

    constructor(http: Http) {

        http.get('http://localhost:1337/user/getUsers')
            // Subscribe to the observable to get the parsed people object and attach it to the
            // component
            .subscribe(people => {
                this.users = people.json();
                //console.log(people.json());
            });

    }

}