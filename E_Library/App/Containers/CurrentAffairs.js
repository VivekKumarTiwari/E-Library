import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
export default class CurrentAffairs extends React.Component {  
    render() {  
      return (  
          <View style={styles.container}>  
            <Text>Current Affairs Screen</Text>  
          </View>  
      );  
    }  
  }  
  const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  