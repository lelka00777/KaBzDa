import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrollendRating, RattingValueType} from "./UncontrolledRatting";

export default {
    title: 'UncontrollendRating',
    component: UncontrollendRating,
};


const callback = action("changet")
export const EmptyStars = () => <UncontrollendRating defaultValue={0} onChange={callback}/>;
export const Rating1 = () => <UncontrollendRating defaultValue={1} onChange={callback}/>;
export const Rating2 = () => <UncontrollendRating defaultValue={2} onChange={callback}/>;
export const Rating3 = () => <UncontrollendRating defaultValue={3} onChange={callback}/>;
export const Rating4 = () => <UncontrollendRating defaultValue={4} onChange={callback}/>;
export const Rating5 = () => <UncontrollendRating defaultValue={5} onChange={callback}/>;



