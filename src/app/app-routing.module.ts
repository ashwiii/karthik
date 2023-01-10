import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { OurhistoryComponent } from './component/ourhistory/ourhistory.component'
import { BlogComponent } from './component/blog/blog.component';
import { BloggComponent } from './component/blogg/blogg.component';
import { NewsComponent } from './component/news/news.component';
import { New1Component } from './component/new1/new1.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
{ path:'',component:HomeComponent},
{ path:'aboutus',component:AboutusComponent},
{ path:'home',component:HomeComponent},
{ path:'aboutus',component:AboutusComponent},
{ path:'products',component:ProductsComponent},
{ path:'ourhistory',component:OurhistoryComponent},
{ path:'blog',component:BlogComponent},
{ path:'blogg',component:BloggComponent },
{path:'news',component:NewsComponent },
{path:'new1',component:New1Component },
{path:'contactus',component:ContactusComponent },
{path:'gallery',component:GalleryComponent },
{path:'login',component:LoginComponent },
{path:'signup',component:SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
