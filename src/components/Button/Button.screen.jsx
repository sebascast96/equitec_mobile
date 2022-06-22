import React from "react";
import ButtonComponent from "./Button.component";

const ButtonScreen = (props) => {
	const { buttonText, handlePress, disabled, customStyle } = props;

	return (
		<ButtonComponent
			buttonText={buttonText}
			handlePress={handlePress}
			disabled={disabled}
			customStyle={customStyle}
		/>
	);
};

export default ButtonScreen;
