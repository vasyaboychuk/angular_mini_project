import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICharacterInterface} from "../../episode/inerfaces";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) {

  }
  getCharacter(url:string):Observable<ICharacterInterface>{
    return this.httpClient.get<ICharacterInterface>(url)
  }
}
