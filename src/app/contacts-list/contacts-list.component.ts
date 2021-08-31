import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {

  allContacts:any =[];

  constructor(_ContactsService:ContactsService)
  {
    _ContactsService.getAllContacts().subscribe(res =>{
        this.allContacts = res;
      })
  }

}
