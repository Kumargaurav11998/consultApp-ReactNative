import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../utils/Colors';

const data1= [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const TimeSlotDropDown = ({title,data,getTimeSlot}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
//   const renderLabel = () => {
//     if (value || isFocus) {
//       return (
//         <Text style={[styles.label, isFocus && { color: Colors.DarkColor }]}>
//         Select Time Slot
//         </Text>
//       );
//     }
//     return null;
//   };

  return (
    <View style={styles.container}>
      {/* {renderLabel()} */}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? title : '...'}
        value={value}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          getTimeSlot(item.value)
        
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={Colors.DarkColor}
            name="clockcircle"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default TimeSlotDropDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  dropdown: {
    height: 56,
    borderColor:Colors.DarkColor,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 13,
    color:Colors.DarkColor
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});