import { Component, OnInit } from '@angular/core';
import {EpisodeService} from "../../services";
import {IAllData, IResults} from "../../inerfaces";


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes: IResults[];

  constructor(private episodeService:EpisodeService) {

  }

  ngOnInit(): void {
    this.episodeService.getAll().subscribe(value =>this.episodes=value.results)
  }

}
