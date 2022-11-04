import React from "react";
import Spinner from "react-native-loading-spinner-overlay";

const LoadingSpinner = (props) => {
  const { showSpinner = false, animation = "fade" } = props;

  return (
    <Spinner
      visible={showSpinner}
      animation={animation}
      overlayColor={"rgba(70, 70, 70, 0.25)"}
      color={"#E37427"}
      size={"large"}
    />
  );
};

export default LoadingSpinner;
