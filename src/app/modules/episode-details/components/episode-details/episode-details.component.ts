import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICharacterInterface, IResults} from "../../../episode/inerfaces";
import {CharacterService, EpisodeDetailsService} from "../../services";
import {switchAll, switchMap} from "rxjs";

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {
  CurrentEpisode: IResults;
  characters: ICharacterInterface[];
  url:string

  constructor(private activatedRoute:ActivatedRoute,private episodeDetailsService:EpisodeDetailsService,private characterService:CharacterService) {

  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.episodeDetailsService.getCurrentEpisode(id).subscribe(value=>{
      this.CurrentEpisode=value
      console.log(this.CurrentEpisode);
    }))
    // this.CurrentEpisode.characters.map(value => console.log(value))



  }

}
