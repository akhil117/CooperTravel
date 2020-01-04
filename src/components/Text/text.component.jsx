import React from 'react';
import './text.style.css'

export const Text = (props) => {
    if(props.index>=0){
        return (
            <div className='Texts size'>
                <span className='label-text'>{props.label}</span>
                <input placeholder={props.holder!==''? props.holder:''} onChange = {(e) => {props.DropDownChange(props.obj,e.target.value,props.index)}} type="text" className='text-option'/>
            </div>
        );  
    }
    else{
        return (
            <div className='Texts size'>
                <span className='label-text'>{props.label}</span>
                <input placeholder={props.holder!==''? props.holder:''} onChange = {(e) => {props.DropDownChange(props.obj,e.target.value)}} type="text" className='text-option'/>
            </div>
        );
    }
}