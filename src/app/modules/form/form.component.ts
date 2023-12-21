import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';
import { EmailsService } from 'src/app/services/emails.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form: FormGroup;
  mensage: any;
  email: any;
  enviado: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertsService: AlertsService,
    private emailService: EmailsService
  ) {
    this.form = this.formBuilder.group({
      mensage: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
    this.form.setValue({
      mensage: '',
      email: '',
    });
  }
  sendContact() {
    this.mensage = this.form.value.mensage;
    this.email = this.form.value.email;
    this.emailService.sendContact(this.mensage, this.email).subscribe(
      (data) => {
        this.enviado = true;
        this.alertsService.mostrarMensaje('Email enviado');

        setTimeout(() => {
          this.alertsService.ocultarMensaje();
        }, 4000);
      },
      (error) => {
        this.alertsService.mostrarMensaje('Hubo un error al enviar el email');

        setTimeout(() => {
          this.alertsService.ocultarMensaje();
        }, 4000);

        console.log(error);
      }
    );
  }
}
