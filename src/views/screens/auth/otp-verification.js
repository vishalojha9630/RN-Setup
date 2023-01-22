import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import { strings } from 'utils';
import { sessionService } from 'services';
import { Button, Loading } from 'views/components';

const OtpVerification = ({ navigateTo }) => {
  const { loggedInUser } = useSelector((state) => state.session);
  const email = loggedInUser.email;

  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSubmit = () => {
    setLoading(true);
    sessionService.otpVerify({ device_id: nanoid(), otp, email }).then((data) => {
      console.log('dataaaa', data);
      if (data.error === false) {
        setLoading(false);
        navigateTo('HomeScreen');
      }
    });
  };

  return (
    <View style={styles.mainContainer}>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <Text style={styles.enterOtpText}>{strings.oneTimePassword}</Text>
          <View style={styles.otpFieldWraper}>
            <OTPInputView
              pinCount={6}
              autoFocusOnLoad
              onCodeFilled={(code) => {
                setOtp(code);
              }}
              style={{ width: '80%', height: 100 }}
              codeInputFieldStyle={styles.otpTextStyle}
              codeInputHighlightStyle={styles.otpTextFieldHighLighted}
            />
            {/* {invalidCode && <Text style={styles.error}>{strings.incorrectCode}</Text>} */}
          </View>

          <View style={styles.btnWrapper}>
            <Button
              type="link"
              name={strings.resendOtp}
              style={{ alignSelf: 'flex-end', marginVertical: 15 }}
            />

            <Button
              name={strings.next}
              onPress={handleSubmit}
              style={{ backgroundColor: '#0013B4' }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },

  enterOtpText: {
    fontSize: 26,
    color: '#1f1f1f',
  },

  otpFieldWraper: {
    alignItems: 'center',
    marginVertical: 20,
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
    marginBottom: 20,
  },

  btnWrapper: {
    marginVertical: 15,
  },
});
