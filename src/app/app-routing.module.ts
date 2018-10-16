import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout.component';
import { LatestJobsComponent } from './latest-jobs/latest-jobs.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobCategoriesComponent } from './job-categories/job-categories.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'technologies', loadChildren: 'app/technologies/technologies.module#TechnologiesModule'
    },
    {
        path: 'latest-jobs/:name', component: LatestJobsComponent
    },
    {
        path: 'job-detail/:id', component: JobDetailComponent
    },
    {
        path: 'job-categories', component: JobCategoriesComponent
    },
    {
        path: 'logout', component: LogoutComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }