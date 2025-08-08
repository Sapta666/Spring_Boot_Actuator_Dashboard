import { Routes } from '@angular/router';
import { Prac01Component } from './prac/prac-01/prac-01.component';
import { Prac02Component } from './prac/prac-02/prac-02.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "Prac01" },

    { path: "Prac01", component: Prac01Component },
    { path: "Prac02", component: Prac02Component },
];
