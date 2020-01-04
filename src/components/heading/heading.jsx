import React from 'react';
import './heading.css'

export const Heading = props => {
    return (
      <div className='heading'>
          <h1 style={{
              fontSize: `${props.size}`,
              }}>{props.name}</h1>
      </div>  
    );
}