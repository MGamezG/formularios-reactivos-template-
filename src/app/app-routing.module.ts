import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  {
    path:'reactive',
    component:ReactiveComponent
   },
   {
    path:'',
    redirectTo:'/reactive',
    pathMatch:'full'
   },
   {
     path:'template',
     component:TemplateComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

