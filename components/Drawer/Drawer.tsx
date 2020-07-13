import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TouchableHighlight} from 'react-native';
import { Drawer, List, Icon } from '@ant-design/react-native'

const altura = Dimensions.get('screen').height;
const largura = Dimensions.get('screen').width;

const DrawerHome = () => {

    let [open, setOpen] = useState<boolean>(false)

    const sidebar = (
      <ScrollView>
        <View> 
            <View style={{marginLeft: largura*0.14, height: altura*0.2}}> 
                <Image source={require('../../assets/img/logo.png')} style={{height: altura*0.2}}/>
            </View>
            <TouchableOpacity>
                <View style={{width: largura*0.762, height: altura*0.07, marginLeft: largura*0.1, flexDirection: "row"}}> 
                    <Icon name="bank" size="md" color="white" style={{marginRight: 20}} />
                    <Text style={{color: "#ffffff", fontSize: 16}}>Detalhes da conta</Text>
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
        </View>
      </ScrollView>
    );

    const onOpenChange = () => {
        setOpen(true)
    }

    let zindex: number = 1
    const openDrawer = () => {
        setOpen(!open)
        if(open){
            zindex = 2
        }else{
            zindex = 0 
        }
    }


    return (
        <View style={{zIndex: zindex, position: "absolute"}}>
            <Drawer
                sidebar={sidebar}
                position="left"
                open={open}
                onOpenChange={onOpenChange}
                drawerBackgroundColor="#0e1371">
                <View style={{height: altura*2, width: largura}}>
                    <View style={style.drawerButton}>
                        <TouchableOpacity onPress={openDrawer}>
                            <Image source={require('../../assets/img/drawer-icon.png')} style={{width: largura/20, height: altura/20}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Drawer>
        </View>
    );
}

export default DrawerHome

const style = StyleSheet.create({
    drawerButton: {
        width: largura/5,
        height: altura/10,
        justifyContent: 'center',
        alignItems: 'center'
      },
})