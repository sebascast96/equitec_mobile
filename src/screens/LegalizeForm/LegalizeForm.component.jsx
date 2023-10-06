import React from 'react';
import styles from './styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Pressable, Image } from 'react-native';
import Typography from '../../components/Typography';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../../components/Button';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../../common/index';
import LoadingSpinner from '../../components/Spinner/Spinner.component';

const LegalizeFormComponent = (props) => {
 const {
  open,
  items,
  value,
  setOpen,
  setItems,
  setValue,
  valueBefore,
  valueAfter,
  setValueBefore,
  setValueAfter,
  handleDocumentSelection,
  handlePressBack,
  handlePressSave,
  valueFile,
  showSpinner,
 } = props;
 return (
  <SafeAreaProvider>
   <LoadingSpinner showSpinner={showSpinner} animation={'none'} />
   <View style={styles.legalizeformScreen}>
    <View style={styles.legalizeformContainer}>
     <View style={styles.paragraphSize}>
      <Typography
       type={'h5'}
       style={styles.titulo}
       text={'Realizar legalización'}
      />
      <Typography type={'h5'} text={'Tipo de legalización'} />
      <DropDownPicker
       placeholder='Tipo de legalización'
       placeholderStyle={{
        color: 'grey',
        fontWeight: 'bold',
       }}
       containerStyle={{}}
       style={{
        height: 45,
        marginBottom: 15,
        borderRadius: 50,
        borderWidth: 0,
       }}
       open={open}
       value={value}
       items={items}
       setOpen={setOpen}
       setValue={setValue}
       setItems={setItems}
      />
      <Typography
       style={{ zIndex: -1 }}
       type={'h5'}
       text={'Archivo de factura'}
      />
      <View style={styles.uploadContainer}>
       <TextInput
        style={styles.inputStyleUpload}
        placeholder=''
        value={valueFile}
        editable={false}
        selectTextOnFocus={false}
       />
       <Pressable onPress={handleDocumentSelection}>
        <Ionicons
         name={'cloud-upload'}
         color={Theme.colors.mainOrange}
         size={40}
        />
       </Pressable>
      </View>
      <Typography
       style={{ zIndex: -1 }}
       type={'h5'}
       text={'Valor total antes de impuestos'}
      />
      <TextInput
       style={styles.inputStyle}
       autoCorrect={false}
       placeholder='Valor antes de impuestos'
       value={valueBefore}
       autoCapitalize={'none'}
       keyboardType={'number-pad'}
       onChangeText={(text) => {
        setValueBefore(text.replace(/[^0-9.]/g, ''));
       }}
      />
      <Typography type={'h5'} text={'Valor total despues de impuestos'} />
      <TextInput
       style={styles.inputStyle}
       autoCorrect={false}
       placeholder='Valor antes de impuestos'
       value={valueAfter}
       autoCapitalize={'none'}
       keyboardType={'number-pad'}
       onChangeText={(text) => {
        setValueAfter(text.replace(/[^0-9.]/g, ''));
       }}
      />
      <View style={styles.bottomButtons2}>
       <Button
        customStyle={styles.backButton}
        handlePress={handlePressBack}
        buttonText='ATRAS'
       />
       <Button
        customStyle={styles.bottomButton}
        handlePress={handlePressSave}
        buttonText='GUARDAR'
       />
      </View>
     </View>
    </View>
   </View>
  </SafeAreaProvider>
 );
};

export default LegalizeFormComponent;
