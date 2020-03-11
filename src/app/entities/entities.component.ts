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
  private selectedListId: any;

  constructor(private entitiesService: EntitiesService) {
  }

  ngOnInit() {
    this.entity.map(x => x.selected = false);
    if (this.entitiesService.saved.length > 0) {
      this.selectedListId = this.entitiesService.saved.map(x => x.id); // izvuci id-ove cekiranih iz niza saved
      this.entity.filter(x => this.selectedListId.includes(x.id)).map(x => x.selected = true);
      // ?! id iz entiteta koji se poklapa sa id iz selectedListId
      // provjerava da li je id iz entitteta 'ukljucen' u  selectedListId
    }
  }

  onSave(opt: MatListOption[]) {
    this.newArr = opt.map(o => o.value);
    this.entitiesService.onSave(this.newArr);
  }
}
