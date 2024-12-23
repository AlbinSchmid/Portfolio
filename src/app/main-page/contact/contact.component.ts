import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../shared/service/language.service';
import { CommonModule } from '@angular/common';
import { WindowServiceService } from '../../shared/service/window.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  windowService = inject(WindowServiceService);
  languageService = inject(LanguageService);
  http = inject(HttpClient);
  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  }
  emptyCheckbox = false;
  sendMailWorked = false;


  /**
   * send mail
   */
  post = {
    endPoint: 'https://albin-schmid.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  /**
   * Handles form submission for the contact form.
   * 
   * Validates the form and sends the form data to the server if valid.
   * On successful submission, displays a success message and resets the form.
   * If the submission fails, logs the error to the console.
   * If the form is invalid, displays error messages for each field.
   * 
   * @param ngForm - The form object associated with the contact form.
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
            }, 4000);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else {
      this.showErrorCheckbox();
    }
  }

  
  /**
   * Returns an error message for a specified form field based on its validity.
   * 
   * Determines the error message to return by checking whether the specified
   * field ('email', 'name', or 'message') has been filled out correctly.
   * 
   * @param witchError - The name of the form field to check for errors.
   * @returns A string containing the localized error message for the specified field.
   */
  checkError(witchError: string): string {
    if (witchError == 'email') {
      return this.contactData.email.length == 0 ? `${this.languageService.controllLang(this.languageService.contact.form.errors.email)}` : `${this.languageService.controllLang(this.languageService.contact.form.errors.validEmail)}`;
    } if (witchError == 'name') {
      return `${this.languageService.controllLang(this.languageService.contact.form.errors.name)}`
    } else {
      return this.contactData.message.length == 0 ? `${this.languageService.controllLang(this.languageService.contact.form.errors.message)}` : `${this.languageService.controllLang(this.languageService.contact.form.errors.messageMoreLetters)}`;
    }
  }


  /**
   * Checks if the checkbox field is empty and sets the
   * emptyCheckbox flag accordingly. This flag is used
   * to display an error message if the field is empty.
   */
  showErrorCheckbox() {
    if (this.contactData.checkbox == false) {
      this.emptyCheckbox = true;
    } else {
      this.emptyCheckbox = false;
    }
  }
}
