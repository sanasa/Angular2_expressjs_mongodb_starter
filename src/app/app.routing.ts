import { RouterModule, Routes } from '@angular/router';

import { UserComponent }     from './users/user.component';

const app_routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/users' },
  { path: 'users', component: UserComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);