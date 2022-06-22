import {StyleSheet, Platform} from 'react-native';

const stylesByPlatform = Platform.select({
  ios: {fontFamily: 'Roboto'},
  android: {fontFamily: 'Roboto'},
});

export const styles = StyleSheet.create({
  h1: {
    fontSize: 50,
  },
  h2: {
    fontSize: 38,
  },
  h3: {
    fontSize: 28,
  },
  h4: {
    fontSize: 21,
  },
  h5: {
    fontSize: 12,
  },
  SMALL: {
    fontSize: 12,
  },
  paragraph: {
    fontSize: 16,
  },
});
