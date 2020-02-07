import {Injectable} from '@angular/core';
import {List} from './list';
import {Entity} from './mock-list';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {
  private entityUrl: 'api/additem';

  constructor(private http: HttpClient) {
  }

  getEntity(): Observable<List[]> {
    return this.http.get<List[]>(this.entityUrl);
  }
}
