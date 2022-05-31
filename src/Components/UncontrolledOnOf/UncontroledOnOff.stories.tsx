import React, {useState} from 'react';
import {action} from'@storybook/addon-actions';

import {UnconrolledOnOff} from "./UncontrolledOnOf";


export default{
    title:'UnconrolledOnOff',
    component:UnconrolledOnOff,
};


const callback = action("on or of clicked")






export const ModeChanging = () => {




    return <UnconrolledOnOff onChange={callback}/>

};
