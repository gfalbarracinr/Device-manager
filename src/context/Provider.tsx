import { useReducer } from "react";
import { DeviceContext } from "./DeviceContext";
import deviceReducer from "./reducer";
import { DeviceState } from "../types/DeviceContext";
import { filter } from "../types/Device";

interface Props {
  children: JSX.Element
}
const initialState: DeviceState = {
  filter: filter.ALL,
  sort: filter.ALL
}
const DeviceProvider  = ({children}: Props) => {
  const [state, dispatch] = useReducer(deviceReducer, initialState);
  const value ={state, dispatch}
  return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
 }
 
 export default DeviceProvider;