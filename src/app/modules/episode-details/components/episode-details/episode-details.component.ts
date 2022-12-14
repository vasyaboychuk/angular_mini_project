import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {lastValueFrom} from "rxjs";

import {ICharacterInterface, IResults} from "../../../episode/inerfaces";
import {CharacterService, EpisodeDetailsService} from "../../services";

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {
  currentEpisode: IResults;
  characters: ICharacterInterface[];


  constructor(private activatedRoute:ActivatedRoute,private episodeDetailsService:EpisodeDetailsService,private characterService:CharacterService) {

  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async({id}) => {
      this.currentEpisode  = await lastValueFrom(this.episodeDetailsService.getCurrentEpisode(id));
      this.characters = await Promise.all(this.currentEpisode.characters.map(url =>
        lastValueFrom(this.characterService.getCharacter(url))
      ));
      console.log( this.characters);
    })}
}







