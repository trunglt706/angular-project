import { Component, OnInit } from '@angular/core';
import { WorkingCalendarService } from '../../shared/services/working-calendar.service';
import { AuthCustomerService } from '../../../home/shared/gruads/auth-customer.service';
@Component({
  selector: 'app-update-working-calendar',
  templateUrl: './update-working-calendar.component.html',
  styleUrls: ['./update-working-calendar.component.css']
})
export class UpdateWorkingCalendarComponent implements OnInit {

  working_calendar: any;
  id_doctor;
  constructor(
    private workingCalendarService: WorkingCalendarService,
    private auth: AuthCustomerService) { }
    
  ngOnInit() {
    
    this.id_doctor = JSON.parse(localStorage.getItem('currentUser')).id_account;
    this.workingCalendarService.getWorkingCalendarDoctor(this.id_doctor)
    .then(res => {this.working_calendar = res; console.log(this.working_calendar)})

  }

  submit(form) {
    console.log(form.value);
    this.workingCalendarService.updateWorkingCalendarDoctor(this.id_doctor, form.value)
    .then( res => alert("Cập nhật thành công !!") );
  }

  

}
