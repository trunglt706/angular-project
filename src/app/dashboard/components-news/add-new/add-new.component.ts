import { Component, OnInit} from '@angular/core';
import { SlideInOutAnimation } from '../../shared/animate/slide-down';
import { NewsService } from '../../shared/services/news.service';
import { CategoryNewsService } from '../../shared/services/category-news.service';
import { AuthCustomerService } from '../../../home/shared/gruads/auth-customer.service';
import { AccountService } from '../../shared/services/account.service';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
  animations: [SlideInOutAnimation]
})
export class AddNewComponent implements OnInit {

  constructor(private newsService: NewsService, 
              private categoryNews: CategoryNewsService,
              private authService: AuthCustomerService,
              private accountService: AccountService) { }

  // id_account đăng nhập
  id_account;
  // type account người dùng đăng nhập
  type_account;

  listCategoryNews;
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
  
  onSubmit(formAddNews){
    console.log(formAddNews)
    //  kiểm tra đã chọn file hay chưa
    if( this.isType == true && this.file_data == null) {
      this.isType = false ; // hiển thị lỗi khi = false
      this.textErroFile = 'Vui lòng chọn hình ảnh';
    } else {
      // nếu form đã điền đủ thông tin
      if( formAddNews.valid ){
        const formData = new FormData();
        // data send to server
        formData.append('title', formAddNews.value.title);
        formData.append('excerpt_news', formAddNews.value.excerpt);
        formData.append('describe_news', formAddNews.value.textNews);
        formData.append('file', this.file_data);
        formData.append('category', formAddNews.value.category);
        formData.append('status', formAddNews.value.status);
        formData.append('idUser', this.id_account);

        this.newsService.insert_news(formData)
        .then( res => {
          formAddNews.resetForm();
          console.log(res)
        });
        
      } else {
        console.log(formAddNews)
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


  // Thêm chuyên mục
  addCategoryNews(formCategoryNews) {
    console.log(formCategoryNews)
    if(formCategoryNews.valid){
      this.categoryNews.addCategory(formCategoryNews.value)
      .then( (res) => { 
          // thông báo lỗi 
          if(res == 0){
             this.isErrAdd = true;
             alert("Tên chuyên mục đã tồn tại !!");
          }
        } )
      .then( () => ( formCategoryNews.resetForm() ))
      .then( () => {
        this.categoryNews.getAllCategory()
        .then(res => this.listCategoryNews = res )
      } )
    }
  }
  
  ngOnInit() {
    // lấy id account
    this.id_account = JSON.parse(localStorage.getItem('currentUser')).id_account;
    // lấy type_accoumt
    this.type_account = JSON.parse(localStorage.getItem('currentUser')).type_account;

    // tủy chỉnh option xét duyện 
    this.chosenOption = this.type_account == 1 ? '1' : '0';


    // Lấy danh sách loại tin tức
    this.categoryNews.getAllCategory()
    .then(res => this.listCategoryNews = res )
  }

}
