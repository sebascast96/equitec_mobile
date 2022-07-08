import React from 'react';
import styles from './styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from "react-native";
import Typography from "../../components/Typography";
import { Theme } from '../../src/common';

const [FTName]Component = props => {
  return (
    <SafeAreaProvider>
      <View style={styles.<FTName | lowercase>Screen}>
        <View style={styles.<FTName | lowercase>Container}>
          <View style={styles.paragraphSize}>
            <Typography
              type={'h5'}
              text={'[FTName] SCREEN'}
              style={{color: Theme.colors.ash1}}
            />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default [FTName]Component;
