import React,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class Pricing extends Component{
    constructor(props){
        super(props)

        this.state ={
            price:60,

        }
    }
    render(){
        return(
            <div id="container-wrapper">
                <div className="price_holder">
                <h5>Customer-centric services</h5>
            <h1>Our prices</h1>
     <div className="price_grid_system">
            <div className="price_grid">
        
                <div className="parking_service">
                    <div className="price-top"> 

                    <h2>packing service</h2> 
                    <div className="packing_service">
                      <span>$60</span>
                    </div>
                    
                       </div>
                     
                       <div className="details">
                           <p>Euismod tincidunt ut</p>
                           <p>Euismod tincidunt ut</p>
                           <p>Euismod tincidunt ut</p>
                           <p>Euismod tincidunt ut</p>
                       </div>
                    </div>
               </div>  
               <div className="price_grid">
        
                <div className="parking_service">
                    <div className="price-top"> 

                    <h2>packing service</h2> 
                    <div className="packing_service">
                      <span>$60</span>
                    </div>
                    
                       </div>
                     
                       <div className="details">
                           <p>Euismod tincidunt ut</p>
                           <p>Euismod tincidunt ut</p>
                           <p>Euismod tincidunt ut</p>
                           <p>Euismod tincidunt ut</p>
                       </div>
                    </div>
               </div>      
               <div className="price_grid">
        
        <div className="parking_service">
            <div className="price-top"> 

            <h2>packing service</h2> 
            <div className="packing_service">
              <span>$60</span>
            </div>
            
               </div>
             
               <div className="details">
                   <p>Euismod tincidunt ut</p>
                   <p>Euismod tincidunt ut</p>
                   <p>Euismod tincidunt ut</p>
                   <p>Euismod tincidunt ut</p>
               </div>
            </div>
       </div> 
          </div>
        

                </div>
          
            </div>
        )
    }
}
