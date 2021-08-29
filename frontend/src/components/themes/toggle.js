import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_THEME } from "../../store/actions/changeMode"


const Toggle = () => {

  const ThemeEnabled = useSelector((state) => state.UserReducer.ThemeEnabled)
  const dispatch = useDispatch();

    return (
      <input
        type="checkbox"
        checked={ThemeEnabled}
        onChange={() => dispatch({ type: TOGGLE_THEME })}>
        </input>
    );
  };
  
export default Toggle;