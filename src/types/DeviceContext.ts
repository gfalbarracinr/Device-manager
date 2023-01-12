import React from "react";
import { ActionTypes } from "../context/actionType";
import { DeviceFilter, DeviceSort } from "./Device";
export interface DeviceState {
  filter: DeviceFilter,
  sort: DeviceSort
}
export default interface DeviceContextInterface {
  state: DeviceState,
  dispatch: React.Dispatch<any>
}

export interface Action {
  type: ActionTypes,
  payload: any
}