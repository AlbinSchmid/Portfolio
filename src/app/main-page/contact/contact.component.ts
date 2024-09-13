import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../shared/service/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  http = inject(HttpClient);
  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  }
  emptyName = false;
  emptyEmail = false;
  emptyMessage = false;
  emptyCheckbox = false;
  sendMailWorked = false;


  constructor(public languageService: LanguageService) { }


  /**
   * send mail
   */
  post = {
    endPoint: 'http://albin-schmid.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  /**
   * checked if every input is filled
   * @param ngForm - the form 
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.sendMailWorked = true;
            this.emptyCheckbox = false;
            setTimeout(() => {
              this.sendMailWorked = false;
            }, 6000);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
        });
    } else {
      this.showErrorName();
      this.showErrorEmail();
      this.showErrorMessage();
      this.showErrorCheckbox();
    }
  }


  /**
   * show error under the input
   */
  showErrorName() {
    if (this.contactData.name.length == 0) {
      this.emptyName = true;
    } else {
      this.emptyName = false;
    }
  }


  /**
   * show error under the input
   */
  showErrorEmail() {
    if (this.contactData.email.length == 0) {
      this.emptyEmail = true;
    } else {
      this.emptyEmail = false;
    }
  }


  /**
   * show error under the input
   */
  showErrorMessage() {
    if (this.contactData.message.length == 0) {
      this.emptyMessage = true;
    } else {
      this.emptyMessage = false;
    }
  }


  /**
   * show error under the input
   */
  showErrorCheckbox() {
    if (this.contactData.checkbox == false) {
      this.emptyCheckbox = true;
    } else {
      this.emptyCheckbox = false;
    }
  }
}
