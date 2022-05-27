import React from "react";

export type RattingValueType = 0 | 1 | 2 | 3 | 4 | 5


type RatingPropsType = {
    value: RattingValueType
    onClick: (value: RattingValueType) => void
}


export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>


        </div>


    )
}

type StarPropsType = {
    selected: boolean
    onClick: (value: RattingValueType) => void
    value: RattingValueType
}

function Star(props: StarPropsType) {
    console.log('Start rendering')

    return <span
        onClick={() => {
            props.onClick(props.value)
        }}>

    {props.selected
        ? <b>Star </b>
        : "Star "
    }
    </span>
    /*   if (props.selected === true) {
           return <span><b>Star</b> </span>
       } else {
           return <span>Star </span>
       }*/


}