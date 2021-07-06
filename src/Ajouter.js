
import React, { Component } from 'react'

export default class Ajouter extends Component {
    
    ajouter=()=>{
        let form=document.getElementsByClassName("ntm")[0];
        form.classList.toggle("displayno");
        form.classList.toggle("tresflex") ;
    }  
    
    render() {
        return (
            <button type="button" variant="light" className="btn btn-light aka1" onClick={this.ajouter}>Ajouter
                
        </button>
        )
    }
}
