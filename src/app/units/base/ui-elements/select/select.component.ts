import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() options: string[];
  selectedOption: string;

  constructor() {
  }

  ngOnInit() {
    this.setSelectedOption(this.options[0]);
  }

  setSelectedOption(option: string) {
    this.selectedOption = option;
  }

  getSelectedOption() {
    return this.selectedOption;
  }
}
