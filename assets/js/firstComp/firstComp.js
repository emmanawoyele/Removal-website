import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Top from './Navigations/Top.js';
import Header from './Navigations/Header.js';
import ButtonDraw from'./Navigations/Siderdraw/buttonDrawer';
import MoblieNav from './Navigations/MoblieNav';
import SlideDraw from'./Navigations/Siderdraw/SlideDraw';
import BackDrop from './Navigations/backdrop/Backdrop';
import About from './Navigations/About.js';
import Service from './Navigations/Service.js';
import Pricing from './Navigations/Pricing.js';
import Contact from './Navigations/Contact.js';
import {BrowserRouter as Router,Switch,Route, withRouter} from 'react-router-dom';
 import Slider from './Slider/slider.js';
 import Estimate from './Estimate/Estimate';
 import MovingMade from './MovingMade.js';
 import Customer_centric_image from './customer_centric_image.js';
 import Footer from './footer/footer.js';
 import MapContainer from './footer/MapContainer';

 
 

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sideDrawerOpen:false,
      price:60,
   

    }
    this.drawerToggleClickHandler=this.drawerToggleClickHandler.bind(this)
    this.closerButton=this.closerButton.bind(this)
    this.changeColor=this.changeColor.bind(this)
  }
  clickedBtn = () => {
    console.log('swag')
  }

    drawerToggleClickHandler=()=>{
      this.setState((prevState)=>{
        return{sideDrawerOpen:!prevState.sideDrawerOpen};
      })

    
    }
   
 closerButton(){
 
   this.setState({
    sideDrawerOpen:false
   })
   }
  
changeColor(){
  console.log("hey boi")
   }

  render () {
   
    let backdrop;
    let sideDraw;
    if(this.state.sideDrawerOpen){
     sideDraw=<SlideDraw closer={this.closerButton} changeColors={this.changeColor} />
      backdrop = <BackDrop  />
    }

    return (
      <div className='Main-wrapper'>
    

       
 <Router>
<div style={{height:'100%'}} className='home'>
  <Top />
  <Header drawerClickhandler={this.drawerToggleClickHandler}  />
 
  

    {/*< MoblieNav />*/}
    {sideDraw}
{backdrop}
  <Switch>
  <Route path ="/" exact component={Home}/>
  <Route path ="/about" component={About}/>
   <Route path ="/service" component={Service} />
   <Route  path ="/pricing" component={Pricing }  service={this.state.price} />
   <Route path ="/contact" component={Contact} />
 
   
  </Switch>
 
   <MapContainer />
    </div>
      </Router>

    
      </div>
     

    )
  }
}
const Home =()=> (
  <div>
    <Slider />
   <Estimate />
   <MovingMade />
  
  </div>
)
const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
