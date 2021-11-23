import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  idiomaChange : boolean = true
  pdf:any;

  @Output() messageEvent = new EventEmitter();

  constructor( private CvService : CvService ) { }


  ngOnInit(): void {
    this.CvService.getPdf()
      .subscribe(resp=>{
        this.pdf = resp
      })
  }


  cambiarIdioma(){
    if(this.idiomaChange === false){
      this.idiomaChange = true
      this.CvService.changeLenguage = this.idiomaChange;
      this.CvService.lenguaje$.emit(this.idiomaChange)
      this.CvService.getPdf()
      .subscribe(resp=>{
        this.pdf = resp
      })
      
    } else {
      this.idiomaChange = false
      this.CvService.changeLenguage = this.idiomaChange;
      this.CvService.lenguaje$.emit(this.idiomaChange)
      this.CvService.getPdf()
      .subscribe(resp=>{
        this.pdf = resp
      })
      
      // console.log(this.CvService.changeLenguage);
    }
    
  }

}
