import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown routes
];
