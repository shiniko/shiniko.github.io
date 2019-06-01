import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
