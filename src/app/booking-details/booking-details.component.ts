import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  tripType: string;
  departure: string;
  return: string;
 classType;
 noAdults: number;
 noChild: number;
 destination: string;

 amount1= 1000;
 amount2 = 2000;
 amount3 = 3000;
 flightAmount;




  @Input() title: string;
  @Input() fName: string;
  @Input() lName: string;
  @Input() dateOfBirth: string;
  @Input() gender: string;
  @Input() eMail: string;
  @Input() homeNo: string;
  @Input() mobileNo: string;
  @Input() eContactName: string;
  @Input() ePhoneNo: string;

  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.router.queryParams.subscribe( params =>{console.log(params);
    
    this.title=params.title,
    this.fName=params.fName,
    this.lName=params.lName,
    this.dateOfBirth=params.dateOfBirth,
    this.gender=params.gender,
    this.eMail=params.eMail,
    this.homeNo=params.homeNo,
    this.mobileNo=params.mobileNo,
    this.eContactName=params.eContactName,
    this.ePhoneNo=params.ePhoneNo

  console.log(this.title, this.fName, this.lName, this.dateOfBirth, this.gender, this.eMail, this.homeNo, this.mobileNo, this.eContactName, this.ePhoneNo);
    })
  }
   amount(){
   
   }

   onPay(){

    if(this.classType == "economy" ){
      this.flightAmount =this.amount1;

     }
     else if(this.classType == "business"){
       this.flightAmount = this.amount2;
     }
     else if (this.classType == "firstClass"){
       this.flightAmount = this.amount3;
     }

     this.route.navigate(['/payment'], {queryParams:{tripType: this.tripType, departure:this.departure, return:this.return, classType:this.classType, noAdults:this.noAdults, 
      noChild:this.noChild, destination:this.destination, flightAmount:this.flightAmount}})
   }
}
