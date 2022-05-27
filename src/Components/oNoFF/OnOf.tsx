import React, {useState} from 'react';

type OnOfPropsType = {
    on: boolean
    onClick: (on: boolean) => void
}


export const OnOff = (props: OnOfPropsType) => {

    // let [on,setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white',
        color: 'black',

    }
    const ofStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: 'inline-block',
        padding: '2px',
        marginLeft: '5px',
        backgroundColor: props.on ? 'white' : 'red',
        color: 'black'

    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }


//     const onClickHandler =()=> {
//         // props.callback()
// }

    return (<div>

            {/*  <div style={onStyle} onClick={props.onClick}>On</div>  Мой вариант
            <div style={ofStyle} onClick={props.onClick}>On</div>
            <div style={indicatorStyle}></div>*/}


            <div style={onStyle} onClick={() => props.onClick(true)}>On</div>
            <div style={ofStyle} onClick={() => props.onClick(false)}>Off</div>
            <div style={indicatorStyle}></div>

        </div>
    );
};

