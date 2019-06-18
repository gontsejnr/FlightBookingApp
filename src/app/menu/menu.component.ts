import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pageNav=[{path:"menu/home",name:"Home"},{path:"menu/service",name:"Service"},{path:"menu/booking-details",name:""}, {path:"menu/payment",name:""}]
  
constructor(private router: Router) { }

  ngOnInit() {
  }
  onNav(item){
    this.router.navigateByUrl(item.path)
  }

}
