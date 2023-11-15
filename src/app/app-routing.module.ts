import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'patient/home',
    loadChildren: () => import('./pages/patient/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'doctor/home',
    loadChildren: () => import('./pages/doctor/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'admin/home',
    loadChildren: () => import('./pages/admin/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'clerk/home',
    loadChildren: () => import('./pages/clerk/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'reception/home',
    loadChildren: () => import('./pages/reception/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'patiemt/home/bills',
    loadChildren: () => import('./pages/patient/bills/bills.module').then(m=> m.BillsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
