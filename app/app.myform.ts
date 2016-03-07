import {Component, Directive} from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators ,AbstractControl} from 'angular2/common';

function ageValidator(control: Control): {[string]: boolean} {
    if(typeof control.value != "number" && control.value < 18) {
        return {
            invalidAge: true
        }
    };
}

@Component({
    selector: "my-form",
    directives: [FORM_DIRECTIVES],
    template: `
        <form [ngFormModel]="myForm"
        (ngSubmit)="onSubmit(myForm.value)">

            <p>
                Nome <input type="text" [ngFormControl]="myForm.controls['firstName']" placeholder="Inserisci il nome" />
                <span *ngIf="!myForm.find('firstName').valid && myForm.find('firstName').touched"> is required!</span>
            </p>
            <p>
                Cognome <input type="text" [ngFormControl]="myForm.controls['lastName']" placeholder="Inserisci il cognome" />
            </p>
            <p>
                Età <input type="text" [ngFormControl]="myForm.controls['age']" placeholder="Inserisci la tua età"/>
                <span *ngIf="myForm.find('age').hasError('invalidAge') && !myForm.find('age').hasError('required')">devi essere maggiorenne</span>
                <span *ngIf="myForm.find('age').hasError('required')">inserisci un età</span>
            </p>

            <p *ngIf="!myForm.valid">
                Form not valid!
            </p>
            <!--<p *ngIf="myForm.valid">-->
                <button type="submit">Invia</button>
            <!--</p>-->

        </form>
    `
})
export class DemoForm {
    myForm: ControlGroup;

    constructor(fb: FormBuilder) {

        this.myForm = <ControlGroup>fb.group({
            "firstName": ["", Validators.required],
            "lastName": ["Cognome"],
            "age": [16, Validators.compose([Validators.required, ageValidator])]
        });

        this.myForm.find("age").valueChanges.subscribe((value: string) => {
            console.log("you changed the age, so the form changed to ", this.myForm.value)
        });

    }

    onSubmit(form: any): void {
        if(this.myForm.valid) {
            console.log("Form submitted: ");
            console.log(form);
        } else {
            console.log("Form not valid");
        }

    }

}