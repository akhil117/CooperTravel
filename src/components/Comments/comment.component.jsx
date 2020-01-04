import React from 'react';
import './comment.style.css'


export const Comment = (props) => (
    <div className='Texts commentBox'>
       
       
       <textarea rows='5' type ='text' placeholder={props.holder!==''? props.holder:''} onChange = {(e) => {props.DropDownChange(props.obj,e.target.value)}} className="text-optionsa"/>


    </div>
)