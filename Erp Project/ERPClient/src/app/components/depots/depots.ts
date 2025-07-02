import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared-module';
import { DepotPipe } from '../../pipes/depot-pipe';
import { DepotModel } from '../../models/depot.model';
import { HttpService } from '../../services/http';
import { SwalService } from '../../services/swal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-depots',
  imports: [SharedModule,DepotPipe],
  standalone:true,
  templateUrl: './depots.html',
  styleUrl: './depots.css'
})
export class Depots implements OnInit {
  depots: DepotModel[] = [];
  search: string ="";

 @ViewChild("createModalCloseBtn") createModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("updateModalCloseBtn") updateModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;


  createModel: DepotModel = new DepotModel();
  updateModel: DepotModel = new DepotModel();

  constructor(
    private http: HttpService,
    private swall: SwalService
    
  ){}


  ngOnInit(): void {
    this.getAll();
  }

getAll(){

  this.http.post<DepotModel[]>("Depots/GetAll",{},(res)=>{

    this.depots = res;

  });

}

create(form: NgForm){
    
  if(form.valid){

    this.http.post<string>("Depots/Create", this.createModel,(res)=> {
     
       this.swall.callToast(res);
       this.createModel = new DepotModel();
       this.createModalCloseBtn?.nativeElement.click();
       this.getAll();

    });
  }
}

deleteById(model: DepotModel){

     this.swall.callSwall("Depo Sil",`${model.name} depoyu silmek istiyor musunuz`,()=> {
       
      this.http.post<string>("Depots/DeleteById",{id:model.id},(res)=> {

        this.getAll();
        this.swall.callToast(res,"info");
      });


     })

  }

  get(model: DepotModel){
    this.updateModel = {...model};

  }

  update(form: NgForm){
    
  if(form.valid){

    this.http.post<string>("Depots/Update", this.updateModel,(res)=> {
     
       this.swall.callToast(res,"info");
       this.updateModalCloseBtn?.nativeElement.click();
       this.getAll();

    });
  }
}
}
