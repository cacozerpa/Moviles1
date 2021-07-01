import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit() {}

  goToHome() {
    this.router.navigate(['/dashboard']);
  }
  goToSignUp() {
    this.router.navigate(['/register']);
  }
  goToSignIn() {
    this.router.navigate(['/home']);
  }

  goToSearchList() {
    this.router.navigate(['/searhlist']);
  }

}
