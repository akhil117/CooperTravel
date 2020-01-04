import React from 'react';
import './date.style.css'


export const Date = (props) => {
    if(props.index>=0){
        return (
            <div className='Dates size'>
                <span className='label-text'>{props.label}</span>
                <input onChange = {(e) => {props.DropDownChange(props.obj,e.target.value,props.index)}}type="date" className='date-option'/>
            </div>
        );
    }
    else{
        return (
            <div className='Dates size'>
                <span className='label-text'>{props.label}</span>
                <input onChange = {(e) => {props.DropDownChange(props.obj,e.target.value)}}type="date" className='date-option'/>
            </div>
        );
    }
    
}