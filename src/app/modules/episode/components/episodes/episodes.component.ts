import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {IAllData, IResults} from "../../inerfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit ,AfterViewInit{
  episodes: IResults[];
  totalItem:number

  @ViewChild(MatPaginator)
  paginator:MatPaginator



  constructor(private activatedRoute: ActivatedRoute,private router:Router) {
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((page)=>
    this.router.navigate([],{queryParams:{page:page.pageIndex+1}})
    )
  }

  ngOnInit(): void {
   this.activatedRoute.data.pipe(
     map(value => value['data']as IAllData)
   ).subscribe(value =>{
     this.totalItem=value.info.pages
     this.episodes=value.results
   })
  }

}
