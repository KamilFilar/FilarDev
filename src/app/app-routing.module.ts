import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { PageNotFoundComponent } from './modules/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './modules/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
