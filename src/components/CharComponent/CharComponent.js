import React from 'react';


const CharComponent = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px', 
        textAlign: 'center', 
        margin: '10px', 
        border: '5px solid pink'
    }

  return (
      <div style={style} >
          {props.character}
      </div>
  )
}


export default CharComponent;