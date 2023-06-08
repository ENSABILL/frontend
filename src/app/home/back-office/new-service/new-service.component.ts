import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgencyService } from 'src/app/services/agency/agency.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent implements OnInit {
  public service:{
    type: "DONATION" | "FACTURE" | "RECHARGE",
    products: string[],
    productName: string,
    agencyId: string
  }={
    type: "FACTURE",
    products: [],
    productName: "",
    agencyId: "I0"
  }

  ngOnInit(): void {
    this.agencyService.close();
    this.agencyService.getAllAgencies().subscribe();
  }

  constructor(public agencyService: AgencyService){}

  addNewProduct(){
    if(!this.service.products.includes(this.service.productName)){
      this.service.products=this.service.products.concat([this.service.productName]);
    }
  }

  addService(form: NgForm){
    if(form.valid){
      console.log(this.service);
      this.agencyService.addService(this.service).subscribe();
    }else{
      console.log("invalid service");
    }
  }

}
