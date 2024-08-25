import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { UserTerapeutaServiceService } from '../../services/user-terapeuta-service.service'; // Importa el servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-terapeuta-registro',
  standalone: true,
  imports: [CommonModule, MatStepperModule, ReactiveFormsModule],
  templateUrl: './terapeuta-registro.component.html',
  styleUrls: ['./terapeuta-registro.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TerapeutaRegistroComponent {
  secondFormGroup: FormGroup;
  finalFormGroup: FormGroup;
  url: string | ArrayBuffer | null = '../../../assets/img/profileIcon.jpg';

  constructor(
    private _formBuilder: FormBuilder,
    private UserTerapeutaService: UserTerapeutaServiceService,
    private router: Router // Inyectar el servicio de navegación
  ) {
    this.secondFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      apodo: ['', Validators.required],
      foto: [null], // Campo para la foto
    });

    this.finalFormGroup = this._formBuilder.group(
      {
        nombre: [''],
        apodo: [''],
        sexo: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        identificacion: ['', Validators.required],
        eps: ['', Validators.required],
        fechaNacimiento: ['', Validators.required],
        pais: ['', Validators.required],
        ciudad: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        foto: [null], // Campo para la foto
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  checkPasswordMatch() {
    const confirmPasswordControl = this.finalFormGroup.get('confirmPassword');
    confirmPasswordControl?.updateValueAndValidity();
  }

  // Este método maneja la selección de archivos
  onselectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result) {
          this.url = result;
          this.secondFormGroup.patchValue({
            foto: event.target.files[0], // Se asegura de que solo un archivo se seleccione
          });
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  togglePasswordVisibility() {
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;
    const confirmPasswordInput = document.getElementById(
      'confirm-password'
    ) as HTMLInputElement;
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    confirmPasswordInput.type = type;
  }

  goToNext(stepper: any) {
    this.finalFormGroup.patchValue(this.secondFormGroup.value);
    stepper.next();
  }

  onSubmit() {
    if (this.finalFormGroup.valid) {
      const formData = new FormData();
      const formValue = { ...this.finalFormGroup.value };
      delete formValue.confirmPassword;

      for (const key in formValue) {
        if (formValue.hasOwnProperty(key)) {
          formData.append(key, formValue[key]);
        }
      }

      // Se asegura de que solo un archivo esté siendo añadido
      const fotoFile = this.secondFormGroup.get('foto')?.value;
      if (fotoFile) {
        formData.append('foto', fotoFile);
      }

      // Imprime el contenido de FormData para depuración
      console.log('Datos enviados al backend:');
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

      this.UserTerapeutaService.registerUser(formData).subscribe({
        next: (response) => {
          console.log('Registro exitoso', response);
          alert('Registro exitoso!');
          // Navegar a otra ruta si el registro es exitoso
          this.router.navigate(['/ruta-a-donde-ir']);
        },
        error: (error) => {
          console.error('Error en el registro', error);
          alert(
            'Ocurrió un error durante el registro. Verifica que hayas diligenciado todos los campos, incluído el de tu foto.'
          );
        },
      });
    }
  }
}
