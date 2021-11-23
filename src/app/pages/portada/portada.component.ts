import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  img : any;

  constructor( private CvService : CvService ) { }

  ngOnInit(): void {
  }


}
