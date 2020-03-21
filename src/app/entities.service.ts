import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {List} from './list';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {
  public saved = [];

  constructor(private http: HttpClient) {
  }

  url = 'http://localhost:3000/entity';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getList(): Observable<List[]> {
    return this.http.get<List[]>(this.url);
  }

  updateSelected(selectedEntity: List) {
    const entityUrl = `${this.url}/${selectedEntity.id}`;
    return this.http.put(entityUrl, selectedEntity, this.httpOptions).subscribe({
      next() {
      },
      error() {
      },
      complete() {
      }
    });
  }
}
