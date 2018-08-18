import { Component, OnInit } from '@angular/core';
import { CategoryNewsService } from '../../shared/services/category-news.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  listCategoryNews;
  isEdit: boolean = true;
  isErrAdd: boolean = false;

  //sorting
  key: string = 'name_category'; //set default
  reverse: boolean = false;
  sort(key){
    if( this.key == key ) {
      this.reverse = !this.reverse;
    } else {
      this.key = key;
    }
  }
  
  constructor(private categoryNews: CategoryNewsService) { }

  ngOnInit() {
    this.categoryNews.getAllCategory()
    .then(res => this.listCategoryNews = res )
  }

  // thêm
  onSubmit(formCategoryNews){
    if(formCategoryNews.valid){
      this.categoryNews.addCategory(formCategoryNews.value)
      .then( (res) => { 
          // thông báo lỗi 
          if(res == 0){
             this.isErrAdd = true;
          }
        } )
      .then( () => ( formCategoryNews.resetForm() ))
      .then( () => {
        this.categoryNews.getAllCategory()
        .then(res => this.listCategoryNews = res )
      } )
    }
  }

  // Xóa 
  delete(id: Number){
    // Thông báo xóa
    if(confirm("Bạn thực sự muốn xóa !!")) {
      this.categoryNews.delete(id)
      .then( () => {
        this.categoryNews.getAllCategory()
        .then(res => this.listCategoryNews = res )
      } )
    }
  }

  // Chỉnh sửa
  showEdit(){
    this.isEdit = !this.isEdit; 
  }
  // Lưu chỉnh sửa
  edit(id: Number){
    // tìm phần tử trong mảng với id chuyền vào
    let Item = this.listCategoryNews.find( function(item){
      return item.id_category == id;
    });
    this.categoryNews.edit(Item.id_category, Item.name_category)
    .then( () => {
      // Update lại từ CSDL
      this.categoryNews.getAllCategory()
      .then(res => this.listCategoryNews = res )
    })
  }
  
  changeValue(id_category: Number, event){
    // Thay đổi giá trị trong object
    this.listCategoryNews.find( function(item){
      if(item.id_category == id_category) {
        item.name_category = event.target.value;
      }
    });

    

  }




}
