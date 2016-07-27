import { Component } from '@angular/core';
import {CustomersComponent} from './customer/customers.component';

@Component({

    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CustomersComponent]
})
export class AppComponent { 
    title = 'Customer App';
    name = "Dan";
    wardsColor = "blue";

    changeSuitColor()
    {
        this.wardsColor = this.wardsColor == 'red' ? 'blue' : 'red';
    }

        /*template: `
        <h1>{{title}}</h1>
        <div [style.color]="wardsColor">
        Hello {{name}}
        </div>
        <button (click)="changeSuitColor()"></button>
    `*/
}
