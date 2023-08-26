import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { FontSize } from "../../utils/FontSize";
import { borderRadius } from "../../utils/size";

const{width,height}=Dimensions.get("window")
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.appdefultcolor
    },
    headingText:{
        textAlign:"center",
        marginTop:"5%",
        color:Colors.Black,
    fontSize:FontSize.Heading,
 },
 MainView:{
     alignSelf:"center",
     marginTop:"15%"
 }
 ,
 txt:{
   textAlign:"center",
   color:Colors.DarkColor,
   fontSize:FontSize.btn,
   marginTop:height/3
 }
})