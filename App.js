/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{ Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ScrollableTabView,
{
  DefaultTabBar,
  ScrollableTabBar
} from 'react-native-scrollable-tab-view';

import MyTabBar from "./MyTabBar";
import SearchBar from "./SearchBar";
import FlatListBasics from './pages/FlatListBasics';

let ScreenWidth = Dimensions.get('window').width;
 class App extends Component {

  constructor(props){
    super(props);
    this.state = {
       tabNames: ['主页', '图书', '小组', '我的'],
       tabIcons:[
         require('./assets/images/home.png'),
         require('./assets/images/book.png'),
         require('./assets/images/group.png'),
         require('./assets/images/mine.png'),
       ],
    };
  }

  render() {
    let tabNames = this.state.tabNames;
    let tabIcons = this.state.tabIcons;
    return (
      <ScrollableTabView
        style={styles.container}
        renderTabBar={() => <MyTabBar tabNames={tabNames} tabIcons={tabIcons}/>}
        tabBarUnderlineStyle={styles.lineStyle}
        tabBarPosition="bottom"
        tabBarActiveTextColor='#FF0000'
        onChangeTab={(obj)=>{
         // console.log('onChangeTab Called',obj);
        }}
        onScroll={(obj)=>{
         // console.log('onScroll Called',obj);
        }}
      >
        <View>
          <View style={styles.header}>
            <View style={styles.searchBox}>
              <Image 
                source={require('./assets/images/search.png')}
                style={{width:20,height:20}}
              />
              <TextInput
                style={{height: 20,color:'black','marginLeft':5,'flex':1}}
                placeholder="文艺作品中打动你的"
              />
              <Image 
                source={require('./assets/images/sao.png')}
                style={{width:20,height:20}}
              />
            </View>
            <Image
                source={require('./assets/images/letters.png')}
                style={{width:30,height:30,lineHeight:30,padding:10}}
            />
          </View>
          <View tabLable='主页'>
            <FlatListBasics/>
          </View>
        </View>
        <View tabLabel = '图书'>
          <Text>图书</Text>
        </View>
        <View tabLabel='小组'>
          <Text>小组</Text>
        </View>
        <View tabLabel = '我的'>
          <Text>我的</Text>
        </View>
      
      </ScrollableTabView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    //backgroundColor: '#F5FCFF',
  },
  lineStyle: {
    width: ScreenWidth / 4,
    height: 2,
  },
  header:{
    alignItems: 'center',
    justifyContent:'space-around',
    height:80,
   // marginTop:30,
    marginBottom:10,
    flexDirection:'row',
    backgroundColor:'#00B51D'
  },
  searchBox:{  
    height:40,
    backgroundColor:'#999999',
    flexDirection:'row',
    padding:10,
    overflow:'hidden',
    width:ScreenWidth-80,
    borderRadius:30
  }
});

export default App;
