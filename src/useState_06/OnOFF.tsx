import React, {useState} from 'react';
type OnOfPropsType={
    // on:boolean
    // callback:()=>void
}



const OnOf = (props:OnOfPropsType) => {

    let [on,setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: 'inline-block',
        padding:'2px',
        backgroundColor:on?'green':'white'

    }
    const ofStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: 'inline-block',
        padding:'2px',
        marginLeft:'5px',
        backgroundColor:on?'white':'red'

    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft:'5px',
        backgroundColor:on?'green':'red'
    }


//     const onClickHandler =()=> {
//         // props.callback()
// }

    return (<div>

            <div style={onStyle} onClick={ () => {setOn (true) } }>On</div>
            <div style={ofStyle} onClick={ () => {setOn (false) } }>Off</div>
            <div style={indicatorStyle}></div>

        </div>
    );
};

export default OnOf;