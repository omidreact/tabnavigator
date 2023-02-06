import React from "react";
import { View,Text,StyleSheet, Button } from "react-native";


function DetailsScreen(props) {
    return (
      <View style={styles.firstsec}>
        <Text>detail Screen</Text>
        <Text>{props.route.params.name}</Text>  
        <Button title="go to back" onPress={()=>props.navigation.goBack()}/>
      </View>
    );
  }

const styles=StyleSheet.create({
  firstsec:{
flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"violet"
  }
})
export {DetailsScreen};