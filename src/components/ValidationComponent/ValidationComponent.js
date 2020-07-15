import React from 'react';

const ValidationComponent = (props) => {

  if(props.textLength >= 5) {
      return "Text long enough"
  } else {
      return "Text too short"
  }
  
    
}


export default ValidationComponent;

