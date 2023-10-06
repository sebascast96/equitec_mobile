import React from 'react';
import ButtonComponent from './Button.component';

const ButtonScreen = (props) => {
 const { buttonText, textStyle, handlePress, disabled, customStyle } = props;

 return (
  <ButtonComponent
   buttonText={buttonText}
   handlePress={handlePress}
   disabled={disabled}
   customStyle={customStyle}
   textStyle={textStyle}
  />
 );
};

export default ButtonScreen;
