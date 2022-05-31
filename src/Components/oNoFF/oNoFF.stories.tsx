import React, {useState} from 'react';
import {action} from'@storybook/addon-actions';
import {OnOff} from "./OnOf";


export default{
    title:'OnOff',
    component:OnOff,
};


const callback = action("on or of clicked")



export const onMode = () => <OnOff on={true} onClick={callback} />;
export const ofMode = () => <OnOff on={false} onClick={callback} />;



export const ModeChanging = () => {


    const [value, setValue] = useState<boolean>(true);

    return <OnOff on={value} onClick={setValue} />

};
