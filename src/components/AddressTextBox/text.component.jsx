import React from 'react';
import './text.style.css'

export const AddressBox = (props) => {
    return (
        <div className='Texts commentsize'>
            <span className='label-text'>{props.label}</span>
            <input onChange = {(e) => {props.DropDownChange(props.obj,e.target.value)}} type="text" className='text-option'/>
        </div>
    );
}