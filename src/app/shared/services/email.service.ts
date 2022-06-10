import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  private apiURL = 'top-secret';

  constructor(
    private https: HttpClient
  ) { }

  sendEmail(name: string, email: string, casue: string, msg: string)
  {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );

    const body = JSON.stringify({
      name: name,
      email: email,
      casue: casue,
      msg: msg
    });
 
    return this.https.post<Email>(this.apiURL, body, {headers: headers});
  }

}
