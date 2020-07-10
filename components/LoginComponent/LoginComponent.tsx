import React, {useState} from 'react';

import {Text, Dimensions, StyleSheet, View, Image} from 'react-native';

import {InputItem, Switch, Button} from '@ant-design/react-native'

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
  let [loading, setLoading] = useState<boolean>(false)

  const navigation = props.navigation

  const submitLogin = () => {
    
    setLoading(true)

        setTimeout(() => {
            navigation.navigate("Auth")         
        }, 1000);

        setTimeout(() => {
            setLoading(false)            
        }, 2000);

  }

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
          <InputItem style={style.inputStyle}/>
        </View>
        <View style={style.textView}>
          <Text style={style.defaultText}> Lembrar meu CPF </Text>
          <Switch
            checked={checked}
            onChange={() => setChecked(!checked)}
            style={{marginLeft: largura/3.2}}/>
        </View>
        {loading && 1 
          ? <Button loading disabled style={style.btnLogin}/>
          : <Button style={style.btnLogin} onPress={() => submitLogin()}><Text style={{color: '#FFFFFF'}}>LOGIN</Text></Button>}
        
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
    color: '#FFFFFF'
  },
  textView: {
    alignSelf: 'flex-start',
    marginLeft: largura / 7,
    flexDirection: 'row',
    marginBottom: altura / 20,
    fontWeight: "bold"
  },
  inputView: {
    width: largura*0.74,
    alignSelf: 'flex-start',
    marginLeft: largura / 9,
    color: '#FFFFFF',
    marginBottom: altura/50
  },
  inputViewText: {
    fontSize: 20,
    marginLeft: largura/40,
    color: '#ffffff',
    fontWeight: "bold"
  },
  inputStyle: {
    width: largura * 0.7,
    justifyContent: 'center',
    color: '#ffffff',
  },
  btnLogin: {
    width: largura * 0.7,
    height: altura / 20,
    backgroundColor: '#6c757d',
    borderColor: '#6c757d',
    color: '#ffffff',
    
  },
  defaultText: {
    color: '#ffffff',
    fontWeight: "bold"
  },
  logo: {
    width: largura*0.8,
    height: altura*0.4,
    marginTop: -50
  },
});
