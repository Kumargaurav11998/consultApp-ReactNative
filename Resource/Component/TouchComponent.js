import React from "react";
import { Image, TouchableOpacity, Text } from "react-native";

function TouchComponent(props) {
    //console.log(props.press)
    return (
        <TouchableOpacity
        onPress={()=>props.press()}
        style={{
            backgroundColor: props.backgroundColor,
            borderRadius: props.borderRadius,
             paddingVertical: props.paddingVertical,
            paddingHorizontal:props.paddingHorizontal,
           
        }}>
            
            <Text style={{ textAlign: 'center', color: props.titlecolor , fontSize:props.fontSize}}>{props.title}</Text>
        </TouchableOpacity>
    )
}
export default TouchComponent