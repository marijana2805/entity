import {Component, OnInit} from '@angular/core';
import {Entity} from '../mock-list';
import {EntitiesService} from '../entities.service';
import {List} from '../list';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent implements OnInit {
  entity = Entity;

  constructor(private entitiesService: EntitiesService) {
  }

  ngOnInit() {
    this.getEntities();
  }

  getEntities(): void {
    this.entitiesService.getEntity()
      .subscribe(entity => this.entity = entity);
  }

  assignCopy() {
    this.entity = Object.assign([], this.entity);
  }

  filterName(value) {
    if (!value) {
      this.assignCopy();
    }
    this.entity = Object.assign([], this.entity).filter(
      entity => entity.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  }
}
