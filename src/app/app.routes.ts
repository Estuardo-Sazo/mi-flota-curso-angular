import { Dashboard } from './features/dashboard/views/dashboard/dashboard';
import { AppLayout } from './shared/layout/app-layout/app-layout';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [{ path: '', component: Dashboard }],
  },
];
