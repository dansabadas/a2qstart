import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
    /*template: `
        <h1>{{title}}</h1>
        <div [style.color]="wardsColor">
        Hello {{name}}
        </div>
        <button (click)="changeSuitColor()"></button>
    `*/
})
export class AppComponent { 
    title = 'Customer App';
    name = "Dan";
    wardsColor = "blue";

    changeSuitColor()
    {
        this.wardsColor = this.wardsColor == 'red' ? 'blue' : 'red';
    }
}
