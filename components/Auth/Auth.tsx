import React from 'react'

import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'

import {Button} from 'antd-mobile-rn'

import LinearGradient from 'react-native-linear-gradient';

import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState } from 'react-navigation';
    
interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const altura = Dimensions.get('screen').height;
const largura = Dimensions.get('screen').width;

const Auth = (props: Props) => {
    
    const navigation = props.navigation

    return(
        <LinearGradient
        colors={['#0e1371','#0e1371', '#1a1fb8']}
        style={{width: largura, height: altura}}>
            <View style={style.homeView}>
                <View style={style.outlineView}/>
                <View style={style.viewTitle}>
                        <Text style={style.titleAutenticacao}> AUTENTICAÇÃO </Text>
                </View>
                <View style={style.circlesView}>
                    <Image source={require('../../assets/img/circle.png')} style={{width: 20, height: 20, marginHorizontal: 4, borderWidth: 1, borderColor: "#000000", borderRadius: 50}}></Image>
                    <Image source={require('../../assets/img/circle.png')} style={{width: 20, height: 20, marginHorizontal: 4, borderWidth: 1, borderColor: "#000000", borderRadius: 50}}></Image>
                    <Image source={require('../../assets/img/circle.png')} style={{width: 20, height: 20, marginHorizontal: 4, borderWidth: 1, borderColor: "#000000", borderRadius: 50}}></Image>
                    <Image source={require('../../assets/img/circle.png')} style={{width: 20, height: 20, marginHorizontal: 4, borderWidth: 1, borderColor: "#000000", borderRadius: 50}}></Image>
                    <Image source={require('../../assets/img/circle.png')} style={{width: 20, height: 20, marginHorizontal: 4, borderWidth: 1, borderColor: "#000000", borderRadius: 50}}></Image>
                    <Image source={require('../../assets/img/circle.png')} style={{width: 20, height: 20, marginHorizontal: 4, borderWidth: 1, borderColor: "#000000", borderRadius: 50}}></Image>
                </View>
                <View style={style.senhaView}>
                    <View style={style.senhaButtons}> 
                        <Button style={style.senhaButton}><Text style={{color: "#FFFFFF", fontSize: 15, fontWeight: "bold"}}>1 OU 4</Text></Button>
                        <Button style={style.senhaButton}><Text style={{color: "#FFFFFF", fontSize: 15, fontWeight: "bold"}}>5 OU 7</Text></Button>
                        <Button style={style.senhaButton}><Text style={{color: "#FFFFFF", fontSize: 15, fontWeight: "bold"}}>8 OU 3</Text></Button>
                    </View>
                    <View style={style.senhaButtons}> 
                        <Button style={style.senhaButton}><Text style={{color: "#FFFFFF", fontSize: 15, fontWeight: "bold"}}>2 OU 9</Text></Button>
                        <Button style={style.senhaButton}><Text style={{color: "#FFFFFF", fontSize: 15, fontWeight: "bold"}}>6 OU 0</Text></Button>
                        <Button style={style.senhaButton}><Text style={{color: "#FFFFFF", fontSize: 15, fontWeight: "bold"}}>0 OU 3</Text></Button>
                    </View>
                    <View style={style.principalButtons}>
                        <Button style={style.entraButton} onClick={() => navigation.navigate("Login")}><Text style={{color: "#FFFFFF", fontWeight: "bold"}}>VOLTAR</Text></Button>
                        <Button style={style.entraButton} onClick={() => navigation.navigate("Home")}><Text style={{color: "#FFFFFF", fontWeight: "bold"}}>ENTRAR</Text></Button>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Auth

const style = StyleSheet.create({
    homeView: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    senhaView: {
        alignContent: "center",
        justifyContent: "center",
        textAlign: 'center',
        marginTop: altura*0.05
    },
    senhaButtons: {
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center"
    },
    senhaButton: {
        marginHorizontal: 3,
        marginVertical: 3,
        width: largura/5,
        height: altura/22,
        backgroundColor: '#6c757d',
        borderColor: '#6c757d',
    },
    entraButton: {
        marginHorizontal: 5,
        width: largura/3.3,
        height: altura/20,
        color: "#FFFFFF",
        backgroundColor: '#6c757d',
        borderColor: '#6c757d', 
    },
    principalButtons: {
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        marginTop: altura*0.06
    },
    outlineView: {
        width: largura*0.9,
        height: altura*0.5,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        borderColor: '#6c757d', 
        borderWidth: 2,
        position: "absolute",
        borderRadius: 5,
        marginLeft: largura*0.05,
        marginTop: altura*0.2
    },
    titleAutenticacao: {
        fontSize: 20, 
        color: "#FFFFFF", 
        fontWeight: "bold", 
        backgroundColor: "#0e1371", 
        marginTop: -altura*0.18, 
        letterSpacing: 1, 
        width: largura*0.5, 
        textAlign: "center"
    },
    viewTitle: {
        alignContent: "center", 
        justifyContent: "center",
         alignSelf: "center", 
    },
    circlesView: {
        flex: 0,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        marginLeft: largura/4,
        width: largura/2,
        height: altura/20,
    }
})