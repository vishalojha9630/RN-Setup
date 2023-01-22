import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RangeSlider from 'rn-range-slider';

const SingleValueRangeSlider = ({
  title,
  disabled,
  step = 1,
  min,
  max,
  changedColor,
  lowValue,
  parameter,
  setLowValue,
}) => {
  console.log('lowValue', lowValue);
  const renderThumb = () => (
    <View style={{ borderRadius: 30, backgroundColor: changedColor ? '#DA1313' : '#1D64DC' }}>
      <View style={styles.thumbeContainer} />
    </View>
  );

  const renderRail = () => (
    <View style={styles.railContainer}>
      <View style={styles.selectedValueStyle} />
    </View>
  );
  const renderRailSelected = () => (
    <View style={{ flex: 1, backgroundColor: changedColor ? '#DA1313' : '#1D64DC' }}>
      <View style={styles.selectedValueStyle} />
    </View>
  );

  const handleValueChange = (low) => {
    setLowValue(low);
  };

  return (
    <View style={{ marginTop: 15, opacity: disabled ? 0.4 : 1 }}>
      <View style={styles.textContainerStyle}>
        <Text style={styles.sliderHeadingStyle}>{title}</Text>
        <Text style={[styles.sliderStyle, { paddingEnd: lowValue <= 1000 ? 10 : 0 }]}>
          {parameter}
        </Text>
      </View>
      <RangeSlider
        disableRange={true}
        disabled={disabled}
        min={min}
        max={max}
        low={lowValue}
        step={step}
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        onValueChanged={handleValueChange}
      />
      <View style={styles.textContainerStyle}>
        <Text style={styles.sliderHeadingStyle}>{lowValue}</Text>
        <Text style={[styles.sliderStyle, { paddingEnd: lowValue <= 1000 ? 10 : 0 }]}>{max}</Text>
      </View>
    </View>
  );
};

export default SingleValueRangeSlider;
const styles = StyleSheet.create({
  thumbeContainer: {
    height: 13,
    width: 13,
    borderRadius: 30,
    backgroundColor: '#FFF',
    margin: 2,
  },
  railContainer: {
    flex: 1,
    backgroundColor: '#DFDFDF',
    height: 3,
    borderRadius: 30,
  },
  selectedValueStyle: {
    height: 3,
    borderRadius: 30,
  },
  textContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderHeadingStyle: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    marginBottom: 5,
  },
  sliderStyle: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    marginBottom: 5,
    textAlign: 'right',
  },
});
