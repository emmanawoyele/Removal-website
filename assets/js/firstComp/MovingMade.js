import React,{Component} from 'react';

export default class MovingMade extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div id="Moving-wrapper">
                <div id="container-wrapper" className="Moving-made">
                    <div className="inner-wrapper">
                        <h6> Our moving process</h6>
                    <h1>Moving is easy</h1>
                    <div className="Moving-icons-container">
                    <div className="icons"> 
                    <i className="fas fa-tablet-alt our-icons"></i><span>Book our service
                        <i className="fas fa-arrow-right"></i>
                        </span>
                  
                    </div>

                    <div className="icons">
                    <i className="fas fa-box our-icons"></i><span>we pack your goods
                    <i className="fas fa-arrow-right"></i></span>
                    </div>

                    <div className="icons">
                    <i className="fas fa-truck-moving our-icons"></i><span>we move your goods
                    <i className="fas fa-arrow-right"></i></span>
                    </div>

                    <div className="icons">
                    <i className="fas fa-box-open our-icons"></i><span>Book our service</span>
                    
                    </div>

                    </div>
                    

                    </div>
                   

                </div>
          
            </div>
        )
    }
}
