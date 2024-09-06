import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  germanLanguage: boolean = true;
  englishLanguage: boolean = false;

  constructor() { }
}
