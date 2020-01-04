import './uploadfile.style.css'
import React from 'react';



export const Upload = (props) => {
    return (
        <div className='Direction'>    
            <div className='Texts upload'>
                <span className='label-text'>{props.label}</span>
                <input placeholder='Find Url ....' onChange = {(e) => {props.DropDownChange(props.obj,e.target.value)}} type="text" className='text-options'/>
            </div>
           <div className='Direction'>

               <input type='file' id ={props.obj + props.filePurpose} onChange = {(e) => props.handleFlow((props.obj + props.filePurpose),e.target.value)}hidden/> 
               <button className='btn'onClick ={(e)=>props.myfunction(e,(props.obj + props.filePurpose))}><i className="fa fa-paperclip" aria-hidden="true"></i></button>
           </div>
        </div>
    );
}
