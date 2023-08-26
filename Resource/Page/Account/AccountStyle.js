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
     marginTop:"15%",
     width:width-30
 }
 ,
 btnview:{
flexDirection:"row",
alignSelf:"flex-start",
marginTop:"8%"
 },
 label:{
     color:Colors.DarkColor,
     fontSize:FontSize.lable,
     marginTop:"1%"
 }
})