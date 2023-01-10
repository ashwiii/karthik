import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ProductsComponent } from './component/products/products.component';
import { OurhistoryComponent } from './component/ourhistory/ourhistory.component';
import { BlogComponent } from './component/blog/blog.component';
import { BloggComponent } from './component/blogg/blogg.component';
import { NewsComponent } from './component/news/news.component';
import { New1Component } from './component/new1/new1.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    ProductsComponent,
    OurhistoryComponent,
    BlogComponent,
    BloggComponent,
    NewsComponent,
    New1Component,
    ContactusComponent,
    GalleryComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
