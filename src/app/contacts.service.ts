import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
 
  constructor(private http: HttpClient){ }

  getAllContacts():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

}
