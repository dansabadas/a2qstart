import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import 'rxjs/Rx';   // get everything from Rx
//import 'rxjs/add/operators/map'; //importing the map method
import {CustomersComponent} from './customer/customers.component';

@Component({

    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CustomersComponent],
    providers: [HTTP_PROVIDERS]
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
