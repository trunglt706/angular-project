import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../shared/services/doctor.service';
@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit {
  listDoctors: any;
  constructor(private doctorService: DoctorService) { }

  ngOnInit() {

    // lấy danh sách bác sĩ
    this.doctorService.getListDoctors()
    .then( res => this.listDoctors = res)
  }

}
