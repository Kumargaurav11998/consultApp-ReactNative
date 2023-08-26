import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

const{width,height}=Dimensions.get("window")
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.appdefultcolor
    },
    AvatarContainer:{
        alignSelf:"center",
        marginTop:height/3,
        borderRadius:50
    },
    avatarStyle:{
        resizeMode:"contain",
      
    }
})