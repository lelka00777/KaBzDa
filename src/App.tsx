import React, {useState} from 'react';
import './App.css';
import OnOf from "./useState_06/OnOFF";
import OnOffCallback from "./useState_06/OnOFFCallback";
import OnOffState from "./useState_06/OnOFFStateComponent";
import {Acordion} from "./Components/Acordion/Acordion";
import {UncontrollledAccordion} from "./Components/Acordion/UncontrolledAccordion";
import {Rating, RattingValueType} from "./Components/Rating/Rating";
import {UncontrollendRating} from "./Components/Rating/UncontrolledRatting";
import {UnconrolledOnOff} from "./Components/UncontrolledOnOf/UncontrolledOnOf";
import {OnOff} from "./Components/oNoFF/OnOf";


function App() {

    let [rattingValue, setRttingValue] = useState<RattingValueType>(0)

    let [acordionColapsed, setAcordionColapsed] = useState<boolean>(false)

    let [on, setOn] = useState<boolean>(false)       /*useState 06 урок*/


    // const onClick = () => {                    /*useState 06 урок*/
        // !on?setOn(true): setOn(false)
        // setOn(!on)  /* запись короче!!! почему просто на каждый клик меняет значение???????*/
        //
    // }
// if(!on){
//     setOn(true)
// }else{
//     setOn(false)
// }
//    }

    return (<div className="App">

            {/*<OnOf />*/}
            {/*<UncontrolledOnOfOnOf on={on} onClick={setOn}/>*/}

            <OnOff on={on} onClick={setOn}/>
            {/*<UnconrolledOnOff onChange={setOn}/>{on.toString()}*/}
            {/*<OnOffCallback on={on} callback={onClick}/>  /!*useState 06 урок*!/*/}

            {/*   <OnOffState />*/}
            <UncontrollledAccordion titleValue={'--Menu--'}/>

            <Acordion titleValue={'--BlaBla--'}
                      colapsed={acordionColapsed}
                      onClick={() => setAcordionColapsed(!acordionColapsed)}/>

            {/*<UncontrollendRating />*/}
            {/*      <Rating value={rattingValue} onClick={setRttingValue}/>*!/*/}


        </div>
    );
}


export default App;
