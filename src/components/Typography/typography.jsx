import React from 'react';
import {Text} from 'react-native';
import {styles} from './style';

let typographyStyle = ``;

const Typography = props => {
  const {style, type, text, color = '#212429'} = props;

  switch (type) {
    case 'h1':
      typographyStyle = styles.h1;
      break;
    case 'h2':
      typographyStyle = styles.h2;
      break;
    case 'h3':
      typographyStyle = styles.h3;
      break;
    case 'h4':
      typographyStyle = styles.h4;
      break;
    case 'h5':
      typographyStyle = styles.h5;
      break;
    case 'paragraph':
      typographyStyle = styles.paragraph;
      break;
    case 'small':
      typographyStyle = styles.SMALL;
      break;
  }
  return (
    <>
      <Text style={[typographyStyle, {color: `${color}`}, style]}>{text}</Text>
    </>
  );
};

export default Typography;
