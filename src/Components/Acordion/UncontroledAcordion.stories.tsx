import React, {useState} from 'react';
import {action} from'@storybook/addon-actions';
import {Acordion} from "./Acordion";
import {UncontrollledAccordion} from "./UncontrolledAccordion";



export default{
    title:'UncontrollledAccordion',
    component:UncontrollledAccordion,
};


const callback = action("Accordion mode event fired");





export const ModeChanging = () => {


    return <UncontrollledAccordion titleValue={'User'}  />

};