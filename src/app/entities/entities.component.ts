import { Component, OnInit } from '@angular/core';
import {Entity} from '../mock-list';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent implements OnInit {
  entity = Entity;
  constructor() { }

  ngOnInit() {
  }

}
