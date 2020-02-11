import React ,{ Component } from "react";
import ReactDOM from 'react-dom';


export default class Services extends Component{
    constructor(){
        super()

        this.state ={

           
        }
      
        
    }

 

    render(){
    
        return(

            <div id="container-wrapper">

                <div id="service_types">
 <div className="service-title">
     <h1>
     Customer-centric services
     </h1>
     
 
     <p>
     We can help you with:  
     </p>
 </div>
 <div className="images-service">
        {/*Start of Box 1*/}
 <div className="box-container">
     <div className="box-inner">
<div className="service1">
    
       <div className="inner-text">
           <h5> <a href="#">More Aboard</a></h5>
            <span className= "inner-text-price">from $1000</span>
        </div> 
</div>
       {/*  start filp image*/}
       <div className="service1-flip">
         <div className="back-text">
             <h5> <a href="#">Moving</a></h5>
              <span>from $600</span>
              <p>
              your moving can be stressful, in order for us to provide level of service
              </p>
              <a className="info-btn" href ="#">Info</a>
        </div>
       </div>
        {/* end filp image*/}
</div>
     </div>
     {/*End of Box 1*/}


       {/*Start of Box 2*/}
 <div className="box-container">
     <div className="box-inner">
<div className="service2">
    
       <div className="inner-text">
           <h5> <a href="#">More Aboard</a></h5>
            <span className= "inner-text-price"> from $1000</span>
        </div> 
</div>
       {/*  start filp image*/}
       <div className="service2-flip">
         <div className="back-text">
             <h5> <a href="#">Moving</a></h5>
              <span>from $600</span>
              <p>
              your moving can be stressful, in order for us to provide level of service
              </p>
              <a className="info-btn" href ="#">Info</a>
        </div>
       </div>
        {/* end filp image*/}
</div>
     </div>
     {/*End of Box 2*/}

   {/*Start of Box 3*/}
   <div className="box-container">
     <div className="box-inner">
<div className="service3">
    
       <div className="inner-text">
           <h5> <a href="#">More Aboard</a></h5>
            <span className="inner-text-price">from $1000</span>
        </div> 
</div>
       {/*  start filp image*/}
       <div className="service3-flip">
         <div className="back-text">
             <h5> <a href="#">Moving</a></h5>
              <span>from $600</span>
              <p>
              your moving can be stressful, in order for us to provide level of service
              </p>
              <a className="info-btn" href ="#">Info</a>
        </div>
       </div>
        {/* end filp image*/}
</div>
     </div>
     {/*End of Box 3*/}
 </div>
 
 <div className="btn-moving">
     <a href="#">MORE Moving serviceS</a>
 </div>
 </div>
            </div>
           
        )

}
}





