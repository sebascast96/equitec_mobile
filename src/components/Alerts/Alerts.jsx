import React from 'react';
import CustomButton from '../Button';
import { View, Pressable, ActivityIndicator, Text } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './styles';
import { Constants, Theme } from '../../common';
import { BlurView } from '@react-native-community/blur';

const AlertsComponent = (props) => {
 const {
  handlePressPrimary,
  handlePressSecondary,
  modalParams,
  onDismiss,
  handleClose,
  modalContainerSmall = false,
 } = props;

 const BlurredBackdrop = () => (
  <>
   <BlurView
    style={styles.blurView}
    blurAmount={5}
    blurType='light'
    reducedTransparencyFallbackColor='gray'
   />
   <View style={styles.blurBackground} />
  </>
 );

 return (
  <Modal
   backdropOpacity={1}
   isVisible={modalParams.isModalVisible}
   onModalHide={onDismiss}
   animationInTiming={500}
   animationOutTiming={600}
   customBackdrop={<BlurredBackdrop />}
   style={styles.modal}>
   <View
    style={{
     ...styles.modalContainer,
     ...(modalParams.spinner ? { backgroundColor: 'rgba(0, 0, 0, 0);' } : null),
    }}>
    <View
     style={
      modalContainerSmall
       ? {
          ...styles.titleContainerSmall,
          ...modalParams.customTitleContainerStyles,
         }
       : {
          ...styles.modalContentContainer,
          ...modalParams.customTitleContainerStyles,
         }
     }>
     <View style={styles.typeText}>
      {modalParams.spinner ? (
       <View style={styles.spinner}>
        <ActivityIndicator size={'large'} color={Theme.colors.mainPurple} />
       </View>
      ) : null}
      <Text
       style={
        modalContainerSmall
         ? {
            ...styles.titleSmall,
            ...modalParams.customTitleStyles,
           }
         : {
            ...styles.title,
            ...modalParams.customTitleStyles,
           }
       }>
       {modalParams.title}
      </Text>
     </View>
     {modalParams.subtitle !== Constants.blank ? (
      <View style={styles.subtitleContainer}>
       <Text
        style={{
         ...styles.subtitle,
         ...modalParams.customSubtitleStyles,
        }}>
        {modalParams.subtitle}
       </Text>
      </View>
     ) : null}

     {modalParams.text !== Constants.blank ? (
      <View style={styles.textContain}>
       <Text style={styles.text}>{modalParams.text}</Text>
      </View>
     ) : null}

     {modalParams.primaryButtonLabel !== Constants.blank ? (
      <View style={styles.primaryButtonContainer}>
       <View
        style={{
         alignItems: 'center',
         width: '125%',
        }}>
        <CustomButton
         buttonText={modalParams.primaryButtonLabel}
         handlePress={handlePressPrimary}
         customContainerStyle={{ width: '80%' }}
        />
       </View>
      </View>
     ) : null}

     {modalParams.secondaryButtonLabel !== Constants.blank ? (
      <View style={{ alignItems: 'center' }}>
       <View
        style={{
         alignItems: 'center',
         width: '125%',
         marginTop: 8,
        }}>
        <CustomButton
         buttonText={modalParams.secondaryButtonLabel}
         handlePress={handlePressSecondary}
         customContainerStyle={{
          width: '80%',
         }}
         customTxtStyle={{
          color: Theme.colors.mainPurple,
          fontWeight: '600',
         }}
         customBtnStyle={{
          backgroundColor: 'transparent',
         }}
        />
       </View>
      </View>
     ) : null}
    </View>
   </View>
  </Modal>
 );
};

export default AlertsComponent;
