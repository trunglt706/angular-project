import { Component, OnInit} from '@angular/core';
import { SlideInOutAnimation } from '../../shared/animate/slide-down';
import { ServiceService } from '../../shared/services/service.service';
import { AuthCustomerService } from '../../../home/shared/gruads/auth-customer.service';

@Component({
  selector: 'app-add-new-service',
  templateUrl: './add-new-service.component.html',
  styleUrls: ['./add-new-service.component.css'],
  animations: [SlideInOutAnimation]
})
export class AddNewServiceComponent implements OnInit {

  constructor(private serviceService: ServiceService,
              private authSevice: AuthCustomerService) { }

  // id account người dùng đăng nhập
  id_account;
  // type_account người dùng đăng nhập
  type_account;

  // Status
  chosenOption: string = '0';
  formAddNews;
  isErrAdd: boolean = false;
  isType: boolean = true;
  textErroFile:String = 'Vui lòng chọn hình ảnh';

  // file ảnh đại diện
  file_data;

  // Tùy chỉnh Editor
  options: Object = {
    placeholderText: 'Nhập nội dung ở đây !!',
    height: 400,
    imageAllowedTypes: ['jpeg', 'jpg', 'png']
  }

  animationState = 'out';
  toggleShowDiv() {
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }

  animationCategory = 'out';
  toggleShowAddNewCaTeGoRy(){
    this.animationCategory = this.animationCategory === 'out' ? 'in' : 'out';
  }

  // submit
  
  onSubmit(formAddService){
    console.log(formAddService)
    //  kiểm tra đã chọn file hay chưa
    if( this.isType == true && this.file_data == null) {
      this.isType = false ; // hiển thị lỗi khi = false
      this.textErroFile = 'Vui lòng chọn hình ảnh';
    } else {
      // nếu form đã điền đủ thông tin
      if( formAddService.valid ){
        const formData = new FormData();
        // data send to server
        formData.append('title', formAddService.value.title);
        formData.append('excerpt_news', formAddService.value.excerpt);
        formData.append('describe_news', formAddService.value.textService);
        formData.append('file', this.file_data);
        formData.append('status', formAddService.value.status);
        formData.append('idUser', this.id_account);

        this.serviceService.insert_service(formData)
        .then( () => {
          formAddService.resetForm();
        });
        
      } else {
        console.log(formAddService)
      }
    }
    
  }
  // kiểm tra hình ảnh đại diện
  onChange(event) {
    this.file_data = event.target.files[0];
    // kiểm tra xem đã chọn ảnh chưa
    if( event.srcElement.files.length == 0 ){
      this.isType = false;
      this.textErroFile = 'Vui lòng chọn hình ảnh !!';
      this.file_data = null;
    // kiểm tra định dạng hình ảnh
    } else if( !( this.file_data['type'] == "image/jpeg"|| this.file_data['type'] == "image/jpg" ||   this.file_data['type'] == "image/png" ) ) {
      this.isType = false;
      this.textErroFile = 'Hình ảnh không hợp lệ !!';
      this.file_data = null;
    } else {
      this.isType = true;
    }
  }
  
  ngOnInit() {
   
    // lấy id người dùng đăng nhập
    this.id_account = JSON.parse(localStorage.getItem('currentUser')).id_account;
    // lấy type account người dùng đăng nhập
    this.type_account = JSON.parse(localStorage.getItem('currentUser')).type_account;
  }

}
