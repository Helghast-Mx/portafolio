import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  flag : boolean = false;
  mobileBotton = false
  cargada = false;

  constructor( public CvService: CvService ) {
    this.cargada = this.CvService.loading
    // console.log(this.cargada);
    
   }

  ngOnInit(): void {
    // Detectar el lenguaje del navegador
    // let lenguaje = window.navigator.language
    // const cortadoLen = lenguaje.substring(0,2)
    // console.log('cortado en:', cortadoLen);
    
    
  }

//   onResize(event : any) {
    
    
//     const innerWidth = event.target.innerWidth;
//     console.log(innerWidth);
 
//      if (innerWidth < 992) {
//         this.mobileBotton = false
//         this.flag = true
//      } else {
//        this.flag = false
//        this.mobileBotton = true
//      }
//  }

}
