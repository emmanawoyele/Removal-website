import React ,{Component} from 'react';




export default class Footer extends Component{
    constructor(){
        super()
        this.state={

        }
   
   
    }

    render(){
 
        return(
           
     <div className="footer-wrapper" >
            <div   id="container-wrapper" className="footer">
                <div className="footer-container">
                    <div className="footer-address">
                      <h1>Address</h1>
                      <span>123, New Lenox
                          Chicago, IL 60606</span>

                  </div>

                  <div className="footer-social">
                      <h1>Address</h1>
                      <span>  
                          <a href="#"><i class="fab fa-facebook-f"></i></a>
                          </span>

                          <span>
                          <a href="#"><i class="fab fa-twitter"></i></a>
                          </span>
                     <span>
                     <a href="#"><i class="fab fa-google-plus-g"></i></a>
                     </span>
                      
                  </div>

                  <div className="footer-contacts">
                      <h1>Contact</h1>
                      <span>123, New Lenox
                          Chicago, IL 60606</span>

                  </div>
                </div>
        </div>
         
           
        
            </div>
        )
    }
}