import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';
import { EntitiesComponent } from './entities/entities.component';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule, MatTreeModule
} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { HomeComponent } from './home/home.component';
import { EntitiesService} from './entities.service';

@NgModule({
  declarations: [
    AppComponent,
    EntitiesComponent,
    FilterPipe,
    HomeComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatCheckboxModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatButtonModule,
        MatTreeModule,
    ],
  providers: [EntitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
