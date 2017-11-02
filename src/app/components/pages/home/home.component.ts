import { Component, OnInit,HostBinding } from '@angular/core';
import { APIService } from '../../../services/SimpleAPI/api.service';
declare var swal: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  HeaderKey:string;
  HeaderVal:string;
  constructor(public API:APIService) {

  }

  ngOnInit() { }

  SendGetReq(){
    let myheader = {key:this.HeaderKey,val:this.HeaderVal};
    this.API.getFun('/anyUrl',myheader).subscribe(res => {
      console.log(res)
    });
  }
  SendPostReq(){
    let myheader = {key:this.HeaderKey,val:this.HeaderVal};
    this.API.postFun('/anyUrl',myheader,{}).subscribe(res => {
      console.log(res)
    });
  }
}
