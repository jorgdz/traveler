import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from './components/country/country.component';

const routes:Routes = [
    {
        path: '**',
        component: CountryComponent
    }
];

export const MyRoutes = RouterModule.forRoot(routes);