import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import Login from './login';
import OtpVerification from './otp-verification';

const AuthManager = () => {
  const swiperRef = useRef(null);
  const selectedIndex = useRef(0);
  const navigation = useNavigation();

  const navigateTo = (toScreen) => {
    console.log('toScreen', toScreen);
    navigation.navigate(toScreen);
  };
  const moveNext = (args) => {
    swiperRef.current.scrollBy(args, true);
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 20 }}
    >
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
        <Login moveNext={moveNext} />
        <OtpVerification navigateTo={navigateTo} />
      </Swiper>
    </SafeAreaView>
  );
};

export default AuthManager;
