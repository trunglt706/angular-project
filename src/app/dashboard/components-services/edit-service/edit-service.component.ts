import { Component, OnInit} from '@angular/core';
import { SlideInOutAnimation } from '../../shared/animate/slide-down';
import { ServiceService } from '../../shared/services/service.service';
import { ActivatedRoute } from '@angular/router';
import { AuthCustomerService } from '../../../home/shared/gruads/auth-customer.service';
@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css'],
  animations: [SlideInOutAnimation]
})

export class EditServiceComponent implements OnInit {

  constructor(private serviceService: ServiceService, 
              private router: ActivatedRoute,
              private authSevice: AuthCustomerService) { }
  // id dịch vụ
  id_service: any;

  // id_account người dùng đăng nhập
  id_account;

  type_account;

  // nội dung dịch vụ
  dataService: any;
  

  // đường dẫn hình ảnh đại hiện
  linkDefaultImg: String;
  
  // Trạng thái
  chosenOption: string = '0';
  // formAddNews;

  // Err
  isErrAdd: boolean = false;
  
  // 
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

      // nếu form đã điền đủ thông tin
      if( formAddService.valid ){
        const formData = new FormData();

        // Kiem tra file img 
        if (this.file_data == null) {
            this.file_data  = this.linkDefaultImg;
        }

        // data send to server
        formData.append('id_service', this.id_service);
        formData.append('title', formAddService.value.title);
        formData.append('excerpt_service', formAddService.value.excerpt);
        formData.append('describe_service', formAddService.value.textNews);
        formData.append('file', this.file_data);
        formData.append('status', formAddService.value.status);
        formData.append('idUser', this.id_account);

        this.serviceService.edit_service(formData)
        .then( res => {

          alert("Cập nhật thành công !!");
        });
        
      } else {
        console.log('! submit')
      }
    
  
  }
  // kiểm tra hình ảnh đại diện
  onChange(event) {
    this.file_data = event.target.files[0];
    
    // kiểm tra định dạng hình ảnh
    if( !( this.file_data['type'] == "image/jpeg"|| this.file_data['type'] == "image/jpg" ||   this.file_data['type'] == "image/png" ) ) {
      this.isType = false;
      this.textErroFile = 'Hình ảnh không hợp lệ !!';
      this.file_data = null;

    } else {
      this.isType = true;

       // hiển thị ảnh thay đổi
       let ready = new FileReader();
      
       ready.onload = (e: any) => { this.linkDefaultImg = e.srcElement.result }
       ready.readAsDataURL(this.file_data);
    }
  }



  
  ngOnInit() {
    // lấy id account người dùng đăng nhập
    this.id_account = JSON.parse(localStorage.getItem('currentUser')).id_account;

    // lấy type account đăng nhập
    this.type_account = JSON.parse(localStorage.getItem('currentUser')).type_account;
    
    // lấy id in tin tức
    this.id_service = this.router.snapshot.paramMap.get('id');
    
    // lấy nội dung tin tức
    this.serviceService.get_service(this.id_service)
    .then( (res) => {
      this.dataService = res;

      // cập nhập hình ảnh đại diện
      this.linkDefaultImg = this.dataService[0].image_service;
      // cập nhật trạng thái
      this.chosenOption = this.dataService[0].status;
    } ); 

  }

}
