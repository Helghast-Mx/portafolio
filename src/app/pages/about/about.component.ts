import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { About } from '../../interfaces/about.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutData! : About 
  cargada : boolean = false
  idioma! : Observable <boolean>
  img :any;
  edad : number | any;


  constructor( private CvService : CvService ) {

    this.getDatosabout()
    
    }

  ngOnInit(): void {
    this.CvService.lenguaje$.subscribe( lenguaje => {
      this.getDatosabout()
    } )
    this.calculateAge()
  }

  getDatosabout(){

    this.CvService.getAbout()
    .subscribe(resp=>{
       this.aboutData = resp
       this.cargada = true
       
      })

    this.CvService.getImgs()
    .subscribe( resp =>{
      this.img = resp
    } )
    
  }

  calculateAge() {
    let hoy = new Date()
    let fechaNacimiento = 1992
    this.edad = hoy.getFullYear() - fechaNacimiento
    console.log(this.edad);
    
  } 


}
