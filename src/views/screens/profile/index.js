import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  CheckBox,
  RadioInput,
  SelectInput,
  Button,
  Switch,
  SingleValueRangeSlider,
} from 'views/components';

const Profile = () => {
  const [toggle, setToggle] = useState(false);
  const [tempHeight, setTempHeight] = useState(0);

  const onHeightValueChange = useCallback((low) => {
    console.log('LOW VALUE', low);
    setTempHeight(low);
    // if (low != 63) {
    // }
  }, []);

  const formik = useFormik({
    initialValues: {
      hobbies: [],
      gender: '',
    },
    validationSchema: Yup.object({
      gender: Yup.string().required('Gender field is required'),
    }),
    onSubmit: (values) => {
      console.log('SubmitValues', values);
    },
  });
  const handleChangeValue = (item) => {
    const { value } = item;
    let checkedValue = formik.values.hobbies;
    let find = checkedValue.findIndex((item) => item === value);
    if (find > -1) {
      checkedValue.splice(find, 1);
    } else {
      checkedValue.push(value);
    }
    formik.setFieldValue('hobbies', checkedValue);
  };

  const handleChange = (item) => {
    formik.setFieldValue('gender', item.value);
  };
  return (
    <View style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 15 }}>
      <Text>ProfileMain</Text>
      <CheckBox
        label="Hobby"
        required={true}
        value={formik.values.hobbies}
        onPress={handleChangeValue}
        options={[
          { label: 'Singing', value: 'singing' },
          { label: 'Dancing', value: 'dancing' },
          { label: 'Cooking', value: 'cooking' },
          { label: 'Reading', value: 'reading' },
        ]}
      />
      <RadioInput
        label="Gender"
        required={true}
        value={formik.values.gender}
        onPress={handleChange}
        options={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Other', value: 'other' },
        ]}
        error={formik.touched.gender && formik.errors.gender}
      />
      <SelectInput
        label="Country"
        required={true}
        options={[
          { label: 'Singing', value: 'singing' },
          { label: 'Dancing', value: 'dancing' },
          { label: 'Cooking', value: 'cooking' },
          { label: 'Reading', value: 'reading' },
        ]}
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        dropdownStyle={styles.dropdownStyle}
        rowStyle={styles.rowStyle}
        rowTextStyle={styles.rowTextStyle}
      />
      <Switch
        value={toggle}
        text={'ShowOnMyProfile'}
        onPress={() => setToggle((previousState) => !previousState)}
        height={22}
        width={44}
        containerStyle={{ marginTop: 5 }}
      />
      <SingleValueRangeSlider
        title={'Income'}
        parameter={'$'}
        disabled={false}
        min={0}
        max={1000}
        lowValue={tempHeight}
        setLowValue={onHeightValueChange}
      />

      <Button onPress={formik.handleSubmit} />
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  buttonStyle: {
    width: '50%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#444',
  },
  buttonTextStyle: {
    color: '#444',
    textAlign: 'left',
  },
  dropdownStyle: {
    backgroundColor: '#FFF',
    width: '50%',
    borderRadius: 5,
    height: 220,
  },
  rowStyle: {
    // borderWidth: 0,
  },
  rowTextStyle: {
    color: '#444',
    fontSize: 14,
    textAlign: 'left',
  },
});
