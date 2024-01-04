import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HistoryComponent } from './pages/history/history.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { EditProfileComponentComponent } from './components/editProfile/edit-profile-component/edit-profile-component.component';
import { CreateHistoryComponent } from './components/createHistory/create-history-component/create-history-component.component';

export const routes: Routes = [

  // {path: '**', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'home', component:HomeComponent},
  {path: 'edit/profile', component: EditProfileComponentComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'create/history', component: CreateHistoryComponent}
];