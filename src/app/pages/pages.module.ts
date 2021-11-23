import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';;

import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {KnobModule} from 'primeng/knob';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { PortadaComponent } from './portada/portada.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';






@NgModule({
  declarations: [
    MainComponent,
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
