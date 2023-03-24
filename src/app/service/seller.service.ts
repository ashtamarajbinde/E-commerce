import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  // isSellerloggdin = new BehaviorSubject<boolean>(false)

  // constructor(private http:HttpClient, private router: Router) { }
  // userSign(data: SignUp) {
  //   this.http.post("http://localhost:3000/seller", data{ observe: 'response' }), subscribe((res) =>){
  //     this.isSellerloggdin.next(true);
  //     localStorage.setItem('seller', JSON.stringify(res.body))
  //     this.router.navigate(['seller-home']);
  //   }
  // }
  // reloadSeller() {
  //   if (localStorage.getItem('seller')) {
  //     this.isSellerloggdin.next(true);
  //     this.router.navigate(['seller-home'])
  //   }
  // }
  // userLogin(data:any){
  //   this.http.get(`http://localhost:3000/seller?Email=${data.Email}&Password=${data.Password}`,{observe:'response'})
  // console.log(res)

  // if(res && res.body && resizeBy.body.length){
  //   alert('login successfully...!')
  //   localStorage.setItem('seller',JSON.stringify(res.body))
  //   this.router.navigate(['seller-home']);
  // }
  // else{
  //   alert('login failed')
  // }
  // }

}
