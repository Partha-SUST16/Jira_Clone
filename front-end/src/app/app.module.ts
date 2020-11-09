import { NZ_JIRA_ICONS } from './config/icons';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarLeftComponent } from './views/components/navigation/navbar-left/navbar-left.component';
import { NavigationComponent } from './views/components/navigation/navigation/navigation.component';
import { SidebarComponent } from './views/components/navigation/sidebar/sidebar.component';
import { SvgDefinitionsComponent } from './views/components/shared/svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './views/components/shared/svg-icon/svg-icon.component';
import { ProjectComponent } from './views/pages/project/project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

@NgModule({
  declarations: [
    AppComponent,
    NavbarLeftComponent,
    NavigationComponent,
    SidebarComponent,
    SvgDefinitionsComponent,
    SvgIconComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    HttpClientModule,
    NzToolTipModule,
    NzIconModule.forRoot(NZ_JIRA_ICONS),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
