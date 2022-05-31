import React, {useState} from 'react';
import {action} from'@storybook/addon-actions';
import {Acordion} from "./Acordion";



export default{
    title:'Acordion',
    component:Acordion,
};


const callback = action("Accordion mode event fired");



export const MenuColapsedMode = () => <Acordion titleValue={'Menu'} onClick={callback} colapsed={true}/>;
export const UserUncolapsedMode = () => <Acordion titleValue={'User'} onClick={callback} colapsed={false}/>;


export const ModeChanging = () => {


    const [value, setValue] = useState<boolean>(true);

    return <Acordion titleValue={'User'}  colapsed={value} onClick={()=>setValue(!value)}/>

};