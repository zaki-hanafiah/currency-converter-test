import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss'],
})
export class SelectDropdownComponent implements OnInit {
  @Input() options: any;

  selected = '';

  constructor() {}

  ngOnInit(): void {}
}
