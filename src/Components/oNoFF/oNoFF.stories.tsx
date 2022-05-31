import React, {useState} from 'react';
import action from'@storybook/addon-actions';
import {OnOff} from "./OnOf";


export default{
    title:'OnOff',
    component:OnOff,
};
export const onMode = () => <OnOff on={true} onClick={x=>x}/>;
export const ofMode = () => <OnOff on={false} onClick={x=>x}/>;



export const ModeChanging = () => {


    const[value, setValue] = useState<boolean>(true);

    return <OnOff on={value} onClick={setValue} />

};
