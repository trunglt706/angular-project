import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../shared/services/doctor.service';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../../shared/services/registration.service';
@Component({
  selector: 'app-edit-registration',
  templateUrl: './edit-registration.component.html',
  styleUrls: ['./edit-registration.component.css']
})
export class EditRegistrationComponent implements OnInit {
  alertSuccess:boolean = false;
  listDoctor: any;

  // tham số trên url
  id_registration: any;

  // thông tin đăng kí khám
  infoRegistration: any;

  // bác sĩ khám
  doctorOption: any;

  // nội dung 
  content: any;
  constructor(private doctorService: DoctorService,
              private router: ActivatedRoute,
              private registrationSevice: RegistrationService) { }
  
  ngOnInit() { 

    // lấy danh sách các bác sĩ
    this.doctorService.getDoctors()
    .then( res => {
      this.listDoctor = res
    })

    // lấy id của đăng kí khám
    this.id_registration = this.router.snapshot.paramMap.get('id');
   
    // lấy thông tin đăng kí khám
    this.registrationSevice.getRegisraion(this.id_registration)
    .then( res => {
      this.infoRegistration = res;

      // lấy id bác sĩ khám
      this.doctorOption = this.infoRegistration.doctor;

      // lấy nội dung đăng kí khám
      this.content = this.infoRegistration.content;
    })
  }

  onSubmit(formData){
    
    if(formData.valid && formData.dirty){

      let data = new FormData;
      data.append('id', this.id_registration);
      data.append('name', formData.value.name);
      data.append('phone', formData.value.phone);
      data.append('email', formData.value.email);
      data.append('address', formData.value.address);
      data.append('time', formData.value.time);
      data.append('date', formData.value.date);
      data.append('doctor', formData.value.doctor);
      data.append('content', formData.value.content);
      data.append('status', '0');
      //gửi thông tin để cập nhật
      this.registrationSevice.updateRegisraion(data)
      .then( () => {
        this.alertSuccess = true;
      });
    }
  }
  

}
