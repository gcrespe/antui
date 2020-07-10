import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions} from 'react-native'

import {Button, List} from '@ant-design/react-native'

const altura = Dimensions.get('screen').height;
const largura = Dimensions.get('screen').width;

const CalcularHome = () =>  {

    let nome: string = "<NOME DO PRODUTO>"

        return (
            <View> 
            <List>
                <Button style={style.btnCalcular}><Text style={{color: '#FFFFFF'}}>CALCULAR</Text></Button>
                <Button type={'ghost'} disabled style={{width: largura * 0.85, height: altura / 20, alignSelf: "center", opacity: 0.3, borderColor: '#000000', marginTop: altura*0.02}}><Text style={{color: '#000000'}}>{nome}</Text></Button>
                <List.Item style={style.listItem}> 
                    <Text style={{marginLeft: largura*0.06, fontSize: 16}}>
                        99 x R$9.999,00
                    </Text>
                </List.Item>
                <List.Item style={style.listItem}> 
                    <Text style={{marginLeft: largura*0.06, fontSize: 16}}>
                        99 x R$9.999,00
                    </Text>
                </List.Item>
                <List.Item style={style.listItem}> 
                    <Text style={{marginLeft: largura*0.06, fontSize: 16}}>
                        99 x R$9.999,00
                    </Text>
                </List.Item>
                <List.Item style={style.listItem}> 
                    <Text style={{marginLeft: largura*0.06, fontSize: 16}}>
                        99 x R$9.999,00
                    </Text>
                </List.Item>
                <List.Item style={style.listItem}> 
                    <Text style={{marginLeft: largura*0.06, fontSize: 16}}>
                        99 x R$9.999,00
                    </Text>
                </List.Item>   
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