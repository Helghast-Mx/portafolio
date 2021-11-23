import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';;


import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';

import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {KnobModule} from 'primeng/knob';


import { SharedModule } from '../shared/shared.module';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { PortadaComponent } from './portada/portada.component';
import { ResumeComponent } from './resume/resume.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    SkillsComponent,
    AboutComponent,
    PortadaComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgbModule,
    ButtonModule,
    CarouselModule,
    CardModule,
    DialogModule,
    DividerModule,
    FormsModule,
    ReactiveFormsModule,
    KnobModule
    
  ]
})
export class PagesModule { }
