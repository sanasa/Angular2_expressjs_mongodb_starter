import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/services/data.service';
//import { ICustomer } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'customers',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
    
    users: UserComponent[] = [];
    editId: number = 0;
    errorMessage: string;

    constructor(private dataService: DataService) {  }

    ngOnInit() { 
        this.dataService.getCustomersSummary()
            .subscribe((data: UserComponent[]) => this.users = data);
    }

}