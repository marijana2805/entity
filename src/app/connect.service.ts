import {Injectable} from '@angular/core';
import {List} from './list';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  entity: List[];

  constructor(private http: HttpClient) {
  }

  getChecked(): Observable<List[]> {
    return this.http.get<List[]>(`http://localhost:3000/entity?selected=true`);
  }
}
