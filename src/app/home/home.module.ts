import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { SlickModule } from 'ngx-slick';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { FacebookModule } from 'ngx-facebook';


// Components
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './content/main/slider/slider.component';
import { NewsCategorysComponent } from './content/main/news-categorys/news-categorys.component';
import { ListDoctorsComponent } from './content/main/list-doctors/list-doctors.component';
import { ListServicesComponent } from './content/main/list-services/list-services.component';
import { SidebarComponent } from './content/sidebar/sidebar.component';
import { MainComponent } from './content/main/main.component';
import { NewsComponent } from './content/main/news-categorys/news/news.component';
import { NewsCategoryComponent } from './content/main/news-categorys/news-category/news-category.component';
import { RegisteredComponent } from './content/main/contact/registered/registered.component';
import { ContactComponent } from './content/main/contact/contact.component';
import { LoginComponent } from './content/main/login/login.component';
import { RegisterUserComponent } from './content/main/register-user/register-user.component';

// Services
import { SliderService } from './shared/services/slider.service';
import { NewsCategorysService } from './shared/services/news-categorys.service';
import { ServiceService } from './shared/services/service.service';
import { RegisterUserService } from './shared/services/register-user.service';
import { AuthCustomerService } from './shared/gruads/auth-customer.service';
import { RegistrationService } from './shared/services/registration.service';

import { EscapeHtmlPipe } from './shared/pipes/keep-html.pipe';
import { ProfileCustomerComponent } from './content/profile-customer/profile-customer.component';
import { InfoAccountComponent } from './content/components-profile-customer/info-account/info-account.component';
import { HistoryComponent } from './content/components-profile-customer/history/history.component';
import { InfoWebsiteService } from './shared/services/info-website.service';
import { RegistrationComponent } from './content/components-profile-customer/registration/registration.component';
import { DoctorService } from './shared/services/doctor.service';
import { IntroduceComponent } from './content/main/introduce/introduce.component';
import { ListServicesPageComponent } from './content/main/components-service/list-services-page/list-services-page.component';
import { ServicePageComponent } from './content/main/components-service/service-page/service-page.component';
import { ChangePasswordComponent } from './content/components-profile-customer/change-password/change-password.component';
import { ContactService } from './shared/services/contact.service';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickModule.forRoot(),
    HttpModule,
    FormsModule,
    OrderModule,
    FacebookModule.forRoot()
  ],
  declarations: [
    HomeComponent, 
    HeaderComponent, 
    FooterComponent,
    ContentComponent,
    SliderComponent, 
    NewsCategorysComponent, 
    ListDoctorsComponent, 
    ListServicesComponent,
    SidebarComponent,
    MainComponent,
    NewsComponent,
    NewsCategoryComponent,
    RegisteredComponent,
    ContactComponent,
    LoginComponent,
    RegisterUserComponent,
    EscapeHtmlPipe,
    ProfileCustomerComponent,
    InfoAccountComponent,
    HistoryComponent,
    RegistrationComponent,
    IntroduceComponent,
    ListServicesPageComponent,
    ServicePageComponent,
    ChangePasswordComponent
  ],
  providers: [
    SliderService,
    NewsCategorysService,
    ServiceService,
    RegisterUserService,
    AuthCustomerService,
    InfoWebsiteService,
    DoctorService,
    RegistrationService,
    ContactService
  ]
})
export class HomeModule { }
