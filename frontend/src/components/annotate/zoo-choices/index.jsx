import React, {useRef, useState} from 'react';
import { ZooChoices } from '../style.js';
import { ZooChoiceOne, ZooChoiceTwo, ZooChoiceThree } from '../style'

const ChoicesZoo = ({select, selected}) => {
    
    return (
        <>
            <ZooChoices>
                <ZooChoiceOne onClick={() => select(1)}
                              style={selected === 1 ? {border: `solid 3px green`} : null}/>
                <ZooChoiceTwo onClick={() => select(2)}
                              style={selected === 2 ? {border: `solid 3px green`} : null}/>
                <ZooChoiceThree onClick={() => select(3)}
                              style={selected === 3 ? {border: `solid 3px green`} : null}/>
            </ZooChoices>
        </>
    )
}


export default ChoicesZoo