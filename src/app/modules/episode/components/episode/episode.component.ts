import {Component, Input, OnInit} from '@angular/core';
import {IAllData, IResults} from "../../inerfaces";


@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  @Input()
  episode:IResults;

  constructor() {
  }

  ngOnInit(): void {
  }

  details() {


  }
}
