import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions} from 'react-native'

import {Button, List, Radio} from '@ant-design/react-native'

const altura = Dimensions.get('screen').height;
const largura = Dimensions.get('screen').width;

const RadioItem = Radio.RadioItem

const CalcularHome = () =>  {

    let nome: string = "<NOME DO PRODUTO>"
    let [part2value, setpart2value] = useState<number>()

        return (
            <View> 
            <List>
                <Button style={style.btnCalcular}><Text style={{color: '#FFFFFF'}}>CALCULAR</Text></Button>
                <Button type={'ghost'} disabled style={{width: largura * 0.85, height: altura / 20, alignSelf: "center", opacity: 0.3, borderColor: '#000000', marginTop: altura*0.02}}><Text style={{color: '#000000'}}>{nome}</Text></Button>
                <RadioItem
                    checked={part2value === 1}
                    onChange={(event: any) => {
                    if (event.target.checked) {
                        setpart2value(1);
                    }
                    }}
                    style={{width: largura*0.9, alignSelf: "center"}}>
                        99 x R$9.999,00
                </RadioItem>
                <RadioItem
                    checked={part2value === 2}
                    onChange={(event: any) => {
                    if (event.target.checked) {
                        setpart2value(2);
                    }
                    }}
                    style={{width: largura*0.9, alignSelf: "center"}}>
                        99 x R$9.999,00
                </RadioItem>
                <RadioItem
                    checked={part2value === 3}
                    onChange={(event: any) => {
                    if (event.target.checked) {
                        setpart2value(3);
                    }
                    }}
                    style={{width: largura*0.9, alignSelf: "center"}}>
                        99 x R$9.999,00
                </RadioItem>
                <RadioItem
                    checked={part2value === 4}
                    onChange={(event: any) => {
                    if (event.target.checked) {
                        setpart2value(4);
                    }
                    }}
                    style={{width: largura*0.9, alignSelf: "center"}}>
                        99 x R$9.999,00
                </RadioItem>
                <RadioItem
                    checked={part2value === 5}
                    onChange={(event: any) => {
                    if (event.target.checked) {
                        setpart2value(5);
                    }
                    }}
                    style={{width: largura*0.9, alignSelf: "center"}}>
                        99 x R$9.999,00
                </RadioItem>
            </List>
        </View> 
    )
}

export default CalcularHome
const style = StyleSheet.create({
    btnCalcular: {
        width: largura * 0.85,
        height: altura / 20,
        marginTop: altura*0.05,
        alignSelf: "center",
        backgroundColor: '#6c757d',
        borderColor: '#6c757d',
        color: '#ffffff' 
    },
    listItem: {
        width: largura,
        backgroundColor: '#ffffff'
    }
})