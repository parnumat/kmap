import { NgModule, EventEmitter } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginComponent } from './login/login.component';
import { layoutComponent } from './layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';
import { ApprenderComponent } from './apprender/apprender.component';
import { MenurenderComponent } from './menurender/menurender.component';

const routes: Routes = [
  { path: 'login', component: loginComponent, canActivate: [UnauthGuard] },
  {
    path: 'layout', component: layoutComponent, canActivate: [AuthGuard], data:{animation: 'layout'},
    children: [
      { path: '', component: MenurenderComponent, data: { animation: 'layoutAll'}},
      { path: 'ALL', component: MenurenderComponent, data: { animation: 'layoutAll'}},
      { path: '1', component: MenurenderComponent, data: { animation: 'layoutDocument' } },
      { path: '2', component: MenurenderComponent, data: { animation: 'layoutRepair' }},
      { path: '3', component: MenurenderComponent, data: { animation: 'layoutSales' } }
    ]
  },
  {
    path: 'apprender',
    component: ApprenderComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
