import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DisplayContentComponent } from './display-content/display-content.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import {GalleriaModule} from 'primeng/galleria';
import { FooterComponent } from './footer/footer.component';
import {SplitterModule} from 'primeng/splitter';
import {GMapModule} from 'primeng/gmap';
import {CardModule} from 'primeng/card';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { WelcomeComponent } from './welcome/welcome.component';
import { SubProjectsComponent } from './projects/sub-projects/sub-projects.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayContentComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    WelcomeComponent,
    SubProjectsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    GalleriaModule,
    SplitterModule,
    GMapModule,
    CardModule,InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
