import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IResults} from "../../episode/inerfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class EpisodeDetailsService {

  constructor(private httpClient:HttpClient) {

  }

  getCurrentEpisode(id: number): Observable<IResults> {
    return this.httpClient.get<IResults>(`${urls.episodes}/${id}`)
  }
}
