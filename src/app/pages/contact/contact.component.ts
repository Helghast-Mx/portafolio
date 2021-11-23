import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'
import { CvService } from '../../services/cv.service';
import { Contact } from '../../interfaces/contact.interface';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact!: Contact;

  formContact : FormGroup = this.fb.group({
    name : ['' , [Validators.required]],
    email : ['' , [Validators.required, Validators.email]],
    subject : ['' , [Validators.required]],
    message : ['' , [Validators.required]],    
  })

  constructor( private fb : FormBuilder,
               private CvService: CvService ) { 
      this.getContact()
               }

  ngOnInit(): void {
    this.CvService.lenguaje$.subscribe( resp =>{
      this.getContact()

    })

  }

  getContact(){
    this.CvService.getContact()
    .subscribe(resp=>{
      this.contact = resp;
    })
  }
  
  contactForm(){
     this.CvService.sendMessage(this.formContact.value).subscribe( () =>{
       try {
         Swal.fire("Formulario", "Mensaje Enviado", 'success')
         
       } catch (err) {
        Swal.fire("Formulario", "El  mensaje no pudo ser enviado", 'error')
       }
     })
  }

}
