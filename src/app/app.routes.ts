import { Routes } from '@angular/router';
import { LoginComponent } from './feature/auth/login/login.component';
import { RegisterComponent } from './feature/auth/register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin/layout/admin-layout/admin-layout.component';
import { UserProfileComponent } from './admin/user/user-profile/user-profile.component';

export const routes: Routes = [


 { path: '', redirectTo: 'login', pathMatch: 'full' },

 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterComponent },
 {
  path: 'admin', component: AdminLayoutComponent,
  children: [

   { path: '', component: DashboardComponent },
   { path: 'users', loadComponent: () => import('./admin/user/user-profile/user-profile.component').then(m => m.UserProfileComponent) },

   { path: 'settings', loadComponent: () => import('./admin/settings/admin-settings/admin-settings.component').then(m => m.AdminSettingsComponent) }
  ]

 },

 { path: '**', redirectTo: 'login' }

];
