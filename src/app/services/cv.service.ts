import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { About } from '../interfaces/about.interface';
import { Experience } from '../interfaces/experience.interface';
import { Cursos } from '../interfaces/cursos.interface';
import { Educacion } from '../interfaces/educacion.interface';
import { Software } from '../interfaces/product.interface';
import { Projects } from '../interfaces/projects-interface';
import { Titles } from '../interfaces/titles.interface';
import { Contact } from '../interfaces/contact.interface';


@Injectable({
  providedIn: 'root'
})
export class CvService {

  apiUrl : string = environment.apiUrl
  apiBack : string = environment.apiBackUrl
  apiLocal : string = '../'
  changeLenguage : boolean = true

  loading : boolean = true

  lenguaje$ = new EventEmitter<boolean>();

  constructor( private http : HttpClient ) { 
    
  }

  getPdf(){
    if (!this.changeLenguage) {  
      return this.http.get(`${this.apiUrl}/en/pdf.json`)
     } else {
       return this.http.get(`${this.apiUrl}/es/pdf.json`)
      }
  }

  getImgs(){
    return this.http.get(`${this.apiUrl}/othersCv.json`)
  }


  getAbout(){
    if (!this.changeLenguage) {  
     return this.http.get<About>(`${this.apiUrl}/en/about.json`)
    } else {
      return this.http.get<About>(`${this.apiUrl}/es/about.json`)
     }
  }

  getExperience(){
    if(!this.changeLenguage){
      
      return this.http.get<Experience[]>(`${this.apiUrl}/en/experience/ProfessionalExperience.json`)
    }else {
      
      return this.http.get<Experience[]>(`${this.apiUrl}/es/experience/ProfessionalExperience.json`)
    }
  }

  getCursos(){
    if(!this.changeLenguage){
      return this.http.get<Cursos[]>(`${this.apiUrl}/en/ExpCursos.json`)
    } else{
      return this.http.get<Cursos[]>(`${this.apiUrl}/es/ExpCursos.json`)
    }
  }

  getEducacion() {
    if(!this.changeLenguage){
      return this.http.get<Educacion>(`${this.apiUrl}/en/Educacion.json`)
    } else{
      return this.http.get<Educacion>(`${this.apiUrl}/es/Educacion.json`)
    }
  }


  getSoftSkills() {
    // return this.http.get<any>(`./assets/data/products-small.json`)
    // .toPromise()
    // .then(res => <Product[]>res.data)
    // .then(data => { return data; });
    return this.http.get<Software[]>(`${this.apiUrl}/en/skills/data.json`)
}

getIdxProjects(){
  if ( !this.changeLenguage ){
    return this.http.get<Projects[]>(`${this.apiUrl}/en/projects.json`)
  } else {
    return this.http.get<Projects[]>(`${this.apiUrl}/es/projects.json`)
  }
}

sendMessage(body:any) {
  return this.http.post(`${this.apiBack}/formulario`, body);
}

getMenu(){
  if ( !this.changeLenguage ){
    return this.http.get<Titles>(`${this.apiUrl}/en/menu.json`)
  } else {
    return this.http.get<Titles>(`${this.apiUrl}/es/menu.json`)
  }
}

getContact(){
  if ( !this.changeLenguage ){
    return this.http.get<Contact>(`${this.apiUrl}/en/contact.json`)
  } else {
    return this.http.get<Contact>(`${this.apiUrl}/es/contact.json`)
  }
}

}
