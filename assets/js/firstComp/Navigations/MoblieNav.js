import React, { Component } from 'react';
import ButtonDrawer from './Siderdraw/buttonDrawer';
class MoblieNav extends Component {
    constructor (props) {
        super(props)
        this.state = {
          name:'Emmauel'
         
        }
    }
    render() { 
        return (  <header className="toolbar">
            <nav className="toolbar_navigation">
               

            <div></div>
            <div className="toolbar_logo"><a href="#">The Logo</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Price</a></li>
                    <li><a href="#">Contact</a></li>



                </ul>

            </div>
           
            </nav>
            
        </header>);
    }
}
 
export default MoblieNav;
