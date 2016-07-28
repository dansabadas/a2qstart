import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {CustomerComponent} from './customer.component'
import {CustomerService} from './customer.service'
////used for  moduleId: __moduleName,
@Component({
   
    selector: 'app-customers',
    templateUrl: 'app/customer/customers.component.html',
    directives: [CustomerComponent],
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit { 
    //customers: Observable<any[]>;
    //customers: Promise<any[]>;
    customers: any[];

    constructor(private _customerService: CustomerService){

    }

    ngOnInit(){
        
        this._customerService.getCustomers()
        .then((customers) => this.customers = customers)
        .catch((err) => {
            console.log(err);
        });

        //promises-observables
        // this.customers = this._customerService.getCustomers()
        // .catch((err) => {
        //     console.log(err);
        //     // return Observable.of([true]);    // this mandatory only for
        //     // rx observables, not promises
        // });
    }
}