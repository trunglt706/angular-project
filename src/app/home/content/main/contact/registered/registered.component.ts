import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../../../shared/services/registration.service';
import { WorkingCalendarService } from '../../../../../dashboard/shared/services/working-calendar.service';
@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {
  content: any = '';
  alertSuccess: boolean = false;
  id_doctoc: any;

  // lịch khám 
  working_calendar: any;
  constructor(private registraionService: RegistrationService,
              private workingCalendarService: WorkingCalendarService) { }

  ngOnInit() {

    // lấy lịch khám của các bác sĩ
    this.workingCalendarService.getWorkingCalendarDoctors()
    .then( res => this.working_calendar = res )
    
  }
  onSubmit(formData){

    if(new Date(formData.value.date) < new Date()){
      alert("Thời gian không hợp lệ");
    } else if(formData.valid){
      // lấy thứ của ngày khám
      let date = new Date(formData.value.date);
      let day = date.getDay();

      // lấy buổi của ngày khám
      let section = this.getSection(formData.value.time);

      // lấy tên trường trong bảng tb_timetable (vd: tt2, ct2 ....)
      this.registraionService.getDoctor(this.getSectionOfDays(section, day))
      .then(res => {
        this.id_doctoc = res;

        var formDataSending = new FormData();

        formDataSending.append('name', formData.value.name);
        formDataSending.append('email', formData.value.email);
        formDataSending.append('phone', formData.value.phone);
        formDataSending.append('address', formData.value.address);
        formDataSending.append('date', formData.value.date);
        formDataSending.append('time', formData.value.time);
        formDataSending.append('content', this.content);
        formDataSending.append('id_doctor', this.id_doctoc);
        formDataSending.append('status', '0');
        return formDataSending;
      })
      .then( (formDataSending) => {
        this.registraionService.sendFormResgistration(formDataSending)
        .then( res => {
          this.alertSuccess = true;
          formData.resetForm();
        });
      });
    }

  }


  getSectionOfDays(section, day){

    switch(day) {
      // chủ nhật
      case 0: {
          // sáng 
          if ( section == 0 ) {
            return 'scn';
          }
          // chiều 
          else if ( section == 1 ) {
            return 'ccn';
          } else {
            return 'tcn';
          }
      }

      // thứ 2 
      case 1: {
        // sáng 
        if ( section == 0 ) {
          return 'st2';
        }
        // chiều 
        else if ( section == 1 ) {
          return 'ct2';
        } else {
          return 'tt2';
        }
      }

      // thứ 3 
      case 2: {
        // sáng 
        if ( section == 0 ) {
          return 'st3';
        }
        // chiều 
        else if ( section == 1 ) {
          return 'ct3';
        } else {
          return 'tt3';
        }
      }

      // thứ 4
      case 3: {
        // sáng 
        if ( section == 0 ) {
          return 'st4';
        }
        // chiều 
        else if ( section == 1 ) {
          return 'ct4';
        } else {
          return 'tt4';
        }
      }


      // thứ 5
      case 4: {
        // sáng 
        if ( section == 0 ) {
          return 'st5';
        }
        // chiều 
        else if ( section == 1 ) {
          return 'ct5';
        } else {
          return 'tt5';
        }
      }

      // thứ 6
      case 5: {
        // sáng 
        if ( section == 0 ) {
          return 'st6';
        }
        // chiều 
        else if ( section == 1 ) {
          return 'ct6';
        } else {
          return 'tt6';
        }
      }

      // thứ 7
      case 6: {
        // sáng 
        if ( section == 0 ) {
          return 'st7';
        }
        // chiều 
        else if ( section == 1 ) {
          return 'ct7';
        } else {
          return 'tt7';
        }
      }

    }

  }

  // Hàm lấy buổi (giá trị chuyền vào là thời trang hh:mm)
  getSection(time){
    let hour = parseInt(time.split(":")[0]);

    if( hour <= 12 ) {
      return 0;
    }
    else if( hour > 12 &&  hour < 18) {
      return 1;
    } else {
      return 2;
    }
  }

}
