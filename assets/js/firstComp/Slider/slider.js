import React,{useState,useEffect} from 'react';
import ImageComp from './ImageComp';
import ReactDOM from 'react-dom';








  
function Slider(){
let Arry =[
<img src="\img\slide1.jpg"/>,
<img src="\img\slide2.jpg"/>,
<img src="\img\slide3.jpg"/>


];
      const [x, setX] = useState(0);

       useEffect(()=>{
         setX===0 ?-100* (Arry.lenght--):(Arry.lenght++)
         setTimeout(x,2000)
       })

   
       
    
      
       const goLeft=()=>{
       (x ===0)?setX(-100*(Arry.length-1)):setX(x+100)
        console.log(x)
      };

      const goRight=()=>{
        (x === - 100 *(Arry.length-1))? setX(0):setX(x-100)
        console.log(x)
      }



     
      return(
      <div className="slider">
{
 Arry.map((item,index)=>{
   return(
  <div key={index}  className="slide" style={{transform:`translateX(${x}%)`}}>
    {item}
    <div id="container-wrapper"  className="inner-text-slider">
          <div className="get">
          <h6 >Get
          
          free 
           moving
            estimate 
        </h6>
        <a href="#" className="btn-qoute">Get your free qoute</a>
          </div>
         
     </div>
  </div>
   );
})}

{/*add  a button*/}
<button id="goleft" onClick={goLeft}><i className="fas fa-caret-left"></i></button>
<button id="goright" onClick={goRight}><i className="fas fa-caret-left"></i></button>


        </div>
      
   
  
  )
 
    }
     
  export default Slider