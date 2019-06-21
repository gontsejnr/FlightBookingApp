import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pageNav=[{path:"home",name:"Home"},{path:"service",name:"Service"},{path:"booking-details",name:""}, {path:"payment",name:""}]
  
constructor(private router: Router) { }

  ngOnInit() {
  }
  onNav(item){
    this.router.navigateByUrl(item.path)
  }

}
