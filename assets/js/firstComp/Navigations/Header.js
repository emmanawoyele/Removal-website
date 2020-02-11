import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ButtonDrawer from'./Siderdraw/buttonDrawer';
import {Link, Redirect} from 'react-router-dom';

export default class Header extends Component{
    constructor(props){
        super(props)

        this.state ={
            

           
        }
      
        
    }

 

    render(){
        const navStyle= {
         
           
            
            textDecoration: 'none',
            color:'#5c524b',

          
        };
      
     
        
        return(
            <div id ="container-wrapper" >
                <div className="Nav-bar">
                  <img className="Logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChWl0l8UcVwx8_etIpYakpTJT4xOGi84kq09Avn-trB1s5rqa&s"/>
                    <div className="Nav-links">
                        <ul>
                      
                                <li>
                                <Link style={navStyle} to ="/">Home  </Link>
                                </li>
                          
                                <li>
                                <Link style={navStyle} to ="/about">about  </Link>
                                </li>

                                <li >
                                <Link style={navStyle} to ="/Service">Service </Link>
                                </li>
                                
                                <li>
                                <Link style={navStyle} to ="/Pricing">Pricing  </Link>
                                </li>

                                <li>
                                <Link style={navStyle} to ="/Contact">Contact us </Link>
                                </li>
                        </ul>

                    </div>
                 <ButtonDrawer click={this.props.drawerClickhandler}/>
                </div>
              
            </div>
        )
    }
}
