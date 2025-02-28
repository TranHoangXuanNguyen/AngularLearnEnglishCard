import { Routes } from '@angular/router';
import { FormAddComponent } from './formAdd/form-add.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { DetailComponent } from './detail/detail.component';
import { FormEditComponent } from './form-edit/form-edit.component';

export const routes: Routes = [
  { path: 'add-card', component: FormAddComponent},
  { path: 'view-card', component: ViewCardComponent},
  { path: 'detail/:id', component: DetailComponent },
  { path: 'edit/:id', component: FormEditComponent },
  { path: '', redirectTo: '/add-card', pathMatch: 'full' },
];
