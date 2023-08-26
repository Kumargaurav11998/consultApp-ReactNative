import { Avatar } from "@rneui/base";

import React from "react";
import { Image, TouchableOpacity, Text } from "react-native";

function TouchwithiconComponent(props) {
    //console.log(props.press)
    return (
        <TouchableOpacity
        onPress={()=>props.press()}
        style={{
            backgroundColor: props.backgroundColor,
          borderWidth:props.borderWidth,
            borderRadius: props.borderRadius,
             paddingVertical: props.paddingVertical,
            paddingHorizontal:props.paddingHorizontal,
            flexDirection:"row",
            borderColor:props.borderColor,
         
           
        }}>
            <Avatar
            size={props.size}
            rounded={props.rounded}
            icon={{name:props.iconname,type:props.icontype,color:props.iconcolor ,size:props.iconsize}}
            containerStyle={{
                borderWidth:props.iconborderWidth,
                borderColor:props.iconborc,
                marginLeft:props.iconML
            }}
            />
            
            <Text style={{ textAlign: 'center',
            //  backgroundColor: props.backgroundColor,
             color: props.titlecolor , 
             fontSize:props.fontSize,
             marginTop:props.textmargintop,
             marginLeft:props.txtmarginLeft}}>{props.title}</Text>
        </TouchableOpacity>
    )
}
export default TouchwithiconComponent
