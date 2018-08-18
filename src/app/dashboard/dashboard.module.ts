import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AuthCustomerGuard } from '../home/shared/gruads/auth-customer.guard';

import { ArraySortPipe } from './shared/pipes/sort.pipe';
import { SearchCategoryNewsPipe } from './shared/pipes/searchCategoryNews.pipe';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddNewComponent } from './components-news/add-new/add-new.component';
import { ShowAllComponent } from './components-news/show-all/show-all.component';
import { AddCategoryComponent } from './components-news/add-category/add-category.component';
import { NewsService } from './shared/services/news.service';
import { CategoryNewsService } from './shared/services/category-news.service';
import { ShowAllServiceComponent } from './components-services/show-all-service/show-all-service.component';
import { AddNewServiceComponent } from './components-services/add-new-service/add-new-service.component';
import { ServiceService } from './shared/services/service.service';
import { SearchNewsPipe } from './shared/pipes/search-news.pipe';
import { EditNewsComponent } from './components-news/edit-news/edit-news.component';
import { EditServiceComponent } from './components-services/edit-service/edit-service.component';
import { SearchServicePipe } from './shared/pipes/search-service.pipe';
import { ShowAllUserComponent } from './components-account/show-all-user/show-all-user.component';
import { AccountService } from './shared/services/account.service';
import { RegisterUserComponent } from './components-account/register-user/register-user.component';
import { AllInfoWebsiteComponent } from './components-info-website/all-info-website/all-info-website.component';
import { IntroduceWebsiteComponent } from './components-info-website/introduce-website/introduce-website.component';
import { InfoWebsiteService } from './shared/services/info-website.service';
import { SliderComponent } from './components-image/slider/slider.component';
import { AdvertisementComponent } from './components-image/advertisement/advertisement.component';
import { ImageAdvertisementService } from './shared/services/image-advertisement.service';
import { OrderModule } from 'ngx-order-pipe';
import { UpdateWorkingCalendarComponent } from './components-working-calendar-doctor/update-working-calendar/update-working-calendar.component';
import { WorkingCalendarService } from './shared/services/working-calendar.service';
import { SearchAccountPipe } from './shared/pipes/search-account.pipe';
import { EditUserComponent } from './components-account/edit-user/edit-user.component';
import { ShowAllWorkingCalendarDoctorsComponent } from './components-working-calendar-doctor/show-all-working-calendar-doctors/show-all-working-calendar-doctors.component';
import { MyAccountInfoComponent } from './components-account/my-account-info/my-account-info.component';
import { PasswordChangingComponent } from './components-account/password-changing/password-changing.component';
import { ShowRegistrationComponent } from './components-registration/show-registration/show-registration.component';
import { RegistrationService } from './shared/services/registration.service';
import { SearchRegistrationPipe } from './shared/pipes/search-registration.pipe';
import { EditRegistrationComponent } from './components-registration/edit-registration/edit-registration.component';
import { DoctorService } from './shared/services/doctor.service';
import { ShowContactComponent } from './components-contact/show-contact/show-contact.component';
import { SearchContactPipe } from './shared/pipes/search-contact.pipe';
import { SeeContactComponent } from './components-contact/see-contact/see-contact.component';
import { MainComponent } from './main/main.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    
    BrowserAnimationsModule,
    FormsModule,
    OrderModule,
    NgxPaginationModule
  ],
  declarations: [
    SearchCategoryNewsPipe, 
    ArraySortPipe,
    DashboardComponent, 
    HeaderComponent, 
    SidebarComponent, 
    AddNewComponent, 
    ShowAllComponent, 
    AddCategoryComponent, 
    ShowAllServiceComponent, 
    AddNewServiceComponent,
    SearchNewsPipe,
    EditNewsComponent,
    EditServiceComponent,
    SearchServicePipe,
    ShowAllUserComponent,
    RegisterUserComponent,
    AllInfoWebsiteComponent,
    IntroduceWebsiteComponent,
    SliderComponent,
    AdvertisementComponent,
    UpdateWorkingCalendarComponent,
    SearchAccountPipe,
    EditUserComponent,
    ShowAllWorkingCalendarDoctorsComponent,
    MyAccountInfoComponent,
    PasswordChangingComponent,
    ShowRegistrationComponent,
    SearchRegistrationPipe,
    EditRegistrationComponent,
    ShowContactComponent,
    SearchContactPipe,
    SeeContactComponent,
    MainComponent
  ],
  providers: [AuthCustomerGuard, 
    NewsService, 
    CategoryNewsService, 
    ServiceService, 
    AccountService, 
    InfoWebsiteService, 
    ImageAdvertisementService, 
    WorkingCalendarService,
    RegistrationService, 
    DoctorService]
})
export class DashboardModule { }
