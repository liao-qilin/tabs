import React ,{ Component } from 'react';
import {
  StyleSheet,Text,View,TouchableOpacity,Image 
  } from 'react-native';
class MyTabBar extends Component {

    render(){
      return (
        <View style={styles.tabs}>
          {this.props.tabNames.map((tab,index)=>this.buildTabItem(tab,index))}
        </View>
      )
    }

    buildTabItem(tab,index){
      let icon = this.props.tabIcons[index];
      return(
        <TouchableOpacity 
        style={styles.tab}
        onPress={()=>{
          this.props.goToPage(index)
        }}
        >
        <View style={styles.tabItem}>
          <Image
            style={styles.tabIcon}
            source={icon}
          />
          <Text style={styles.tabText}>
            {tab}
          </Text>
        </View>
        </TouchableOpacity>
      );
    }

}



const styles = StyleSheet.create({
    tabs:{
        flexDirection: 'row',
        height: 50,
        marginTop:10,
        backgroundColor:'white'
    },
    tab:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabItem:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    tabText:{
      fontSize:14,
      margin:5
    },
    tabIcon:{
        width:25,
        height:25,
    }
});
export default MyTabBar;
