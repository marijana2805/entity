import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {
  public saved = [];
  constructor() {
  }

  onSave(arr: any[]) {
    this.saved = arr;
  }
}
