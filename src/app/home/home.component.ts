import {Component, OnInit} from '@angular/core';
import {EntitiesService} from '../entities.service';
import {List} from '../list';
import {ConnectService} from '../connect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedList: List[] = [];

  public constructor(private entitiesService: EntitiesService,
                     private connectService: ConnectService) {
  }

  ngOnInit() {
    this.getConnected();
  }

  getConnected(): void {
    this.connectService.getChecked().subscribe(selectedList => this.selectedList = selectedList);
  }
}
