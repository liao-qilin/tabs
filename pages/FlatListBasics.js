import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View ,Image } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      //<View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
          ]}
          renderItem={
           
            ({item}) =>  
            <View style={styles.item}>
              <View style={styles.itemTop}>
                  <Image 
                  source={{uri:'https://cdn.huodao.hk/zlj_default_ava.png'}}
                  style={styles.photo}
                  />
                <View style={styles.itemUserInfo}>
                  <Text style={styles.name}>努力补翻好青年</Text>
                  <View style={styles.action}>
                    <Text stlye={styles.type}>说</Text>
                    <Text style={styles.time}>23小时前</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.content}>
              OK进口法国境内图片sdfs 史蒂芬森沈德符sf方式方式奋斗沙发上电风扇分
              </Text>
              <View style={styles.itemBottom}>
                <View>
                  <Image 
                      source={require('../assets/images/like.png')}
                      style={{width: 20, height: 20,margin:10}}
                  />
                </View>
                <View>
                  <Image 
                      source={require('../assets/images/comment.png')}
                      style={{width: 20, height: 20,margin:10}}
                  />
                </View>
                <View>
                  <Image 
                      source={require('../assets/images/share.png')}
                      style={{width: 20, height: 20,margin:10}}
                  />
                </View>
              </View>
            </View>
            }
        />
      //</View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    fontSize: 18,
    marginBottom:10,
    color:'#ffffff',
    backgroundColor:'white',
    paddingTop:10
  },
  itemBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemTop: {
    flex: 1,
    flexDirection: 'row',
  },
  itemUserInfo: {
    flex: 1,
    margin : 10,
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:5
  },
  content:{
      marginLeft: 10,
      flexDirection: 'row',
      letterSpacing:2
  },
  photo:{
    width: 40, 
    height: 40,
    marginLeft:5
  },
  name:{
    fontSize:14,
  },
  type: {
    fontSize:10,
    color:'gray'
  }
})