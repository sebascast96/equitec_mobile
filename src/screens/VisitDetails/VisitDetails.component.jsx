import React from 'react';
import styles from './styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import Typography from '../../components/Typography';

const VisitDetailsComponent = (props) => {
 return (
  <SafeAreaProvider>
   <View style={styles.visitdetailsScreen}>
    <View style={styles.visitdetailsContainer}>
     <View style={styles.paragraphSize}>
      <Typography
       type={'h5'}
       text={'VisitDetails SCREEN'}
       style={{ color: Theme.colors.ash1 }}
      />
     </View>
    </View>
   </View>
  </SafeAreaProvider>
 );
};

export default VisitDetailsComponent;
