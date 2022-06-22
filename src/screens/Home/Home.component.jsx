import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Typography from '../../components/Typography'
import { Theme } from '../../common';

const HomeComponent = props => {
  return (
    <SafeAreaProvider>
      <View style={styles.homeScreen}>
        <View style={styles.homeContainer}>
          <View style={styles.paragraphSize}>
            <Typography
              type={'h5'}
              text={'SCREEN PLACEHOLDER'}
              style={{color: Theme.colors.ash1}}
            />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default HomeComponent;
