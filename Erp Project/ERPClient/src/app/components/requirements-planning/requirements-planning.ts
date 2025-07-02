import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RequirementsPlanningModel } from '../../models/requirements-planning.model';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http';

@Component({
  selector: 'app-requirements-planning',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './requirements-planning.html',
  styleUrl: './requirements-planning.css'
})
export class RequirementsPlanning {

  data: RequirementsPlanningModel = new RequirementsPlanningModel();
  orderId: string = "";


  constructor(
    private activated: ActivatedRoute,
    private http : HttpService
  ){
     this.activated.params.subscribe(res=>{
      this.orderId = res["orderId"];
      this.get();
     });
  
  }

  
  get(){
      this.http.post<RequirementsPlanningModel>("Orders/RequirementsPlanningByOrderId",{orderId: this.orderId}, 
        res=>{

        this.data = res;
      });
  }



}
