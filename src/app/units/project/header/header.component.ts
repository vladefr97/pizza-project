import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../providers/auth/auth.service';
import {DisplayService} from '../../../providers/display/display.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoIsActive = false;
  userLogin: string;

  constructor(public authService: AuthService, public displayService: DisplayService) {
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
}
