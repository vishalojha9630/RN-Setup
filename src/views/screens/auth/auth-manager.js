import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Login from './login';
import dynamicStyles from './styles';
import { sessionService } from 'services';
import { setAuth } from 'redux/slices/session';
import OtpVerification from './otp-verification';

const AuthManager = (props) => {
  console.log('props', props);
  const appIcons = props.route.params.appIcons;
  const DynamicAppStyles = props.route.params.DynamicAppStyles;
  const styles = dynamicStyles(DynamicAppStyles);

  const swiperRef = useRef(null);
  const selectedIndex = useRef(0);
  const navigation = useNavigation();

  const navigateTo = (toScreen) => {
    navigation.navigate(toScreen);
  };
  const moveNext = (args) => {
    swiperRef.current.scrollBy(args, true);
  };

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
      dispatch(setAuth(values));
      handleSubmitValue(values);
    },
  });

  const handleSubmitValue = (values) => {
    setLoading(true);
    sessionService.login(values).then((data) => {
      if (data.error === false) {
        setLoading(false);
        moveNext(1);
      }
    });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Swiper
        index={0}
        horizontal={true}
        loop={false}
        ref={swiperRef}
        loadMinimal={true}
        scrollEnabled={true}
        showSecondCard={false}
        showsPagination={false}
        removeClippedSubviews={true}
        onIndexChanged={(i) => (selectedIndex.current = i)}
      >
        <Login loading={loading} formik={formik} appIcons={appIcons} styles={styles} />
        <OtpVerification
          navigateTo={navigateTo}
          handleSubmitValue={handleSubmitValue}
          appIcons={appIcons}
          styles={styles}
        />
      </Swiper>
    </SafeAreaView>
  );
};

export default AuthManager;
