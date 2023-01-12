import { Action, DeviceState } from "../types/DeviceContext";
import { changeFilter, changeSort } from "./action";
import { ActionTypes } from "./actionType";

const deviceReducer = (state: DeviceState, action: Action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_FILTER: {
      return changeFilter(state, action);
    }
    case ActionTypes.CHANGE_SORT: {
      return changeSort(state, action);
    }
    default:
      throw new TypeError('Not action type');
  }
}

export default deviceReducer;