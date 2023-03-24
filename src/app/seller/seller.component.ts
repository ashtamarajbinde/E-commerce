import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from '../service/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {

showData=false

constructor(){}
ShowLogin(){
  this.showData=true
}
OpenSign(){
  this.showData=false
}
rajbinde:FormGroup=new FormGroup({
  'name':new FormControl(''),
  'pwd':new FormControl(''),
  'email':new FormControl('')
})
ashtama:FormGroup=new FormGroup({
  
  'pwd':new FormControl(''),
  'email':new FormControl('')
})

}
