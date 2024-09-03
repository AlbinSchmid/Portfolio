import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
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

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.contactData);
      ngForm.resetForm();
    } else {
      if (this.contactData.name.length == 0) {
        this.emptyName = true;
      } else {
        this.emptyName = false;
      }

      if (this.contactData.email.length == 0) {
        this.emptyEmail = true;
      } else {
        this.emptyEmail = false;
      }

      if (this.contactData.message.length == 0) {
        this.emptyMessage = true;
      } else {
        this.emptyMessage = false;
      }

      if (this.contactData.checkbox == false) {
        this.emptyCheckbox = true;
      } else {
        this.emptyCheckbox = false;
      }

      console.error('Does not work');
      
    }
  }





  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.valid && ngForm.submitted) {
  //     console.log(this.contactData);

  //   }
  // }
}
