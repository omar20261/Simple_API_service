import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
/*==================Components=========================*/
      /*---------pages-------*/
import { HomeComponent } from './components/pages/home/home.component';
       /*-------system-------*/
/*========================--Services--================================================*/
/*======--- MyServices ----=====*/
import { GvarsService } from './services/G_vars/gvars.service';
import { APIService } from './services/SimpleAPI/api.service';
/*======-----------------=====*/
import {RouterModule,Routes} from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination';
/*-=============================--Guards--===========================*/
/*-=============================--Routes--===========================*/
const appRoutes : Routes = [
];
/*=========================================================*/
@NgModule({
  declarations: [
    AppComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Ng2PaginationModule,
  ],
  providers: [APIService,GvarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
