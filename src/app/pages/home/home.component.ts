import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StoredItemsService} from '../../providers/stored-items/stored-items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private storedItemsService: StoredItemsService) {
  }

  ngOnInit() {
  }

  showPage() {
    this.router.navigate(['/order'], {relativeTo: this.route});
  }
}
