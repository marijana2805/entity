import {Component, OnInit} from '@angular/core';
import {EntitiesService} from '../entities.service';
import {MatListOption} from '@angular/material';
import {List} from '../list';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent implements OnInit {
  entity: List[];
  searchName: string;
  newArr: any;
  selectedListId: any;

  constructor(private entitiesService: EntitiesService) {
  }

  ngOnInit() {
    this.getEntity();
    // console.log(this.entity);
    /* this.entity.map(x => x.selected = false);
     if (this.entitiesService.saved.length > 0) {
       this.selectedListId = this.entitiesService.saved.map(x => x.id); // izvuci id-ove cekiranih iz niza saved
       this.entity.filter(x => this.selectedListId.includes(x.id)).map(x => x.selected = true);
       // provjerava da li je id iz entitteta 'ukljucen' u  selectedListId
       // ?! id iz entiteta koji se poklapa sa id iz selectedListId
     } */
    // console.log(this.entitiesService.saved.map(x => x.id)); radi
  }

  getEntity(): void {
    this.entitiesService.getList().subscribe(entity => this.entity = entity);
  }

  onSave(opt: MatListOption[]) {
    this.entity.map(x => x.selected = false);
    this.selectedListId = opt.map(x => x.value.id);
    this.entity.filter(x => this.selectedListId.includes(x.id)).map(x => x.selected = true);
    this.entity.map(x => this.entitiesService.updateSelected(x));
  }
}
