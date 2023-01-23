import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';

// import { nanoid } from 'nanoid';
import DeviceInfo from 'react-native-device-info';
import { useDispatch, useSelector } from 'react-redux';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import { strings } from 'utils';
import { sessionService } from 'services';
import { setAuth } from 'redux/slices/session';
import { Button, Loading } from 'views/components';

const OtpVerification = ({ navigateTo, handleSubmitValue, styles }) => {
  const dispatch = useDispatch();
  const { loggedInUser } = useSelector((state) => state.session);
  const email = loggedInUser.email;
  // const randomId = useMemo(() => nanoid(), []);

  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');

  let deviceId = DeviceInfo.getDeviceId();
  console.log('uniqueId', deviceId);

  const handleSubmit = () => {
    setLoading(true);
    sessionService.otpVerify({ device_id: deviceId, otp, email }).then((data) => {
      dispatch(setAuth(data.access_token));
      if (data.error === false) {
        setLoading(false);
        navigateTo('StackNavigator');
      }
    });
  };

  return (
    <SafeAreaView style={styles.pageMainContainer}>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <Text style={styles.headerText}>{strings.oneTimePassword}</Text>
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
            {/* {<Text style={styles.error}>{strings.incorrectCode}</Text>} */}
          </View>

          <View style={styles.btnWrapper}>
            <Button
              type="link"
              name={strings.resendOtp}
              onPress={() => handleSubmitValue(loggedInUser)}
              style={{ alignSelf: 'flex-end' }}
            />

            <Button
              name={strings.next}
              onPress={() => handleSubmit()}
              style={{ backgroundColor: '#0013B4' }}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default OtpVerification;
