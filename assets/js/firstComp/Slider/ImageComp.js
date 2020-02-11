import React,{Component} from 'react'

function ImageComp({src}){

    let imgeStyles={
        width:100 +'%',
        height: 'auto'
    }
    return<img src={src} alt="images" style={imagesStyles}/>
    
}
export default ImageComp