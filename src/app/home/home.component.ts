import {Component, OnInit} from '@angular/core';
import {EntitiesService} from '../entities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private selectedList: any;

  public constructor(private entitiesService: EntitiesService) {
  }

  ngOnInit() {
    this.selectedList = this.entitiesService.saved;
    console.log(this.selectedList);
  }
}
