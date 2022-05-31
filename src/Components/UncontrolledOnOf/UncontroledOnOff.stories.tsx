import React, {useState} from 'react';
import {action} from'@storybook/addon-actions';
import {UnconrolledOnOff} from "./UncontrolledOnOf";



export default{
    title:'UnconrolledOnOff',
    component:UnconrolledOnOff,
};


const callback = action("on or of clicked")



export const onMode = () => <UnconrolledOnOff defaultOn={true}  onChange={callback} />;
export const ofMode = () => <UnconrolledOnOff defaultOn={false} onChange={callback} />;
export const DefaultInputValue = () => <input defaultValue={'yo'} />;



/*
export const ModeChanging = () => {




    return <UnconrolledOnOff onChange={callback}/>

};
*/
