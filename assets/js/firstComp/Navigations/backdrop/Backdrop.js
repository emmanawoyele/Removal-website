import React, { Component } from 'react';

class BackDrop extends Component {
    constructor (props) {
        super(props)
        this.state = {
          name:'Emmauel'
         
        }
    }
    render() { 
        return ( <div className="backdrop" onClick={this.props.closerButton}>

        </div> );
    }
}
 
export default BackDrop;