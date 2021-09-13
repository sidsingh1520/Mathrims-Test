import React from "react";
import { Text, StyleSheet,View,Button,Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home =() => {
  return(
    <View style={styles.container}>
        <Text style={styles.text}>Permissions Allowed:</Text>
        <View style={styles.block}>
            <View style={styles.row}>
                <Image source={require("../assets/x.png")}/>
                <Text style={styles.txt}>File System</Text>
            </View>
            <View style={styles.row}>
                <Image source={require("../assets/check.png")}/>
                <Text style={styles.txt}>Camera</Text>
            </View>
            <View style={styles.row}>
                <Image source={require("../assets/check.png")}/>
                <Text style={styles.txt}>Location</Text>
            </View>
            <View style={styles.row}>
                <Image source={require("../assets/x.png")}/>
                <Text style={styles.txt}>Bluetooth</Text>
            </View>
            <View style={styles.row}>
                <Image source={require("../assets/check.png")}/>
                <Text style={styles.txt}>SMS</Text>
            </View>
            <View style={styles.row}>
                <Image source={require("../assets/x.png")}/>
                <Text style={styles.txt}>Voice Input</Text>
            </View>
            <View style={styles.row}>
                <Image source={require("../assets/check.png")}/>
                <Text style={styles.txt}>Notifcations</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color:"#333333",
    textDecorationLine:'underline',
    alignSelf:'center'
  },
  txt: {
    fontSize: 16,
    color:"#333333",
    marginLeft:40
  },
  container:{
      flex:1,
      paddingTop:30
  },
  row:{
      flexDirection:'row',
      alignItems:'center',
  },
  block:{
      marginLeft:70,
      marginTop:60,
      justifyContent:'space-evenly',
      height:250
  }
});

export default Home;