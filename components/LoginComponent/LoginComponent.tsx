import React, {useState} from 'react';

import {Text, Dimensions, StyleSheet, View, Image} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
  } from 'react-navigation';
  
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const altura = Dimensions.get('screen').height;
const largura = Dimensions.get('screen').width;

const LoginComponent = (props: Props) => {
  
  let [checked, setChecked] = useState<boolean>(false);
  const navigation = props.navigation

  return (
    <LinearGradient
      colors={['#0e1371','#0e1371', '#1a1fb8']}
      style={{width: largura, height: altura}}>
      <View style={style.loginView}>
        <View style={{height: altura*0.3}}> 
          <Image 
            style={style.logo}
            source={require('../../assets/img/logo.png')}/>
        </View>
        <View style={style.inputView}>
          <Text style={style.inputViewText}> CPF </Text>
        </View>
        <View style={style.textView}>
          <Text style={style.defaultText}> Lembrar meu CPF </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginComponent;

const style = StyleSheet.create({
  loginView: {
    maxWidth: largura,
    maxHeight: altura,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    alignSelf: 'flex-start',
    marginLeft: largura / 7,
    flexDirection: 'row',
    marginBottom: altura / 20,
    fontWeight: "bold"
  },
  inputView: {
    alignSelf: 'flex-start',
    marginLeft: largura / 9,
    color: '#FFFFFF',
  },
  inputViewText: {
    fontSize: 20,
    marginBottom: altura / 50,
    marginLeft: 15,
    color: '#ffffff',
    fontWeight: "bold"
  },
  inputStyle: {
    width: largura * 0.7,
    justifyContent: 'center',
    marginBottom: altura / 50,
    color: '#01232d',
  },
  btnLogin: {
    width: largura * 0.7,
    height: altura / 20,
    backgroundColor: '#6c757d',
    borderColor: '#6c757d',
  },
  defaultText: {
    color: '#ffffff',
    fontWeight: "bold"
  },
  logo: {
    width: largura*0.8,
    height: altura*0.4,
    marginTop: -50
  }
});
