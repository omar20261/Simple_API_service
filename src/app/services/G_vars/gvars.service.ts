import { Injectable } from '@angular/core';

@Injectable()
export class GvarsService {
  G_IsRunning:boolean ;
  serverURL:string = 'http://localhost:4200';
  constructor() { }

}
