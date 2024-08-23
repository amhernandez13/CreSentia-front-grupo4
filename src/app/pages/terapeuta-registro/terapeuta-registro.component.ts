import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-terapeuta-registro',
  standalone: true,
  imports: [MatStepperModule, ReactiveFormsModule, CommonModule],
  templateUrl: './terapeuta-registro.component.html',
  styleUrl: './terapeuta-registro.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TerapeutaRegistroComponent {
  secondFormGroup: FormGroup;
  finalFormGroup: FormGroup;
  url: string | ArrayBuffer | null = '../../../assets/img/profileIcon.jpg';

  constructor(private _formBuilder: FormBuilder) {
    this.secondFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      apodo: ['', Validators.required],
      foto: [null], // Añadido campo foto
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
        foto: [null], // Añadido campo foto
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
    // Forzar la validación en el control de confirmación de contraseña
    const confirmPasswordControl = this.finalFormGroup.get('confirmPassword');
    confirmPasswordControl?.updateValueAndValidity();
  }

  onselectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result) {
          this.url = result;
          this.secondFormGroup.patchValue({
            foto: event.target.files[0],
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
    // Copiar valores del segundo formulario al finalFormulario
    this.finalFormGroup.patchValue(this.secondFormGroup.value);
    stepper.next();
  }

  onSubmit() {
    if (this.finalFormGroup.valid) {
      const formData = new FormData();
      // Crear una copia del objeto finalFormGroup.value
      const formValue = { ...this.finalFormGroup.value };

      // Eliminar el campo confirmPassword
      delete formValue.confirmPassword;

      // Añadir los campos del formulario a formData
      for (const key in formValue) {
        if (formValue.hasOwnProperty(key)) {
          formData.append(key, formValue[key]);
        }
      }
      console.log(formValue);
      alert('Formulario enviado exitosamente!');
      // Aquí puedes enviar los datos al servidor o manejar la lógica adicional
    }
  }
}
