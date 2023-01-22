import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { strings } from 'utils';
import { setAuth } from 'redux/slices/session';
import { sessionService } from 'services';
import { InputField, Button, Loading } from 'views/components';

const Login = ({ moveNext }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: 'neha.tiwari@piecodes.in',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('please enter valid email'),
    }),
    onSubmit: (values) => {
      setLoading(true);
      dispatch(setAuth(values));
      sessionService.login(values).then((data) => {
        if (data.error === false) {
          setLoading(false);
          moveNext(1);
        }
      });
    },
  });

  return (
    <View>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <Text style={{ fontSize: 26, color: '#1f1f1f', marginVertical: 20 }}>
            {strings.welcome}
          </Text>
          <View style={{ marginVertical: 30 }}>
            <InputField
              label={'Email'}
              name="email"
              required={true}
              keyboardType="email-address"
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
              error={formik.touched.email && formik.errors.email}
            />
          </View>

          <View style={{ marginVertical: 30 }}>
            <Button
              name={strings.next}
              onPress={formik.handleSubmit}
              style={{ backgroundColor: '#0013B4' }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Login;
