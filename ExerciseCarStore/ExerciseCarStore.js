import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'
export default class ExerciseCarStore extends Component {
    products = [
        { id: 1, name:'black car', img:'./img/CarBasic/products/black-car.jpg', price: 1000 },
        { id: 2, name:'red car', img:'./img/CarBasic/products/red-car.jpg', price: 2000 },
        { id: 3, name:'silver car', img:'./img/CarBasic/products/silver-car.jpg', price: 3000 },
        { id: 3, name:'Steel car', img:'./img/CarBasic/products/steel-car.jpg', price: 4000 }
        ];

        state ={
            productDetail:{id: 1, name:'black car', img:'./img/CarBasic/products/black-car.jpg', price: 1000 }
        }

        viewDetail = (itemClick) => {
            console.log(itemClick);
            this.setState({
                productDetail:itemClick
            })
        }


    render() {
        return (
            <div className="container">
                <h3>Danh sách sản phẩm</h3>
                <ProductList viewDetail={this.viewDetail}  productsData={this.products} />
                <Modal productDetail={this.state.productDetail}/>
            </div>
        )
    }
}
