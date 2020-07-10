import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Accordion, List } from '@ant-design/react-native';

const altura = Dimensions.get('screen').height;
const largura = Dimensions.get('screen').width;


const AccordionHome = () => { 

    let [activeSections, setActiveSection] = useState<number[]>();

    
    const accordionOnChange = (activeSections: number[]) => { 
        setActiveSection(activeSections)
    }

    return (
        <Accordion style={{alignSelf: "center", width: largura*0.9, marginTop: altura*0.1}} 
                   onChange={accordionOnChange}
                   activeSections={activeSections}> 
            <Accordion.Panel header="OUTRAS INFORMAÇÕES">
                <List> 
                    <List.Item>
                        Não existem informações adicionais
                    </List.Item>
                </List>
            </Accordion.Panel>
        </Accordion>
    );
}

export default AccordionHome