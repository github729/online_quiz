import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'technologies', component: TechnologiesComponent,
        children:[
            {
                path: 'topics', component:TopicsComponent
            }
        ]
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }