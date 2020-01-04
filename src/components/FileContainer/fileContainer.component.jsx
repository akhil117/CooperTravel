import React from 'react';
import './file.style.css'




export const FileContainer = (props) => (
    <div className ='Card' key = {props.key} value={props.value}>
        <i class="fa fa-paperclip" aria-hidden="true"></i>
        <span className='AttachText'>{props.name}</span>
    </div>
);
