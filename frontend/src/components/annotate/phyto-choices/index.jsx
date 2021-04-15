import React from 'react';
import { PhytoChoices } from '../style.js';
import { PhytoChoiceOne, PhytoChoiceTwo, PhytoChoiceThree } from '../style'

const ChoicesPhyto = ({select, selected}) => {
  
    return (
        <>
            <PhytoChoices>
                <PhytoChoiceOne onClick={() => select(4)}
                              style={selected === 4 ? {border: `solid 3px red`} : null}/>
                <PhytoChoiceTwo onClick={() => select(5)}
                              style={selected === 5 ? {border: `solid 3px red`} : null}/>
                <PhytoChoiceThree onClick={() => select(6)}
                              style={selected === 6 ? {border: `solid 3px red`} : null}/>
            </PhytoChoices>
        </>
    )
}


export default ChoicesPhyto