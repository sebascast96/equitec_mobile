import React from "react";
import { Text, Pressable } from "react-native";
import { storiesOf } from "@storybook/react-native";

import Alerts from "./Alerts";
import CenterView from "../CenterView";

// Para mostrar las Alertas cambiar "isModalVisible" de false a true
const modalParamsSmallPopUp = {
    isModalVisible: false,
    title: "Title",
    subtitle:
        "Para continuar el proceso de registro, es necesario confirmar tu ubicación.",
    primaryButtonLabel: "Primary button",
    closes: false,
    handlePressPrimary: () => {
        console.log("test");
    },
};

const modalParamsNormalPopUp = {
    isModalVisible: false,
    title: "Title",
    subtitle: "Subtitle",
    primaryButtonLabel: "Primary button",
    closes: true,
};

const modalParamsSpinner = {
    isModalVisible: false,
    spinner: true,
    closes: false,
    customTitleStyles: {
        display: "none",
    },
    customSubtitleStyles: {
        display: "none",
    },
};

let isModalVisible = true;
const toggleModal = () => {
    isModalVisible = !isModalVisible;
    console.log("isModalVisible: ", isModalVisible);
    return isModalVisible;
};

storiesOf("Alerts", module)
    .addDecorator((getStory) => (
        <CenterView>
            <Pressable onPress={toggleModal}>
                <Text>Button</Text>
            </Pressable>
            {getStory()}
        </CenterView>
    ))
    .add("Small Alert", () => (
        <Alerts
            modalParams={modalParamsSmallPopUp}
            modalContainerSmall={modalParamsSmallPopUp.modalContainerSmall}
            closes={modalParamsSmallPopUp.closes}
            handlePressPrimary={modalParamsSmallPopUp.handlePressPrimary}
        />
    ))
    .add("Normal Alert", () => <Alerts modalParams={modalParamsNormalPopUp} />)
    .add("Spinner Alert", () => <Alerts modalParams={modalParamsSpinner} />);
