import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {
  apiUrl: string = "https://portafolioagn.fly.dev/email"
  constructor( private http : HttpClient,) { 
    
  }
  sendContact(mensage: string,email:string){
    const body = {email, mensage}
    return this.http.post(this.apiUrl+"/email", body)
  }
}
