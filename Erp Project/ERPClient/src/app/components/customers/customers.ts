import { Component, ElementRef, model, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared-module';
import { CustomerModel } from '../../models/customer.model';
import { HttpService } from '../../services/http';
import { CustomerPipe } from '../../pipes/customer-pipe';
import { NgForm } from '@angular/forms';
import { SwalService } from '../../services/swal';

@Component({
  selector: 'app-customers',
  standalone:true,
  imports: [SharedModule, CustomerPipe],
  templateUrl: './customers.html',
  styleUrl: './customers.css'
})
export class Customers implements OnInit {

  customers: CustomerModel[] = [];
  search: string ="";

 @ViewChild("createModalCloseBtn") createModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("updateModalCloseBtn") updateModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;


  createModel: CustomerModel = new CustomerModel();
  updateModel: CustomerModel = new CustomerModel();

  constructor(
    private http: HttpService,
    private swall: SwalService
    
  ){}


  ngOnInit(): void {
    this.getAll();
  }

getAll(){

  this.http.post<CustomerModel[]>("Customers/GetAll",{},(res)=>{

    this.customers = res;

  });

}

create(form: NgForm){
    
  if(form.valid){

    this.http.post<string>("Customers/Create", this.createModel,(res)=> {
     
       this.swall.callToast(res);
       this.createModel = new CustomerModel();
       this.createModalCloseBtn?.nativeElement.click();
       this.getAll();

    });
  }
}

deleteById(model: CustomerModel){

     this.swall.callSwall("Müşteri Sil",`${model.name} müşterisini silmek istiyor musunuz`,()=> {
       
      this.http.post<string>("Customers/DeleteById",{id:model.id},(res)=> {

        this.getAll();
        this.swall.callToast(res,"info");
      });


     })

  }

  get(model: CustomerModel){
    this.updateModel = {...model};

  }

  update(form: NgForm){
    
  if(form.valid){

    this.http.post<string>("Customers/Update", this.updateModel,(res)=> {
     
       this.swall.callToast(res,"info");
       this.updateModalCloseBtn?.nativeElement.click();
       this.getAll();

    });
  }
}

}
