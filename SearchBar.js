import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Image,Dimensions} from 'react-native';
let width = Dimensions.get('window').width;
class SearchBar extends Component {

  render() {
    
    return (
    <View style={styles.container}>
        <TextInput
          placeholder="输入查询"
          style={styles.textInput}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    height:30,
    flexDirection: 'row',
  },
  textInput:{
    width:width-32,
    borderColor: 'skyblue',
    alignSelf:'center',
  }
});

export default SearchBar;
