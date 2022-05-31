import React from "react";

type AcordionPropsType = {
    titleValue: string
    colapsed: boolean
    onClick: () => void

}


export function Acordion(props: AcordionPropsType) {
    // const collapsed = false

    return (
        <div>
            {/*--- {props.titleValue} ---*/}
            <Acordiontitle title={props.titleValue} onClick={props.onClick}/> {/*<button>TOGGLE</button>*/}
            {!props.colapsed && <Acordionbody/>}
        </div>
    )
}

type AcordionPropstitle = {
    title: string
    onClick: () => void


}


function Acordiontitle(props: AcordionPropstitle) {

    console.log('acordiontitle rendering')
    return (
        <div>
            <h3 onClick={(e)=>props.onClick()}>{props.title}</h3>
        </div>)
}

// type Acordionbody = {
//     title: string
// }

function Acordionbody() {

    console.log('Acordionbody rendering')
    return <ul className={'ofClick'}>
        <li className={'onClick1'}>1</li>
        <li className={'onClick2'}>2</li>
        <li className={'onClick3'}>3</li>
    </ul>

}


;
// function PageTitle(props: any) {
//     debugger
//     console.log('PageTitle rendering');
//     return (<h1>{props.title}</h1>
