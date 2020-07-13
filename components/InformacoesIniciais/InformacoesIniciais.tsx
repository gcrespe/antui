import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

import {Slider, InputItem} from '@ant-design/react-native'

const altura = Dimensions.get('screen').height;
const largura = Dimensions.get('screen').width;

const InformacoesIniciais = () => {

    let [EntMin, setEntMin] = useState<number>(0)

    const handleSliderValue = (value: any) => {
        setEntMin(value)
    }

    return (
        <View>
            <View style={style.viewTitle}>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: altura*0.02}}>
                    RESULTADO DA PRÉ-SIMULAÇÃO
                </Text>
                <Text style={{fontSize: 14, marginTop: altura*0.02}}>
                    ALTERE SUAS CONDIÇÕES COMO PREFERIR
                </Text>
            </View>
            <View style={style.viewSlider}>
                <Text style={{marginLeft: largura*0.02, marginBottom: altura*0.01}}> Entrada mínima: R${EntMin} </Text>    
                <View style={{marginTop: 8}}>
                    <Slider min={0} max={1000}
                        minimumTrackTintColor="orange"
                        maximumTrackTintColor="grey"
                        step={1}
                        onChange={(value) => handleSliderValue(value)}/>
                </View>
            </View>
            <View style={style.viewGeral1}>
                <Text style={{marginLeft: largura*0.02, marginBottom: altura*0.01, marginTop: altura*0.02}}> Entrada </Text>    
                <InputItem style={style.inputStyle} placeholder={"R$"}/>
            </View>
            <View style={style.viewGeral2}>
                <View style={{width: largura*0.55}}>
                    <Text style={{marginLeft: largura*0.02, marginBottom: altura*0.01, marginTop: altura*0.02}}> Valor do bem </Text>    
                    <InputItem style={{opacity: 0.5}} placeholder={"R$"}/>
                </View>
                <View style={{width: largura*0.30}}>
                    <Text style={{marginLeft: largura*0.02, marginBottom: altura*0.01, marginTop: altura*0.02}}> Parcelas </Text>    
                    <InputItem style={{opacity: 0.5}} placeholder={"Ex.: 5"}/>
                </View>
            </View>
         </View>
    )
}

export default InformacoesIniciais

const style = StyleSheet.create({
    viewTitle: {
        width: largura, 
        height: altura*0.14,
        marginTop: altura*0.1,
        alignItems: 'center',
    },
    viewSlider: {
        width: largura*0.90, 
        height: altura/15,
        marginLeft: largura*0.05,
    },
    viewGeral1: {
     width: largura*0.90, 
     height: altura/20,
     marginLeft: largura*0.05,
    },
    inputStyle: {
     width: largura * 0.90,
     justifyContent: 'center',
     opacity: 0.5
    },
    viewGeral2: {
     flex: 0,
     flexDirection: 'row',
     width: largura*0.90, 
     height: altura/20,
     marginLeft: largura*0.05,
     marginTop: altura*0.05
    }
})