import React from 'react'
import circles from '../../../assets/images/circles.svg'

let Preloader = (props) =>{
    return (
    <div style={{backgroundColor:'white'}}>
    <img src={circles}  />
    </div>
    )
}

export default Preloader