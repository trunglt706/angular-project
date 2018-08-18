import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthCustomerGuard } from '../home/shared/gruads/auth-customer.guard';
import { AddNewComponent } from './components-news/add-new/add-new.component';
import { ShowAllComponent } from './components-news/show-all/show-all.component';
import { AddCategoryComponent } from './components-news/add-category/add-category.component';
import { AddNewServiceComponent } from './components-services/add-new-service/add-new-service.component';
import { ShowAllServiceComponent } from './components-services/show-all-service/show-all-service.component';
import { EditNewsComponent } from './components-news/edit-news/edit-news.component';
import { EditServiceComponent } from './components-services/edit-service/edit-service.component';
import { ShowAllUserComponent } from './components-account/show-all-user/show-all-user.component';
import { RegisterUserComponent } from './components-account/register-user/register-user.component';
import { IntroduceWebsiteComponent } from './components-info-website/introduce-website/introduce-website.component';
import { AllInfoWebsiteComponent } from './components-info-website/all-info-website/all-info-website.component'
import { SliderComponent } from './components-image/slider/slider.component';
import { AdvertisementComponent } from './components-image/advertisement/advertisement.component';
import { UpdateWorkingCalendarComponent } from './components-working-calendar-doctor/update-working-calendar/update-working-calendar.component';
import { EditUserComponent } from './components-account/edit-user/edit-user.component';
import { ShowAllWorkingCalendarDoctorsComponent } from './components-working-calendar-doctor/show-all-working-calendar-doctors/show-all-working-calendar-doctors.component';
import { MyAccountInfoComponent } from './components-account/my-account-info/my-account-info.component';
import { PasswordChangingComponent } from './components-account/password-changing/password-changing.component';
import { ShowRegistrationComponent } from './components-registration/show-registration/show-registration.component';
import { EditRegistrationComponent } from './components-registration/edit-registration/edit-registration.component';
import { ShowContactComponent } from './components-contact/show-contact/show-contact.component';
import { SeeContactComponent } from './components-contact/see-contact/see-contact.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthCustomerGuard],
        children: [
            {
                path:'',
                component: MainComponent
            },
            // news
            {
                path:'add-news',
                component: AddNewComponent
            },
            {
                path:'edit-news/:id',
                component: EditNewsComponent
            },
            {
                path:'show-all-news',
                component: ShowAllComponent
            },
            {
                path: 'add-category-news',
                component: AddCategoryComponent
            },
            // services
            {
                // Thêm service
                path:'add-new-service',
                component: AddNewServiceComponent
            },
            {   
                // Hiển thị service
                path:'show-all-service',
                component: ShowAllServiceComponent
            },
            {   
                // Chỉnh sửa service
                path:'edit-service/:id',
                component: EditServiceComponent
            }, 
            // account
            {   
                // hiển thị người dùng
                path:'show-all-user',
                component: ShowAllUserComponent
            },
            {   
                // tạo mới người dùng
                path:'register-user',
                component: RegisterUserComponent
            }, 
            {
                // chỉnh sửa người dùng
                path:'edit-user/:id',
                component: EditUserComponent
            },
            {
                // thông tin tài khoản của tôi
                path:'my-account-info',
                component: MyAccountInfoComponent
            },
            {
                // thay đổi mật khẩu tài khoản của tôi
                path:'password-changing',
                component: PasswordChangingComponent
            },
            // giới thiệu website
            {   
                // trang giới thiệu website
                path:'introduce-website',
                component: IntroduceWebsiteComponent
            },
            {   
                // tất cả thông tin webstie
                path:'all-info-website',
                component: AllInfoWebsiteComponent
            },
            // hình ảnh (slider, quảng cáo)
            {
                // slider
                path:'slider',
                component: SliderComponent
            },
            {
                // quảng cáo
                path:'advertisement',
                component: AdvertisementComponent
            },
            {
                // cập nhật lịch làm việc của bác sĩ
                path:'update-working-calendar',
                component: UpdateWorkingCalendarComponent
            },
            {
                // hiển thị lịch khám của tất cả bác sĩ
                path:'show-all-working-calendar-doctors',
                component: ShowAllWorkingCalendarDoctorsComponent
            },
            {
                // hiển thị danh sách đăng kí khám
                path:'show-registration',
                component: ShowRegistrationComponent
            },
            {
                // xem đăng kí khám
                path:'edit-registration/:id',
                component: EditRegistrationComponent
            },
            {
                // hiện đi danh sách liên hệ
                path:'show-contact',
                component: ShowContactComponent
            },
            {
                // xem liên hệ
                path:'see-contact/:id',
                component: SeeContactComponent
            },
            
        ]
    },
    
]

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
  })

export class DashboardRoutingModule{}