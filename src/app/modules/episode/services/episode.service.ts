import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../configs";
import {IAllData, ICharacterInterface} from "../inerfaces";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) {

  }

  getAll(page = 1): Observable<IAllData> {
    return this.httpClient.get<IAllData>(urls.episodes, {params:{page}})
  }


}



