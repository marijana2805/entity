import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntitiesComponent} from './entities/entities.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'additem', component: EntitiesComponent},
  {path: 'home', component: HomeComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: [],
})
export class AppRoutingModule { }
