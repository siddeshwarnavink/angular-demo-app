import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
    exports: [RouterModule]
})
export class AppRoutingModule { }