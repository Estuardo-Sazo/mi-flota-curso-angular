import { Dashboard } from './features/dashboard/views/dashboard/dashboard';
import { Routes } from '@angular/router';
import { AppLayout } from './shared/layout/app-layout/app-layout';

export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [

            { path: '', loadComponent:() => import('./features/dashboard/views/dashboard/dashboard').then(m => m.Dashboard) },
            { path: 'vehicles', loadComponent:() => import('./features/vehicles/views/vehicle/vehicle').then(m => m.Vehicle) },


        ]
    }
];
