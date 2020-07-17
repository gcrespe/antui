import React from 'react'
import { Text, View, StyleSheet, Dimensions, Image} from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler';


const altura = Dimensions.get('screen').height;
const largura = Dimensions.get('screen').width;

const NavBar = () => {
  return (
      <View style={style.navBar}>
          <View style={style.drawerButton}>
            
          </View>
        <View style={style.navBarLogo}>
          <Image source={require('../../assets/img/logo2.png')}/>
          <Text style={{color: "#ffcc00", textAlignVertical: "center"}}>Giuliano Crespe</Text>
        </View>
        <TouchableOpacity>
          <View style={style.settingsButton}>
            <Image source={require('../../assets/img/settings-icon.png')} style={{width: largura/20, height: altura/30}} />
          </View>
        </TouchableOpacity>
      </View>
  )
}

export default NavBar

const style = StyleSheet.create({
  navBar: {
    position: "absolute",
    flex: 1,
    flexDirection: 'row',
    width: largura,
    height: altura/10,
    justifyContent: "space-between",
    backgroundColor: '#0e1371',
  },
  drawerButton: {
    width: largura/5,
    height: altura/10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  settingsButton: {
    width: largura/5,
    height: altura/10,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navBarLogo:{
    flexDirection: 'column',
    alignSelf: 'center',
    height: altura/10,
    width: largura*3/5,
    alignItems: "center",
    justifyContent: "center",
  }
})