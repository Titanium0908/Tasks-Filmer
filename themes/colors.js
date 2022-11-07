import store from '../app/store'


const refreshState = () => {
    this.state = store.getState()
}

const state = store.getState();
const isDarkColor = state.theme.isDark;

const colorsEnum = {
    darkBlue: '#3E65FB',
    lightBlue: '#809CF5',

    dark: "#141A32",
    ligtherThanDark: "#1B2242",
    lightgray: "#F7F7F7",
    gray: "#5A6583",
    transpBlue: 'rgba(128, 156, 245, 0.5)',

    white: "#FFFFFF",
    black: "#000000",
    kindOfWhite: "#FEFAE0",
}

const colors = {
    mainColor: isDarkColor ? colorsEnum.darkBlue : colorsEnum.lightBlue,
    
    primary: isDarkColor ? colorsEnum.dark : colorsEnum.white,
    secondary: isDarkColor ? colorsEnum.ligtherThanDark : colorsEnum.lightgray,

    iconSelected: isDarkColor ? colorsEnum.kindOfWhite : colorsEnum.white,
    iconNotSelected: isDarkColor ? colorsEnum.gray : colorsEnum.transpBlue,
    
    textHeader: isDarkColor ? colorsEnum.kindOfWhite : colorsEnum.black,
    textRate: colorsEnum.kindOfWhite,
    textParagraph: isDarkColor ? colorsEnum.kindOfWhite : colorsEnum.black,
};

export default colors;