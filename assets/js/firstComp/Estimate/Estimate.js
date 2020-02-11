import React ,{ Component } from "react";
import ReactDOM from 'react-dom';
import Services from './Services';
import { Redirect } from "react-router";


export default class Estimate extends Component{
    constructor(){
        super()

        this.state ={

           
        }
      
        
    }

 

    render(){
      
        return(

            <div>
            <div className="estimate">
                <div className="estimate-container">

                    <span className="estimate-title">Get Your Free moving estimate</span>
                    <h1>Request a quote</h1>
                    <div className="form-container">
                   <form>
                   
                   <div className=" col-md-2">
                   <label>
                           Move Type <br/>
                           <select>
                           <option value="Local">Local</option>
                           <option value="Europe">Europe</option>
                           </select>
                       </label>
                   </div>
                     
                    <div className=" col-md-2">
                    <label>
                           From  <br/>
                           <input type="text" placeholder="City/State"></input>
                       </label>
                    </div>
            
                      
                       <div className="col-md-2">
                         <label>
                           To <br/>
                           <input type="text" placeholder="City/State"></input>
                         </label>
                       </div>
                     
                       <div className="col-md-2">
                           <label>
                             Home Size <br/>
                            <input  type="number" placeholder="0"></input>
                       </label>

                       </div>
                      
                       <div className="col-md-2">
                           <label>
                           Date <br/>
                           <input type="date"></input>
                            </label>
                       </div>

                       <div className="col-md-2">
                     
                       <input type="submit" value="Submit"/>
                           

                      {/* <input type="submit" value="Submit"/>*/}
                    
                       </div>


                   </form>

                </div>
                </div>
           
 
            </div>
            <Services />
            </div>
           
        )

}
}





