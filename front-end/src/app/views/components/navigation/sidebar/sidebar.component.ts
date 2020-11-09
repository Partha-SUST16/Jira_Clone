import { SideBarLinks } from './../../../../config/sidebar';
import { SideBarLink } from './../../../../interface/ui-model/nav-link';
import { Project } from './../../../../interface/project';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() expanded: boolean;
  project: Project;

  get sidebarWidth(): number {
    return this.expanded ? 240 : 20;
  }

  sideBarLinks: SideBarLink[];

  constructor() {}

  ngOnInit(): void {
    this.sideBarLinks = SideBarLinks;
  }
}
