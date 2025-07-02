import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blank } from '../components/blank/blank';
import { Section } from '../components/section/section';
import { FormsModule } from '@angular/forms';
import { FormValidateDirective } from 'form-validate-angular';
import { TrCurrencyPipe } from 'tr-currency';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Blank,
    Section,
    FormsModule,
    FormValidateDirective,
    TrCurrencyPipe
  ],
  exports:[
    
     CommonModule,
     Blank,
     Section,
     FormsModule,
     FormValidateDirective,
     TrCurrencyPipe
  ]
})
export class SharedModule { }
