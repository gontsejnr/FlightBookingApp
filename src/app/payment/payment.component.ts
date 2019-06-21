import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


@Input()  tripType: string;
@Input() departure: string;
@Input() return: string;
@Input() classType: string;
@Input() noAdults: number;
@Input() noChild: number;
@Input() destination: string;

//@Input() amount1= 1000;
//@Input() amount2 = 2000;
//@Input() amount3 = 3000;
@Input() flightAmount;


  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.router.queryParams.subscribe( params =>{console.log(params);

      this.tripType=params.tripType,
      this.departure=params.departure,
      this.return=params.return,
      this.classType=params.classType,
      this.noAdults=params.noAdults,
      this.noChild=params.noChild,
      this.destination=params.destination,
      //this.amount1=params.amount1,
     // this.amount2=params.amount2,
      //this.amount3=params.amount3,
      this.flightAmount=params.flightAmount

      console.log(this.tripType, this.departure, this.return, this.classType, this.noAdults, this.noChild, this.flightAmount, this.destination );
        })
  }
  goHome(){
    this.route.navigateByUrl("home")
  }

}
