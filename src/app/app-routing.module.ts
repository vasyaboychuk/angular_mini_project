import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes: Routes = [
  {path:'',component:MainLayoutComponent, children: [
      {path: '', redirectTo: 'episode', pathMatch: 'full'},
      {
        path: 'episode',
        loadChildren: () => import('./modules/episode/episode.module').then(value => value.EpisodeModule)
      },
      {
        path:'episode/:id',loadChildren:()=>import('./modules/episode-details/episode-details.module').then(value => value.EpisodeDetailsModule)
      }

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
