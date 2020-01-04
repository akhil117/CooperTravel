import React from 'react';
import './checkbox.style.css';



export const CheckBox = (props) => {
    return (
    <div className='check-box csize'>
        <span className='label-text'>{props.label}</span>
        <div className='box'>
            <React.Fragment>
                <input onChange ={(e) => {
                    console.log(e.target.name)
                    props.handleChange(e.target.name, !props.val)}} type='checkbox' name= {props.name} checked={props.val} id={props.name} /> <label htmlFor={props.name} className='checkbox-value'>Yes/no</label>
            </React.Fragment>
         </div>

    </div>
)};


