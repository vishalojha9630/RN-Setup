import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { strings } from 'utils';
import { InputField, Button, Loading } from 'views/components';

const Login = ({ loading, formik, styles }) => {
  return (
    <SafeAreaView style={styles.pageMainContainer}>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <Text style={styles.headerText}>{strings.welcome}</Text>
          <View style={styles.inputWrapper}>
            <InputField
              label={'Email address'}
              name="email"
              required={true}
              keyboardType="email-address"
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
              error={formik.touched.email && formik.errors.email}
            />
          </View>

          <View style={styles.btnWrap}>
            <Button
              name={strings.next}
              onPress={formik.handleSubmit}
              style={{ backgroundColor: '#0013B4' }}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Login;
