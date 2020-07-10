import React, {useState} from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import NavBar from '../NavBar/NavBar'
import Accordion from '../Accordion/Accordion'
import CalcularHome from '../calcularHome/CalcularHome'
import InformacoesIniciais from '../InformacoesIniciais/InformacoesIniciais'

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
                <InformacoesIniciais/>
                <Accordion/>    
                <CalcularHome/>
            </View>
        </ScrollView>
    );
};

export default Home;

const style = StyleSheet.create({
   viewHome: {
       width: largura,
       flex: 1,
       flexDirection: 'column',
       backgroundColor: '#FFFFFF'
   },
});
