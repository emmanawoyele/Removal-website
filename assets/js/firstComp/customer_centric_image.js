import React,{ Component } from "react"

export default class customer_centric_image extends Component{
    constructor(){
        super()
        this.state={}
    }

 
    
render(){
    return(
        <div  id="container-wrapper">
  <div className="Customer-centric">
                   <h4>Customer-centric services</h4>
                   <h2>Our Services</h2>
        < div className="col-md-3">
            
            <div className="Parking-parking">
                   <i className="fas fa-box"></i><a href="#"> Packing </a>
                 <p>We can recommend our packing services as part of 
                     a full-service move.
                      We’ll make sure you’re</p>
                      <div className="parking-storage">
                      <i class="fas fa-house-damage"></i><a href="#"> Insurance </a>
                          <p>MoveMe company offers professional warehouse spaces and
                               independence security guard</p>
                    
                      </div>
                 </div>

            <div className="Parking-parking">
                   <i className="fas fa-box-open"></i><a href="#"> Cleaning </a>
                      <p>We can recommend our packing services as part of 
                     a full-service move.
                      We’ll make sure you’re</p>
                      <div className="parking-storage">
                      <i class="fas fa-warehouse"></i><a href="#">storage</a>
                          <p>MoveMe company offers professional warehouse spaces and
                               independence security guard</p>
                   
                      </div>
                 </div>

                 <div className="Customer-centric-image" >
              {/* <img src="http://moveme.ancorathemes.com/wp-content/uploads/2017/03/image-39.jpg"/>*/}
            
                 <div className="text-inner-image">
                     <h6>Moving looks difficult?</h6>
                    <span>Have a question?</span>
                   <a href="#">Ask a moving expert</a>
              </div>
            </div>

         </div>

             </div>

        
        </div>

        
    )
}

}
