import { NgModule } from '@angular/core';
// import { ModuleWithProviders}  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppModule } from './app.module';
// import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SongfeatureComponent } from './songfeature/songfeature.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [

    { path: '', component: LoginComponent},
    { path: 'landing', component: LandingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

export class AppRoutingModule { }
