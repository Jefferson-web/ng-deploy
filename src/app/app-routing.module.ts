import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
import { Test4Component } from './components/test4/test4.component';
import { Test5Component } from './components/test5/test5.component';

const routes: Routes = [
  { path: 'inicio', component: Test1Component },
  { path: 'anuncios', component: Test2Component },
  { path: 'suscripcion', component: Test3Component },
  { path: 'mas', component: Test4Component },
  { path: 'crear_anuncio', component: Test5Component },
  { path: '', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
