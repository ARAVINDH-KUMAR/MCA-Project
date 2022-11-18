import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SubProjectsComponent } from './projects/sub-projects/sub-projects.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {path:'welcome', component:WelcomeComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {
    path:'projects',
   component:ProjectsComponent},
       { path:'sub-projects', component : SubProjectsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
