import React from 'react';
import {TextInput} from 'react-native';

function TextInputeComponent(props) {
  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      onChangeText={v => props.onchange(v)}
      keyboardType={props.keyboardType}
      multiline={props.multiline}
      editable={props.editable}
      value={props.value}
      characters={props.characters}
      secureTextEntry={props.secureTextEntry}
      style={{
        backgroundColor: props.backgroundColor,
        paddingHorizontal: props.paddingHorizontal,
        paddingVertical: props.paddingVertical,
        borderRadius: props.borderRadius,
        paddingLeft: props.placeholderPadding,
        fontSize: props.fontSize,
        borderWidth: props.borderWidth,
        paddingLeft: props.paddingLeft,
        borderColor: props.borderColor,
        height: props.height,
        textAlignVertical: props.textAlignVertical,
        width: props.width,
        color: props.color,
      }}></TextInput>
  );
}

export default TextInputeComponent;
