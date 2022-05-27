import React, {useState} from 'react';
import {hover} from "@testing-library/user-event/dist/hover";
type OnOfPropsType={
    on:boolean
    callback:()=>void
}



const OnOffCallback = (props:OnOfPropsType) => {

    // let [on,setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: 'inline-block',
        padding:'2px',
        backgroundColor:props.on?'green':'white',
        color:'black',
       
    }
    const ofStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: 'inline-block',
        padding:'2px',
        marginLeft:'5px',
        backgroundColor:props.on?'white':'red',
        color:'black'

    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft:'5px',
        backgroundColor:props.on?'green':'red'
    }


    const onClickHandler =()=> {

        props.callback()
}

    return (<div>

            <div style={onStyle}  onClick={onClickHandler}>On </div>
            <div style={ofStyle} onClick={onClickHandler}>Off</div>
            <div style={indicatorStyle}></div>

        </div>
    );
};

export default OnOffCallback;