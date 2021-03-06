import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { RendersComponent } from './renders/renders.component';
import { CvComponent } from './cv/cv.component';
import { EducationComponent } from './education/education.component';
import { ReformasComponent } from './reformas/reformas.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AbotuComponent } from './abotu/abotu.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ExperienceComponent } from './experience/experience.component';
import { NavbarrouterlinkComponent } from './navbarrouterlink/navbarrouterlink.component';
import { HomeComponent } from './home/home.component';


import { BuildingsComponent } from './buildings/buildings.component';

const routes: Routes = [
 
  {path: 'Home', component:HomeComponent,
  children:[
    {
      path: 'Renders',
      component: RendersComponent,
      outlet: 'liz'
    },
  
  {
    path: 'Autocad',
    component: BuildingsComponent,
    outlet: 'liz'
  },
   
  {
    path: 'Reformas',
    component: ReformasComponent,
    outlet: 'liz'
  },
    {
      path: 'Revit',
      component: DocumentacionComponent,
      outlet: 'liz'
    }
  ]
},
  {path:'', redirectTo:'/Home',pathMatch: 'full' },
  {path:'Portfolio', 
   component: PortfolioComponent,
   children:[
    
   ]
  
  },



  {path:'NavBarRl', component: NavbarrouterlinkComponent},

  { path:'Cv', component:CvComponent },
  { path:'Welcome', component:WelcomeComponent },
  { path:'Education', component:EducationComponent },
  { path:'About', component:AboutmeComponent},
  { path:'Navbar', component:NavbarComponent},  
  { path:'AboutUs', component:AbotuComponent},  
  { path:'Contact', component:ContactComponent}, 
  { path:'Skills', component:SkillsComponent},   
  { path:'Profiles', component:ProfilesComponent},   
  { path:'Experience', component:ExperienceComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
