import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntitiesComponent} from './entities/entities.component';

const routes: Routes = [
  {path: 'additem', component: EntitiesComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: [],
})
export class AppRoutingModule { }
