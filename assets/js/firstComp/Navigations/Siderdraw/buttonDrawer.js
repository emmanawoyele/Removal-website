import React, { Component } from 'react'

class button extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
          name:'Emmauel'
         
        }
    }

    render() { 
        return (  <button className="toggle-button" onClick={this.props.click}>
             <div className="toggle-button_line"></div>
             <div className="toggle-button_line"></div>
             <div className="toggle-button_line"></div>
        </button>);
    }

}
export default button;
