import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {IAllData} from "../../inerfaces";
import {EpisodeService} from "../episode.service";

@Injectable({
  providedIn: 'root'
})
export class EpisodesResolver implements Resolve<IAllData> {

  constructor(private episodeService:EpisodeService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAllData> {
    const page = route.queryParams['page'];
  return this.episodeService.getAll(page)
  }
}
