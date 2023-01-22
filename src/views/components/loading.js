import { View, Modal, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';

const Loading = ({ opacity = 0.4, loading = false }) => {
  console.log('loading', loading);
  return (
    <Modal transparent={true} visible={loading}>
      <View style={[styles.modalBackground, { backgroundColor: `rgba(0, 0, 0, ${opacity})` }]}>
        <View style={[styles.activityIndicatorWrapper]}>
          <ActivityIndicator color={'#1F35D8'} size={'large'} />
        </View>
      </View>
    </Modal>
  );
};

export default Loading;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicatorWrapper: {
    height: 100,
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
});
