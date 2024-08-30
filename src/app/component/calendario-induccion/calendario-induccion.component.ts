import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendario-induccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendario-induccion.component.html',
  styleUrls: ['./calendario-induccion.component.css'],
})
export class CalendarioInduccionComponent implements OnInit {
  public selectedDay: Date | null = null;
  public selectedHour: string | null = null;
  public workHours = [
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
  ];

  public workWeekDays = [1, 2, 3, 4, 5]; // Lunes a viernes
  public dayNames = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  public today = new Date();
  public currentMonth: string = this.today.toLocaleString('default', {
    month: 'long',
  });

  ngOnInit(): void {
    // Seleccionar automáticamente el día actual cuando se cargue el componente
    const currentDay = this.today.getDay();
    if (this.workWeekDays.includes(currentDay)) {
      this.onDaySelect(currentDay);
    }
  }

  // Obtener el número del día correspondiente para mostrar en los botones
  getDayNumber(day: number): number {
    const targetDate = new Date(this.today);
    targetDate.setDate(targetDate.getDate() - targetDate.getDay() + day);
    return targetDate.getDate();
  }

  onDaySelect(day: number): void {
    const targetDate = new Date(this.today);
    targetDate.setDate(targetDate.getDate() - targetDate.getDay() + day);
    this.selectedDay = targetDate;
    this.selectedHour = null; // Reiniciar la hora seleccionada cuando se cambia el día
  }

  onHourSelect(hour: string): void {
    this.selectedHour = hour; // Establecer la hora seleccionada
  }

  scheduleAppointment(): void {
    if (this.selectedDay && this.selectedHour) {
      const appointment = {
        date: this.selectedDay,
        time: this.selectedHour,
      };
      // Lógica para agendar la cita, como enviar los datos a un servidor
      console.log('Cita agendada:', appointment);
      alert(
        `Cita agendada para el ${this.selectedDay.toDateString()} a las ${
          this.selectedHour
        }.`
      );
    }
  }
}
