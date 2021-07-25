import React, { Component } from 'react'

export default class ProductItemCart extends Component {
    render() {
        let {sp,themGioHang} = this.props;
        return (
            <div className="card">
                <img style={{height:350}} src={sp.hinhAnh} alt="..."></img>
                <div className="card-body">
                    <h3>{sp.tenSP}</h3>
                    <p>{sp.giaBan.toLocaleString()}</p>
                    <button className="btn btn-danger" onClick={()=>{
                        //Clicl vào gọi lại hàm themGioHang
                        themGioHang(sp)
                    }}>Thêm giỏ hàng</button>
                    {/* <button className="btn btn-success">Xem chi tiết</button> */}
                </div>
            </div>
        )
    }
}
