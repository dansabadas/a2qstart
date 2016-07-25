import { Component } from '@angular/core';
import {CustomerComponent} from './customer/customer.component'
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CustomerComponent]
})
export class AppComponent { 
    title = 'Customer App';
    name = "Dan";
    wardsColor = "blue";
    customers = [
        {id: 1, name: 'Ward'},
        {id: 2, name: 'Dan'}
    ];

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
