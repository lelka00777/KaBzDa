import React, {useState} from "react";
export type RattingValueType = 0 | 1 | 2 | 3 | 4 | 5


type RatingPropsType = {
    defaultValue?:RattingValueType
    onChange:(value:RattingValueType)=>void
}


export function UncontrollendRating(props: RatingPropsType) {
    console.log('Rating rendering')

    let [value, setValue] = useState<RattingValueType>(props.defaultValue?props.defaultValue:0)
    /*   const onClickHandler = () => {
           setValue(value=1)
       }*/
    return (<div>

            <Star selected={value > 0} setValue={()=>{setValue(1); props.onChange(1) }} />
            <Star selected={value > 1} setValue={()=>{setValue(2) ;props.onChange(2) }} />        {/* такой вариант легче для понимания*/}
            <Star selected={value > 2} setValue={()=>{setValue(3); props.onChange(3) }} />
            <Star selected={value > 3} setValue={()=>{setValue(4); props.onChange(4) }} />
            <Star selected={value > 4} setValue={()=>{setValue(5); props.onChange(5) }} />

        </div>
    /*<div>

        <Star selected={value > 0} setValue={setValue} value={1}/>
        <Star selected={value > 1} setValue={setValue} value={2}/>
        <Star selected={value > 2} setValue={setValue} value={3}/>      Было
        <Star selected={value > 3} setValue={setValue} value={4}/>
        <Star selected={value > 4} setValue={setValue} value={5}/>

    </div>*/


    )
}

type StarPropsType = {
    selected: boolean
    // value: 1 | 2 | 3 | 4 | 5        Было

    // setValue: (value: 1 | 2 | 3 | 4 | 5) => void                     Было
    setValue: () => void
}

function Star(props: StarPropsType) {
    console.log('Start rendering')

    /*   return props.selected === true*/
    /* ?<span><b>Star</b> </span>
     :<span>Star </span>*/
    return <span onClick={() => {
        props.setValue()
    }}>
        {props.selected ? <b> star </b> : 'star '}
    </span>

    /*    if (props.selected === true) {
            return <span><b>Star</b> </span>
        } else {
            return <span>Star </span>
        }*/


}