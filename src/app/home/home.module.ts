import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DogCardComponent } from './components/dog-card/dog-card.component';
import { MatCardModule } from '@angular/material/card'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    DogCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    HttpClientModule
  ]
})
export class HomeModule { }
