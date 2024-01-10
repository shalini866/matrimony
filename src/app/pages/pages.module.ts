import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { IndexComponent } from './index/index.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatchesComponent } from './matches/matches.component';
import {MatCardModule} from '@angular/material/card';
import { MatchCardComponent } from './match-card/match-card.component';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    IndexComponent,
    MatchesComponent,
    MatchCardComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatMenuModule, 
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class PagesModule { }
