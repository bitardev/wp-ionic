import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from '../../environement';

/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuotesProvider {
  api_url = environement.site_url+environement.quotes_url;

  constructor(public http: HttpClient) {
    console.log('Hello QuotesProvider Provider');
  }

  getQuotes() {
    return this.http.get(this.api_url);
  }
  postQuote(content,auteur){
    let data = {
      title: content,
      quote: content,
      auteur: auteur,
      status: "publish"
    };
    // console.log(data);
    let token = JSON.parse(localStorage.getItem("wpIonicToken")).token;
    // console.log(token);
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    });
    
    return this.http.post(this.api_url, data, {headers: headers});
  }

  putQuote(id,content,auteur){
    let data = {
      title: content,
      quote: content,
      auteur: auteur,
      status: "publish"
    };
    // console.log(data);
    let token = JSON.parse(localStorage.getItem("wpIonicToken")).token;
    // console.log(token);
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    });
    
    return this.http.put(this.api_url+"/"+id, data, {headers: headers});
  }

  deleteQuote(id){
    let token = JSON.parse(localStorage.getItem("wpIonicToken")).token;
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    });    
    return this.http.delete(this.api_url+"/"+id, {headers: headers});
  }


}
