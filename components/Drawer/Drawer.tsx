import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image} from 'react-native';
import { Drawer, Icon, Button } from '@ant-design/react-native'

const altura = Dimensions.get('screen').height;
const largura = Dimensions.get('screen').width;

function DrawerHome(){

    let [open, setOpen] = useState<boolean>(false)  
    let [alturaD, setAlturaD] = useState<number>(50)
    let [larguraD, setLarguraD] = useState<number>(50)

    const sidebar = (
        <View> 
            <View style={{marginLeft: largura*0.14, height: altura*0.2}}> 
                <Image source={require('../../assets/img/logo.png')} style={{height: altura*0.2}}/>
            </View>
            <TouchableOpacity>
                <View style={{width: largura*0.762, height: altura*0.07, marginLeft: largura*0.1, flexDirection: "row"}}> 
                    <Icon name="bank" size="md" color="white" style={{marginRight: 20}} />
                    <Text style={{color: "#ffffff", fontSize: 16}}>Detalhes da conta {open}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{width: largura*0.762, height: altura*0.07, marginLeft: largura*0.1, flexDirection: "row"}}> 
                    <Icon name="calendar" size="md" color="white" style={{marginRight: 20}} />
                    <Text style={{color: "#ffffff", fontSize: 16}}>Histórico de simulações</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{width: largura*0.762, height: altura*0.07, marginLeft: largura*0.1, flexDirection: "row"}}> 
                    <Icon name="control" size="md" color="white" style={{marginRight: 20}} />
                    <Text style={{color: "#ffffff", fontSize: 16}}>Configurações</Text>
                </View>
            </TouchableOpacity>
    <Button style={{width: largura*0.2, height: altura*0.04, alignSelf: "center", backgroundColor: "#0e1371", marginTop: altura*0.43}} onPress={() => onOpenChange()}><Text style={{color: "#FFFFFF", fontSize: 12}}>CLOSE</Text></Button>
        </View>
    );

    function onOpenChange(){
        setOpen(!open)
        if(open == true){
            setTimeout(() => {
                setAlturaD(50)
                setLarguraD(50)
            }, 400)   
        }else if(!open){
            setAlturaD(altura)
            setLarguraD(largura)
        }
                 
    }
    
    return (
        open ? (
            <View style={{position: "absolute", width: largura, height: altura*1.5}}>
                <Drawer
                    sidebar={sidebar}
                    position="left"
                    open={open}
                    drawerBackgroundColor="#0e1371">
                        <View style={style.drawerButton}>
                            <TouchableOpacity onPress={() => onOpenChange()}>
                                <Image source={require('../../assets/img/drawer-icon.png')} style={{width: largura/20, height: altura/20}} />
                            </TouchableOpacity>
                        </View>
                </Drawer>
            </View>)    
        : (<View style={{position: "absolute", width: larguraD, height: alturaD}}>
            <Drawer
                sidebar={sidebar}
                position="left"
                open={open}
                drawerBackgroundColor="#0e1371">
                    <View style={style.drawerButton}>
                        <TouchableOpacity onPress={() => onOpenChange()}>
                            <Image source={require('../../assets/img/drawer-icon.png')} style={{width: largura/20, height: altura/20}} />
                        </TouchableOpacity>
                    </View>
            </Drawer>
        </View>)
    );
}

export default DrawerHome

const style = StyleSheet.create({
    drawerButton: {
        width: largura/5,
        height: altura/10,
        justifyContent: 'center',
        alignItems: 'center',
      },
})