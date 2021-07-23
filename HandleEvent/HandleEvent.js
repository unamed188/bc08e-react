import React, { Component } from 'react'

export default class HandleEvent extends Component {
    

    handleClick = () =>{
        alert('Sĩ đẹp trai')
    }
    
    
    render() {
        let name = 'Bảo'

        return (
            <div className="container">
                handle event


                <button id="btn" >Click me
                </button>
            </div>
        )
    }
}
