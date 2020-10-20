import {Component, OnInit} from '@angular/core';
import {HistoryService} from '../../providers/history/history.service';
import {AuthService} from '../../providers/auth/auth.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private historyService: HistoryService, private authService: AuthService) {
    const userId = this.authService.getAuthorizedUserId();
    this.historyService.getUserOrders(userId);
  }

  ngOnInit() {
  }

}
