import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Router} from '@angular/router';
import {GvarsService} from '../G_vars/gvars.service';
import {Observable} from 'rxjs/Rx';
declare var swal: any;
@Injectable()
export class APIService {
  constructor(private http:Http,private router:Router,public Gvars:GvarsService) {}
/*=================(get)========================*/
  getFun(url,MyHeader) {
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      headers.append('Authorization','MyCookies');
      if(MyHeader.key){headers.append(MyHeader.key,MyHeader.val);}
      let FullUrl = this.Gvars.serverURL+url;
      return this.http.get(FullUrl,{headers:headers})
      .map(res =>res.json()).catch(e => this.checkToken(e));}
/*=================(post)========================*/
  postFun(url,MyHeader,data) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','MyCookies');
    if(MyHeader.key){headers.append(MyHeader.key,MyHeader.val);}
    let FullUrl = this.Gvars.serverURL+url;
    return this.http.post(FullUrl,data,{headers:headers})
    .map(res =>res.json()).catch(e => this.checkToken(e));}
/*=================(put)========================*/
  putFun(url,MyHeader,data) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','MyCookies');
    let FullUrl = this.Gvars.serverURL+url;
    return this.http.put(FullUrl,data,{headers:headers})
    .map(res =>res.json()).catch(e => this.checkToken(e));}
/*=================(delete)========================*/
  deleteFun(url,MyHeader) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','MyCookies');
    let FullUrl = this.Gvars.serverURL+url;
    return this.http.delete(FullUrl,{headers:headers})
    .map(res =>res.json()).catch(e => this.checkToken(e));}

/*==========================================================*/
  checkToken(res){
    if(res.status === 401){
      //this.Auth._S.logout();
      console.log(res.status +' catch Unauthorized Http Error ');
      return Observable.throw('Unauthorized');
    }else{ console.log(res.status +' catch Http Error ');} }
/*==============================================================*/
}
