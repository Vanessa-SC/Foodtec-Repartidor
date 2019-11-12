import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  idUsuario:string;


  //httpConexion = "https://itd-foodtec.000webhostapp.com/foodtec/";
  httpConexion = "http://127.0.0.1:8000/";
  constructor(public storage: Storage,public http:HttpClient) { 

  }

  login( contra:string, correo:string){
   
    var url = this.httpConexion + 'loginR/'+correo+'/'+contra;
    return new Promise((resolve, reject) => {
     this.http.get(url)
        .subscribe(data => {
          resolve(data);
         }, (err) =>{
           reject(err);    
         });
    });
   }
  }