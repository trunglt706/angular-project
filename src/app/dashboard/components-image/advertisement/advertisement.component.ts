import { Component, OnInit } from '@angular/core';
import { ImageAdvertisementService } from '../../shared/services/image-advertisement.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  constructor(private imageService: ImageAdvertisementService) { }

  dataSlider = new Array();

  


  // thay đổi hình ảnh slider
  ngChangeSlider(name: String, index, event){
    console.log(name, index);
    console.log(this.dataSlider);
    let file_data = event.target.files[0];
    
    // kiểm tra định dạng hình ảnh
    if( !(file_data['type'] == "image/gif"|| file_data['type'] == "image/jpeg"|| file_data['type'] == "image/jpg" || file_data['type'] == "image/png" ) ) {
      
      file_data = null;

    } else {
      // hiển thị ảnh thay đổi
      let ready = new FileReader();
    
      ready.onload = (e: any) => { 
      
      // gán link_img
      this.dataSlider[index].link_img = e.srcElement.result;

      // gán data
      this.dataSlider[index].data = file_data;
      }
      ready.readAsDataURL(file_data);
    }
    console.log(this.dataSlider);
  }

  // thêm slider
  addSlider(){
    let countSlider:Number = this.dataSlider.length + 1;

    this.dataSlider.push({name: countSlider, link_img: '', data: ''});
    console.log(this.dataSlider);
  }

  deleteSlider(index) {
    // xóa phần tử
    console.log(this.dataSlider, index);
    this.dataSlider.splice(index, 1);
  }
  

  onSubmit(){
    console.log(this.dataSlider);
    let formData = new FormData();

    let index:any = 1;
    this.dataSlider.forEach(element => {
      // kiểm tra xem data có rỗng không. Nếu rỗng thì lấy link_img
      if( element.data == '' ){

        // khi nhấn thêm slider mà k chọn ảnh
        if(element.link_img != '') {
          formData.append(index, element.link_img);
          index++;
        }
      } else {
        formData.append(index, element.data);
        index++;
      }
    });



    this.imageService.add_advertisement(formData)
    .then( res => alert("Cập nhật thành công !!"))
  }

  
  ngOnInit() {
    let getData;
    this.imageService.get_advertisement()
    .then(res => {
      // lấy dữ liệu
      res.forEach(element => {
        this.dataSlider.push({name: element.order_num, link_img: element.link_img, data: ''})
      });
    });
  }
}

// copy bên slider ^_^

// lấy dữ liệu từ sever sau đó sắp xếp lại thứ tự theo id tăng tằng trong csdl

// hàm deleteSlider biến "index" lấy đúng theo vị trí của dataSlider (đã kiểm tra r)

// hàm addSlider biến "i" lấy đúng theo vị trí của dataSlider (đã kiểm tra r)

// biến "name" trong dataSlider là trường order_num trong csdl

// hàm addSlider có nguy cơ sai nhiều nhất vì khi xóa ở những cái đầu thì dẫn đến tính biến name sai. 