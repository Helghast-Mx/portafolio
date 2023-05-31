import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { Experience } from '../../interfaces/experience.interface';
import { Cursos } from '../../interfaces/cursos.interface';
import { Educacion } from '../../interfaces/educacion.interface';
import { Titles } from '../../interfaces/titles.interface';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  experience : Experience [] = []
  proyectos : any = []
  cursos : Cursos [] = []; 
  educacion! : Educacion;
  menu! : Titles;

  constructor( private CvService : CvService ) { 
    this.getExperience();
    this.getCursos();
    this.getEducacion();
    this.getMenu();
  }

  ngOnInit(): void {
    this.CvService.lenguaje$.subscribe(resp =>{
      this.getExperience();
      this.getCursos();
      this.getEducacion();
      this.getMenu();
    })
  }

  getExperience(){    
    this.CvService.getExperience()
    .subscribe(resp=>{
      this.experience = resp
      console.log('Esto es la experiencia: ', resp);
      
    })
  }

  getCursos(){
    this.CvService.getCursos()
    .subscribe(resp => {
      this.cursos = resp;
    })
  }

  getEducacion(){
    this.CvService.getEducacion()
    .subscribe(resp => {
      this.educacion = resp;
    })
  }

  getMenu(){
    this.CvService.getMenu()
    .subscribe(resp=>{
      this.menu = resp;
    })
  }

}
