import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

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

const Home = (props: Props) => {

    const navigation = props.navigation;

    return(
        <View>
            <Text>Home</Text>
        </View>
    );
};

export default Home;

const style = StyleSheet.create({
   viewHome: {
       width: largura,
       height: altura,
   },
});
