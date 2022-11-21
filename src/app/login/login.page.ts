import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  error_message?: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.username + ' ' + this.password )
    this.authService.login(this.username,this.password)
    .subscribe((data) => {
      //console.log(data.accessToken)
      localStorage.setItem("token", data.accessToken);
      this.error_message = ""
      this.router.navigate(['/home']);
      //console.log(localStorage.getItem("token"))
      //console.log(data); 
    }
    ,
      (error) => {
          // get the status as error.status
          if (error.status == 403) {
          this.password = ""  
          this.error_message = "Email ou mot de passe incorrect !"
          console.log('Erreur de droit : 403 !');
        } else {
          this.error_message = "Le serveur est downs !"
          console.log(error)
        }
      }
    );


    const isLoggedIn = localStorage.getItem("token")?true:false;
   
  }
}
