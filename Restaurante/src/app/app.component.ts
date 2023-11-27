import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tiempoFinal: Date;
  tiempoRestante: string;
  intervalId: number | null = null;

  constructor() {
    // Inicializar la fecha final y el tiempo restante
    this.tiempoFinal = new Date();
    this.tiempoFinal.setDate(this.tiempoFinal.getDate() + 15);
    this.tiempoRestante = 'Calculando...';
  }

  ngOnInit() {
    this.actualizarContador();
  }

  actualizarContador() {
    this.intervalId = window.setInterval(() => {
      const ahora = new Date();
      const diferencia = this.tiempoFinal.getTime() - ahora.getTime();

      if (diferencia < 0) {
        if (this.intervalId) clearInterval(this.intervalId);
        this.tiempoRestante = '¡Tiempo finalizado!';
        return;
      }

      let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      this.tiempoRestante = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }, 1000);
  }


}
