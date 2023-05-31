import { Component, Input, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';

import { Projects } from '../../interfaces/projects-interface';
import { Titles } from '../../interfaces/titles.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  @Input() project! : any  ;
  projects : Projects [] = []
  displayMaximizable: boolean = false
  maximixeando : boolean = false
  displayStyle = "none";
  iframe : boolean = false
  menu! : Titles

  constructor( private CvService : CvService ) { 
    this.getProjects();
    this.getMenu();
  }

  ngOnInit(): void {

    this.CvService.lenguaje$.subscribe(resp=>{
      this.getProjects();
      this.getMenu();
    })
  }

  getProjects(){
    this.CvService.getIdxProjects().subscribe(resp=>{
      console.log(resp);
      
      this.projects = resp
    })
  }

  getMenu(){
    this.CvService.getMenu().subscribe(resp=>{
      this.menu = resp
    })
  }



  onNavigate(url : any){
    console.log(url);
    
    window.open(url, "_blank");
}

}
