import React, { Component } from "react";
import Cart from "./Cart";
import ProductListCart from "./ProductListCart";

export default class ExerciseCart extends Component {
  dataPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
      gioHang : [
          {maSP:0,tenSP:'I phone',giaBan:1000, soLuong:1,hinhAnh:'https://picsum.photos/200/200'}
      ]
  }

  themGioHang = (spClick) =>{
      console.log(spClick)
      //Khi click vào sản phẩm thêm vào thuộc tính số lượng
      let spGioHang = {...spClick,soLuong:1};
      //Lấy sản phẩm đó thêm vào mảng giỏ hàng
      let gioHangCapNhat = [...this.state.gioHang];
      
      //Kiểm tra sản phẩm vừa click có tồn tại trong mnảg giỏ hàng hay chưa
      let spGH = gioHangCapNhat.find(sp=>sp.maSP === spGioHang.maSP);

      if(spGH){//tìm thấy
        spGH.soLuong +=1; //tăng số lượng
    }else{//không tìm thấy
        gioHangCapNhat.push(spGioHang); //Thêm vào giỏ hàng
        //gioHangCapNhat=[...gioHangCapNhat,spGioHang];
    }

      //setState =>cập nhật lại giá trị mới cho giỏ hàng
      this.setState({
          gioHang:gioHangCapNhat
      })
  }

  xoaGioHang = (maSPClick) => {
      console.log('maSPClick',maSPClick);

      let {gioHang} = this.state;
    //   let index = gioHang.findIndex(sp=>sp.maSP === maSPClick);
    //   if(index !== -1) //Tìm thấy
    //   {
    //       gioHang.splice(index,1); //Tiến hành xóa phần tử tại vị trí tìm thấy
    //   }
    gioHang = gioHang.filter(sp => sp.maSP !== maSPClick)

      //Xử lý SetState => thay đổi giỏ hàng
      this.setState({
          gioHang:gioHang
      })
  }

  tangGiamSoLuong = (maSPClick,soLuong) => {
      let {gioHang} = this.state;

      let spTangGiam = gioHang.find(sp => sp.maSP === maSPClick);
      //Tìm ra sản phẩm tăng giảm
      if(spTangGiam){
          // 2 + -1 =1
          spTangGiam.soLuong += soLuong;
          if(spTangGiam.soLuong<1){
              alert('Số lượng tối thiểu là 1')
              spTangGiam.soLuong -= soLuong;
          }
      }
      this.setState({
          gioHang:gioHang
      })
  }
  tinhTongSoLuong = () => {
      let {gioHang} =this.state;

      let tongSoLuong = gioHang.reduce((soLuong, sanPham, index) => {
          return soLuong += sanPham.soLuong;
      },0);

      return tongSoLuong.toLocaleString();
  }

  tinhTongTien = () => {
    let {gioHang} =this.state;

    let tongTien = gioHang.reduce((thanhTien, sanPham, index) => {
        return thanhTien += sanPham.soLuong * sanPham.giaBan;
    },0);

    return tongTien.toLocaleString();
}

  render() {
    console.log(this.dataPhone)  
    return (
      <div className="container">
        <h3 className="text-center">Bài tập giỏ hàng</h3>
        <div className="text-right">
          <span
            style={{ cursor: "pointer" }}
            className="text text-danger font-weight-bold"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.tinhTongSoLuong()} - {this.tinhTongTien()})
          </span>
        </div>
        <Cart tangGiamSoLuong={this.tangGiamSoLuong} gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} />
        <ProductListCart themGioHang={this.themGioHang} mangSanPham={this.dataPhone} />
      </div>
    );
  }
}
