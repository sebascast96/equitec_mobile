import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import LegalizeFormComponent from './LegalizeForm.component';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';
import { legalize } from '../../client';

const LegalizeFormScreen = (props) => {
 const navigation = useNavigation();
 const [open, setOpen] = useState(false);
 const [showSpinner, setShowSpinner] = useState(false);
 const [value, setValue] = useState(null);
 const [items, setItems] = useState([
  { label: 'Logistico', value: 'Logistico' },
  { label: 'Compra', value: 'Compra' },
 ]);
 const [valueBefore, setValueBefore] = useState('0');
 const [valueAfter, setValueAfter] = useState('0');
 const [result, setResult] = useState('');
 const [result2, setResult2] = useState(null);
 const { visit } = props.route.params;

 const handleDocumentSelection = useCallback(async () => {
  try {
   let doc = await DocumentPicker.getDocumentAsync({});
   console.log('name', visit);
   setResult(doc.name);
   setResult2(doc);
  } catch (err) {
   console.warn(err);
  }
 }, []);

 function handlePressBack() {
  navigation.goBack();
 }
 const handlePressSave = async () => {
  let info = {
   bill_file: result2,
   customer_id: visit.visit.customer_id,
   work_order_uuid: visit.visit.work_order_uuid,
   event_id: visit.id,
   user_id: visit.visit.technicians[0].id,
   before_taxes_total: valueBefore,
   after_taxes_total: valueAfter,
   payment_method: 'Efectivo',
   legalization_type: value,
   logistic_fee_basis: 'Hotel',
  };

  //   const formData = new FormData();
  //   formData.append('bill_file', result2);
  //   formData.append('customer_id', visit.visit.customer_id);
  //   formData.append('work_order_uuid', visit.visit.work_order_uuid);
  //   formData.append('event_id', visit.id);
  //   formData.append('before_taxes_total', valueBefore);
  //   formData.append('after_taxes_total', valueAfter);
  //   formData.append('payment_method', 'Efectivo');
  //   formData.append('legalization_type', value);
  //   formData.append('logistic_fee_basis', 'Hotel');
  //   formData.append('user_id', visit.visit.technicians[0].id);
  //   console.log('FORM DATA:', formData);
  setShowSpinner(true);
  const res = await legalize(info);
  setShowSpinner(false);
  console.log('Response: ', res);
 };
 return (
  <LegalizeFormComponent
   open={open}
   value={value}
   items={items}
   setOpen={setOpen}
   setValue={setValue}
   setItems={setItems}
   valueBefore={valueBefore}
   valueAfter={valueAfter}
   setValueBefore={setValueBefore}
   setValueAfter={setValueAfter}
   handleDocumentSelection={handleDocumentSelection}
   handlePressBack={handlePressBack}
   handlePressSave={handlePressSave}
   valueFile={result}
   showSpinner={showSpinner}
  />
 );
};

export default LegalizeFormScreen;
