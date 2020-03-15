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
  Image
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
       <View tabLable='主页'>
          <Text>
  
          主页
        </Text>
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
    backgroundColor: '#F5FCFF',
  },
  lineStyle: {
    width: ScreenWidth / 4,
    height: 2,
    backgroundColor:'red'
  },
});

export default App;
