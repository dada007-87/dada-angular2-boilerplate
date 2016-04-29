import {Component, Directive} from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup} from 'angular2/common';
import {DemoForm} from './app.myform';
import {User} from './app.user';

@Component({
    selector: 'my-app',
    directives: [DemoForm, User],
    template: `
        <h1>Angular 2 App</h1>
        <div class="container">
            <my-form>My Form Component</my-form>
            <user></user>
        </div>
    `

})
export class AppComponent {
    constructor() {
        console.log("AppComponent")
    }
}