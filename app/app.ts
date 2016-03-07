import {Component, Directive} from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup} from 'angular2/common';
import {DemoForm} from './app.myform'

@Component({
    selector: 'my-app',
    directives: [DemoForm],
    template: `
        <h1>My First Angular 2 App</h1>
        <div class="container">
            <my-form>My Form Component</my-form>
        </div>
    `

})
export class AppComponent {
    constructor() {
        console.log("AppComponent")
    }

}