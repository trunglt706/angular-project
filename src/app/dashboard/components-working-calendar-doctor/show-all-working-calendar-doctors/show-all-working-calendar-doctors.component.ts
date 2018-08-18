import { Component, OnInit } from '@angular/core';
import { WorkingCalendarService } from '../../shared/services/working-calendar.service';

@Component({
  selector: 'app-show-all-working-calendar-doctors',
  templateUrl: './show-all-working-calendar-doctors.component.html',
  styleUrls: ['./show-all-working-calendar-doctors.component.css']
})
export class ShowAllWorkingCalendarDoctorsComponent implements OnInit {

  working_calendar: any;
  id_doctor;
  constructor(
    private workingCalendarService: WorkingCalendarService) { }
    
  ngOnInit() {

    this.workingCalendarService.getWorkingCalendarDoctors()
    .then( res => this.working_calendar = res )
  }


  

}
