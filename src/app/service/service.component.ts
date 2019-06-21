import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
 title: string;
 fName: string;
 lName: string;
 dateOfBirth: string;
 gender: string;
 eMail: string;
 homeNo: string;
 mobileNo: string;
 eContactName: string;
 ePhoneNo: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onContinue(){
    this.router.navigate(['/booking-details'], {queryParams:{title:this.title, fName:this.fName, lName:this.lName, dateOfBirth:this.dateOfBirth, gender:this.gender,
    eMail:this.eMail, homeNo:this.homeNo, mobileNo:this.mobileNo, eContactName:this.eContactName, ePhoneNo:this.ePhoneNo}})
  }

}
