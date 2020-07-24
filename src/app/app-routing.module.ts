import {NgModule} from '@angular/core';

// modules
import {RouterModule, Routes} from '@angular/router';
import {PagesRoutingModule} from "./pages/pages.routing";

// components
import {NopagefoundComponent} from './nopagefound/nopagefound.component';
import {AuthRoutingModule} from "./auth/auth.routing";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
