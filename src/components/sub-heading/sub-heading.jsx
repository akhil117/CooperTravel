import './sub-heading.css'
import React from 'react';


export const SubHeading = (props) =>{
    return(
        <h2 className='sub-heading'>{props.label}</h2>
    );
}