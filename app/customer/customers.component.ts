import { Component, OnInit } from '@angular/core';
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
    customers: any[];

    constructor(private _customerService: CustomerService){

    }

    ngOnInit(){
        this.customers = this._customerService.getCustomers();
    }
}