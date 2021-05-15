import { useReducer } from "react";
import toggleReducer, { actionTypes } from "../reducers/toggleReducer";

function useToggle() {
  const [{ on }, dispatch] = useReducer(toggleReducer, { on: false });
  const toggle = () => dispatch({ type: actionTypes.toggle });
  const setOn = () => dispatch({ type: actionTypes.on });
  const setOff = () => dispatch({ type: actionTypes.off });
  return { on, toggle, setOn, setOff };
}
export default useToggle;
