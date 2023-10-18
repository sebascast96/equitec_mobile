import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import LegalizationsComponent from './Legalizations.component';
import { legalizationList } from '../../client';
import moment from 'moment';

const LegalizationsScreen = props => {
  const [legalizations, setLegalizations] = useState([])
  const tableHead = [
    "Tipo",
    "Fecha",
    "Concepto",
    "Estado",
    "Ver"
  ];
  useEffect(() => {
    fetchList();
   }, []);
   
   const fetchList = async () => {
    let list = []
    const resLista = await legalizationList();
    resLista.data.forEach((element, index) => {
      const fecha = moment(element.created_at, moment.ISO_8601).format('DD-MM-YY');;
      const id = element.id;
      const Tipo = element.legalization_type;
      var Concepto="";
      element.legalization_type=='Logistico'? Concepto = element.logistic_fee_basis:Concepto = element.purchase_fee_basis;
      const estado = element.state;
      list.push([
       Tipo,
       fecha,
       Concepto,
       estado,
       id,
      ]);
     });
    setLegalizations(list);
   };
  return (
    <LegalizationsComponent 
    legalizations={legalizations}
    tableHead={tableHead}
    />
  );
};

export default LegalizationsScreen;
