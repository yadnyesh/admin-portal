import { Injectable }  from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable}    from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  sendCredential(username: string, password: string) {
    let url = "http://localhost:8181/token";
  }

}
