import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared-module';
import { LoginModel } from '../../models/login.model';
import { HttpService } from '../../services/http';
import { LoginResponseModel } from '../../models/login.response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [SharedModule],
  standalone:true,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  model: LoginModel = new LoginModel();

   constructor(
        private http: HttpService,
        private router: Router   

   ){}



  signIn(){

    this.http.post<LoginResponseModel>("Auth/Login", this.model, (res)=>{
           
      localStorage.setItem("token",res.token);
      this.router.navigateByUrl("/");

    });  

  }

}
