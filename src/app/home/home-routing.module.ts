import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { MainComponent } from './content/main/main.component';
import { SliderComponent } from './content/main/slider/slider.component';
import { NewsCategorysComponent } from './content/main/news-categorys/news-categorys.component';
import { ListDoctorsComponent } from './content/main/list-doctors/list-doctors.component';
import { ListServicesComponent } from './content/main/list-services/list-services.component';
import { NewsComponent } from './content/main/news-categorys/news/news.component';
import { NewsCategoryComponent } from './content/main/news-categorys/news-category/news-category.component';
import { RegisteredComponent } from './content/main/contact/registered/registered.component';
import { ContactComponent } from './content/main/contact/contact.component';
import { LoginComponent } from './content/main/login/login.component';
import { RegisterUserComponent } from './content/main/register-user/register-user.component';
import { ProfileCustomerComponent } from './content/profile-customer/profile-customer.component';
import { InfoAccountComponent } from './content/components-profile-customer/info-account/info-account.component';
import { HistoryComponent } from './content/components-profile-customer/history/history.component';
import { AuthCustomerGuard } from '../home/shared/gruads/auth-customer.guard';
import { ListServicesPageComponent } from './content/main/components-service/list-services-page/list-services-page.component';
import { RegistrationComponent } from './content/components-profile-customer/registration/registration.component';
import { IntroduceComponent } from './content/main/introduce/introduce.component';
import { ServicePageComponent } from './content/main/components-service/service-page/service-page.component';
import { ChangePasswordComponent } from './content/components-profile-customer/change-password/change-password.component'; 

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ContentComponent,
        children: [
          {
            path: '',
            component: MainComponent,    
          },
          {
            path: '',
            component: SliderComponent,
            outlet: 'slider'  
          },
          {
            path: 'news-categorys',
            component: NewsCategorysComponent,
          },
          {
            path: 'news-categorys/:id',
            component: NewsCategoryComponent,
          },
          {
            path: 'news-categorys/:id-category/:id',
            component: NewsComponent,
          },
          // liên hệ
          {
            path: 'contact',
            component:  ContactComponent,
              
          },
          // đăng kí khám
          {
            path: 'registration',
            component:  RegisteredComponent,
          },
          // Đăng nhập
          {
            path: 'login',
            component:  LoginComponent
          },
          // Đăng kí User
          {
            path: 'register',
            component:  RegisterUserComponent
          },
          // giới thiệu
          {
            path: 'introduce',
            component:  IntroduceComponent
          },
          // Profile Customer
          {
            path: 'profile-customer',
            component: ProfileCustomerComponent,
            canActivate: [AuthCustomerGuard],
            children: [
              {
                path: '',
                redirectTo: 'info-account',
                pathMatch: 'full'
              },
              // thong tin tài khoản
              {
                path: 'info-account',
                component: InfoAccountComponent
              },
              // lịch sử khám
              {
                path: 'history',
                component: HistoryComponent
              },
              // đăng kí lịch khám
              {
                path: 'registration',
                component: RegistrationComponent
              },
              // thẩy đổi mật khẩu
              {
                path: 'change-password',
                component: ChangePasswordComponent
              }
            ]
          },
          // list-services-page
          {
            path: 'list-services',
            children: [
              {
                path: '',
                component: ListServicesPageComponent
              },
              // service-detail
              {
                path: 'detail-service/:id',
                component: ServicePageComponent
              }
            ]
          }


        ]
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
