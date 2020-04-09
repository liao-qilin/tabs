import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
class User extends Component {

  render() {
    return(
      <View style={styles.container}>
      <Text>user page</Text>
      </View>
    );
  }
}

export default User;

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});

