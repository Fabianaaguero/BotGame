import { Component } from '@angular/core';
import { WhatsappService } from 'src/app/whatsapp.service'  // Ajusta la ruta según la ubicación de tu servicio

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  
  constructor(private whatsappService: WhatsappService) { }

  iniciarWhatsapp() {
    this.whatsappService.iniciarWhatsapp().subscribe(
      (response: any) => {
        console.log('Respuesta del backend:', response);
      },
      (error: any) => {
        console.error('Error del backend:', error);
      }
    );
  }
}
