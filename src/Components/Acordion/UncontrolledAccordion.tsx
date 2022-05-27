import React, {useState} from "react";

type AcordionPropsType = {
    titleValue: string
}


export function UncontrollledAccordion(props: AcordionPropsType) {
    const [collapsed,setCollapsed] = useState(false)

 /*   const onclickHandler = () => {

        setCollapsed(!collapsed ? true:false)
    }*/
    return (
        <div>
            {/*--- {props.titleValue} ---*/}
            <Acordiontitle title={props.titleValue} onClick={()=> {setCollapsed(!collapsed) } }/>
            {/*<button onClick={()=>setCollapsed(!collapsed)}>TOGGLE</button>*/}
            {!collapsed &&<Acordionbody />}
        </div>
    )
}

type AcordionPropstitle = {
    title: string
    onClick:()=>void
}

function Acordiontitle(props: AcordionPropstitle) {
    console.log('acordiontitle rendering')
    return (
        <div>
            <h3 onClick={props.onClick}>{props.title}</h3> {/* ! почему работает с пропсами без вызова ()*/}
            {/*<h3 onClick={()=>props.onClick()}>{props.title}</h3>  ! запись Димыча*/}
        </div>)
}

// type Acordionbody = {
//     title: string
// }

function Acordionbody() {

    console.log('Acordionbody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}


;
// function PageTitle(props: any) {
//     debugger
//     console.log('PageTitle rendering');
//     return (<h1>{props.title}</h1>
