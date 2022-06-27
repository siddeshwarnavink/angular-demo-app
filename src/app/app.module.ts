import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './layout/app-navbar/app-navbar.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { PostItemComponent } from './post/post-item/post-item.component';
import { ButtonComponent } from './ui/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppLayoutComponent,
    PostItemComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
