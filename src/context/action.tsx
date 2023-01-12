import { Action, DeviceState } from "../types/DeviceContext";

export const changeFilter = (state: DeviceState, action: Action) : DeviceState => {
  return {
   ...state,
   filter: action.payload
  }
}

export const changeSort = (state: DeviceState, action: Action) : DeviceState => {
  return {
   ...state,
   sort: action.payload
  }
}