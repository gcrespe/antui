import React, {useState} from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar/NavBar'
import Accordion from '../../components/Accordion/Accordion'
import CalcularHome from '../../components/calcularHome/CalcularHome'
import InformacoesIniciais from '../../components/InformacoesIniciais/InformacoesIniciais'
import DrawerHome from '../../components/Drawer/Drawer'
import {Button} from '@ant-design/react-native'

import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
    } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
    
interface Props {
navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const altura = Dimensions.get('screen').height;
const largura = Dimensions.get('screen').width;

const Home = (props: Props) => {

    const navigation = props.navigation;
   
    return(
        <ScrollView>
            <View style={style.viewHome}>
                <NavBar />   
                <View>
                    <InformacoesIniciais/>
                    <Accordion/>    
                    <CalcularHome/>
                    <View style={{marginTop: altura*0.02, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{fontSize: 16}}>
                            Resultado da simulação <Text style={{color: "red"}} >BAIXAR</Text>
                        </Text>
                    </View>
                    <View style={{marginTop: altura*0.02, alignSelf: "center", alignItems: "center", justifyContent: "center", width: largura*0.85, height: altura*0.1, borderColor: "black", borderRadius: 10, borderWidth: 0.5}}>
                        <Text style={{fontSize: 14}}>
                            Mensagem de oferta direcionada ao cliente
                        </Text>
                    </View>
                    <View> 
                        <Button style={style.btnCalcular}><Text style={{color: '#FFFFFF'}}>SALVAR PRÉ-SIMULAÇÃO</Text></Button>
                    </View>
                </View>
                
            </View>
            <DrawerHome/>
        </ScrollView>
    );
};

export default Home;

const style = StyleSheet.create({
   viewHome: {
       width: largura,
       flex: 1,
       flexDirection: 'column',
       backgroundColor: '#FFFFFF',
    },
    btnCalcular: {
        width: largura * 0.85,
        height: altura / 20,
        marginTop: altura*0.03,
        marginBottom: altura*0.03,
        alignSelf: "center",
        backgroundColor: '#6c757d',
        borderColor: '#6c757d',
        color: '#ffffff' 
    },
});
