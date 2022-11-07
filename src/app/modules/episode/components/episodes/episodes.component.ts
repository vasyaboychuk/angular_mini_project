import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {map} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";

import {IAllData, IResults} from "../../inerfaces";


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
     this.totalItem=value.info.count
     this.episodes=value.results
   })
  }

}
