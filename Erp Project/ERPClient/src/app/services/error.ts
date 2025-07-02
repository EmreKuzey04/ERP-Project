import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwalService } from './swal';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private swall: SwalService
  ) { }

  errorHandler(err:HttpErrorResponse){

    console.log(err);

    if(err.status === 403){
      let errorMessage = "";

      for(const e of err.error.ErrorMessages){
         
        errorMessage+= e + "\n";

      }

      this.swall.callToast(errorMessage,"error");
    }else if(err.status === 500){
      this.swall.callToast(err.error.errorMessages[0],"error");
    }
  }
}
