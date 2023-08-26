import  React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import {Avatar} from "@rneui/base"
import { styles } from './SplashStyle';

function SplashScreen (props){
    useEffect(()=>{
        setTimeout(() => {
           props.navigation.replace("LoginWithMobileScreen")
        }, 3000);
       
    },[])
    return(
        <SafeAreaView style={[styles.container]}>
            
            <Avatar
            size={250 }
            source={require("../../Assets/Photos/logo.png")}
            containerStyle={styles.AvatarContainer}
            avatarStyle={styles.avatarStyle}
            />
        </SafeAreaView>
    )
}

export default SplashScreen