import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeDetailsRoutingModule } from './episode-details-routing.module';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    EpisodeDetailsComponent,

  ],
    imports: [
        CommonModule,
        EpisodeDetailsRoutingModule,
        MatCardModule
    ]
})
export class EpisodeDetailsModule { }
