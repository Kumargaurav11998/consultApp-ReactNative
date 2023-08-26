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
        marginTop:"5%",
        color:Colors.Black,
    fontSize:15,
 textAlign:"center"
 },
 MainView:{
     alignSelf:"center",
     marginTop:"10%"
 }
 ,
 btn:{
     alignSelf:"center",
     width:width-50,
     borderRadius:borderRadius.BtnBr
 },
 headingview:{
alignSelf:"flex-end",
marginRight:"5%"

 },
 AvatarContainer: {
    alignSelf: "center",
    marginTop: "5%",
    borderRadius: 10
},
})