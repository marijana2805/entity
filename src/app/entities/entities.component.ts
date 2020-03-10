import {Component, OnInit} from '@angular/core';
import {Entity} from '../mock-list';
import {EntitiesService} from '../entities.service';
import {MatListOption} from '@angular/material';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent implements OnInit {
  entity = Entity;
  searchName: string;
  newArr: any;
  selected: boolean;

  constructor(private entitiesService: EntitiesService) {
  }

  ngOnInit() {
  }

  onSave(opt: MatListOption[]) {
    this.newArr = opt.map(o => o.value);
    this.entitiesService.onSave(this.newArr);
  }
}
