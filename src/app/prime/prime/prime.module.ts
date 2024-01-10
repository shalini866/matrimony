import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeRoutingModule } from './prime-routing.module';
import { PrimePageComponent } from './prime-page/prime-page.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    PrimePageComponent
  ],
  imports: [
    CommonModule,
    PrimeRoutingModule,
    MatMenuModule, 
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class PrimeModule { }
