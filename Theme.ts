import React from "react";
import { configureFonts, DefaultTheme } from "react-native-paper";
import fontConfig from "./Fonts";

const theme = {
    ...DefaultTheme,
    roundness: 10,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: "#4169E1",
        accent: "#f1c40f",
        favorite: "#BADA55",
        cancelButton: "#a4c639",
        iconColor: "#808080",
        background: "#fff"
    },
};

export default theme;