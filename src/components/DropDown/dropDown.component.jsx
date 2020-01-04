import React from 'react';
import './dropDown.style.css'


export const DropDown = (props) => {
    return (
        <div className='DropDown size'>
            <span className='label-text'>{props.label}</span>
            <select ref={props.refs}name={props.label} onChange = {(e) =>{props.DropDownChange(props.obj,e.target.value)}} className='option' >
                {props.list.map( element => <option key = {element} value={element} >{element}</option>)}
            </select>
        </div>
    );
}