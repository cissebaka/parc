import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
  

  constructor(private router: Router) {}
  ngOnInit() {
    
    if(!localStorage.getItem("token")){
      this.router.navigate(['/login']);
    }
  }
  logout(){
    console.log("test logout");
    localStorage.removeItem("token");
    localStorage.clear();
  }
  tester(){
    console.log("tester")
  }
  

}
