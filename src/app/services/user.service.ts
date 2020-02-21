import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverUrl: any = "http://localhost:8080/user/";
  userEndpoint: any = "user";

  constructor(
    private httpCllient: HttpClient
  ) { }
  
  getUser(id): Observable<any> {
    var parameters = "id=" + id;
    var url = this.serverUrl + this.userEndpoint + "?" + parameters;

    return this.httpCllient.get(url);
  }
}
