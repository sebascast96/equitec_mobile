import React from 'react';
import styles from './styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable } from "react-native";
import { Table, Row, TableWrapper, Cell } from "react-native-table-component";
import { Ionicons } from "@expo/vector-icons";
import { Constants, Theme } from '../../common';
const element = (data, index) => (
  <Pressable onPress={()=>console.log(data)} style={{alignItems:'center'}}>
      <Ionicons
        name={"eye"}
        color={Theme.colors.mainOrange}
        size={40}
      />
    </Pressable> 
);
const LegalizationsComponent = props => {
  const {legalizations, tableHead} = props;
  return (
    <SafeAreaProvider>
      <View style={styles.legalizationsScreen}>
        <View style={styles.legalizationsContainer}>
          <View style={styles.paragraphSize}>
          <Table
                    borderStyle={{ borderWidth: 2, borderColor: "#D8D8D8" }}
                  >
                    <Row
                      data={tableHead}
                      style={styles.head}
                      textStyle={styles.textTable}
                    />
                    {legalizations.map((rowData, index) => (
                      <TableWrapper key={index} style={styles.row}>
                        {rowData.map((cellData, cellIndex) => (
                          <Cell
                            key={cellIndex}
                            data={
                              cellIndex === 4
                                ? element(cellData, index)
                                : cellData
                            }
                            textStyle={styles.text}
                          />
                        ))}
                      </TableWrapper>
                    ))}
                  </Table>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default LegalizationsComponent;
