import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*port class WhatsappService {
  private backendUrl = 'http://localhost:3333';  // Cambia esto a la URL de tu backend

  constructor(private http: HttpClient) { }

  iniciarWhatsapp() {
    console.log("whatsappiniciado")
    return this.http.post(`${this.backendUrl}/api/iniciarWhatsapp`, {});
  }
}*/
export class WhatsappService {
  private backendUrl = 'http://localhost:3333';

  constructor(private http: HttpClient) { }

  iniciarWhatsapp(): Observable<any> {
    return this.http.post(`${this.backendUrl}/api/iniciarWhatsapp`, {});
  }
}
