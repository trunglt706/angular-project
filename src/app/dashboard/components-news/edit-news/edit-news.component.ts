import { Component, OnInit} from '@angular/core';
import { SlideInOutAnimation } from '../../shared/animate/slide-down';
import { NewsService } from '../../shared/services/news.service';
import { CategoryNewsService } from '../../shared/services/category-news.service';
import { ActivatedRoute } from '@angular/router';
import { AuthCustomerService } from '../../../home/shared/gruads/auth-customer.service';
@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css'],
  animations: [SlideInOutAnimation]
})
export class EditNewsComponent implements OnInit {

  constructor(private newsService: NewsService, 
              private categoryNews: CategoryNewsService,
              private router: ActivatedRoute,
              private authService: AuthCustomerService) { }
  // id tin tức
  id_news: any;

  // id account
  id_account;

  // type account
  type_account;

  // nội dung tin tức
  dataNews: any;
  
  // danh sách loại tin tức
  listCategoryNews;

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
  
  onSubmit(formAddNews){

      // nếu form đã điền đủ thông tin
      if( formAddNews.valid ){
        const formData = new FormData();

        // Kiem tra file img 
        if (this.file_data == null) {
            this.file_data  = this.linkDefaultImg;
        }

        // data send to server
        formData.append('id_news', this.id_news);
        formData.append('title', formAddNews.value.title);
        formData.append('excerpt_news', formAddNews.value.excerpt);
        formData.append('describe_news', formAddNews.value.textNews);
        formData.append('file', this.file_data);
        formData.append('category', formAddNews.value.category);
        formData.append('status', formAddNews.value.status);
        formData.append('idUser', this.id_account);

        this.newsService.edit_news(formData)
        .then( res => {
          alert("Cập nhật thành công !!");
        });
        
      } else {
        console.log(formAddNews)
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
    // lấy id account đăng nhập
    this.id_account = JSON.parse(localStorage.getItem('currentUser')).id_account;

    // lấy type account đăng nhập
    this.type_account = JSON.parse(localStorage.getItem('currentUser')).type_account;

    // lấy id in tin tức
    this.id_news = this.router.snapshot.paramMap.get('id');
    
    // lấy nội dung tin tức
    this.newsService.get_news(this.id_news)
    .then( (res) => {
      this.dataNews = res;

      // cập nhập hình ảnh đại diện
      this.linkDefaultImg = this.dataNews[0].image_news;
      // cập nhật trạng thái
      this.chosenOption = this.dataNews[0].status;
    } )
    .then( () => {
      console.log(this.dataNews)
    } ); 

    // Lấy danh sách loại tin tức
    this.categoryNews.getAllCategory()
    .then(res => this.listCategoryNews = res )
  }

}
