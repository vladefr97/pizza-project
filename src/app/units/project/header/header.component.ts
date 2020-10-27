import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../providers/auth/auth.service';
import {DisplayService} from '../../../providers/display/display.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoIsActive = false;
  userLogin: string;

  constructor(private router: Router, public authService: AuthService, public displayService: DisplayService) {
    this.authService.getAuthorizedUserInfo().subscribe(res => {
      this.userLogin = res.user.login;
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.signOut();
    this.displayService.hideAuthorizedUserFunctionality();
  }

  setAuthSidebarDisplay(isDisplayed) {
    // Display sidebar when logo is active
    this.displayService.isAuthSidebarDisplayed = isDisplayed;
  }


  toggleLogo() {
    this.logoIsActive = !this.logoIsActive;
    this.displayService.isHeaderLogoActive = this.logoIsActive;
    // The logo is linked to the Authentification sidebar
    this.setAuthSidebarDisplay(this.logoIsActive);
  }

  toggleMobileMenu() {
    this.displayService.isMobileMenuDisplayed = !this.displayService.isMobileMenuDisplayed;
  }

  showAuthSidebar() {
    this.displayService.isAuthSidebarDisplayed = !this.displayService.isAuthSidebarDisplayed;
  }

  redirectToHistoryPage() {
    this.displayService.isMobileMenuDisplayed = false;
    this.router.navigateByUrl('/history');
  }

  redirectToMainPage() {
    this.displayService.isMobileMenuDisplayed = false;
    this.router.navigateByUrl('/');
  }
}
