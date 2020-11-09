import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
  @Input() name: String;
  @Input() size = 16;
  @Input() fill = "currentColor"
  constructor() { }

  ngOnInit(): void {
  }
  get iconUrl() {
    return `${window.location.href}#${this.name}`;
  }
}
