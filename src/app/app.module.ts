import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './layout/app-navbar/app-navbar.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { PostItemComponent } from './post/post-item/post-item.component';
import { ButtonComponent } from './ui/button/button.component';
import { PostService } from './post/post.service';
import { ModalComponent } from './ui/modal/modal.component';
import { BackdropComponent } from './ui/backdrop/backdrop.component';
import { PostEditorComponent } from './post/post-editor/post-editor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { AppRoutingModule } from './app-routing.module';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppLayoutComponent,
    PostItemComponent,
    ButtonComponent,
    ModalComponent,
    BackdropComponent,
    PostEditorComponent,
    SpinnerComponent,
    FavoritesComponent,
    HomeComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    // Angular-material modules
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
