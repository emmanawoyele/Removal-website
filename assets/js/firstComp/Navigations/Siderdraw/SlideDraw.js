import React, { Component } from 'react'

class SlideDraw extends Component {
    constructor (props) {
        super(props)
        this.state = {
          name:'Emmauel',
         
         
        }
        
    }



  
    render() { 
      {/*  let drawerClasses='side-drawer';
        if(this.props.show){
            drawerClasses='side-drawer open' };
        */}
       
        return ( <nav className='side-drawer'  >

            <ul>
                <li><a herf="#"  onClick={this.changeColors}>About</a></li>
                <li><a herf="#" onClick={this.changeColor}>Service</a></li>
                <li><a herf="#" onClick={this.changeColor}>Price</a></li>
                <li><a herf="#" onClick={this.changeColor}>Contact us</a></li>
            </ul>
            <div className="closer" onClick={this.props.closer}>X</div>
            
        </nav> );
    }
}
 
export default SlideDraw;