import { StyleSheet, Platform } from 'react-native';

const dynamicStyles = (DynamicAppStyles) => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fff',
    },

    pageMainContainer: {
      flex: 1,
      paddingHorizontal: 16,
    },

    headerText: {
      color: '#1f1f1f',
      marginVertical: 20,
      fontSize: 26,
      marginBottom: 8,
      marginTop: 35,
      lineHeight: 34,
      fontWeight: '600',
    },


    // Login Style:-
    inputWrapper: {
      marginVertical: 35
    },
    btnWrap: {
      fontSize: 26,
      color: '#1f1f1f',
      marginVertical: 30,
    },


    // OTP Verification style:- 
    otpFieldWraper: {
      alignItems: 'center',
      marginVertical: 22,
    },

    otpTextStyle: {
      width: 30,
      fontSize: 20,
      color: '#000',
      borderWidth: 0,
      fontWeight: '600',
      borderBottomWidth: 1.5,
    },

    otpTextFieldHighLighted: {
      borderColor: '#000',
    },

    error: {
      color: 'red',
      fontSize: 16,
      // marginBottom: 20,
    },

    btnWrapper: {
      marginVertical: 15,
    },
  });
}

export default dynamicStyles;