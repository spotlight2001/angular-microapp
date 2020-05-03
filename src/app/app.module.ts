import { EmptyComponent } from './empty/empty.component';

import { PageInAppShellComponent } from './page-in-app-shell/page-in-app-shell.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LazyElementsModule } from '@angular-extensions/elements';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    PageInAppShellComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'page-in-app-shell', component: PageInAppShellComponent },
      { path: '**', component: EmptyComponent }
    ], { useHash: true }),
    LazyElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
