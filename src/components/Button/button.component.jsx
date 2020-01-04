import React from 'react';
import './button.style.css'


export const Button = (props) =>(

        <div>
                <button style={{
                    backgroundColor: props.color ==='blue'? '#1C6B91': '#999999',
                    color: props.color !== 'blue'? '#000' : '#FFF'
                }} className="button" onClick = {() => props.Print()}>{props.label}  </button>
        </div>
);