import { OptionSelection } from '../Select'
import { ActionTypes } from '../../context/actionType';
import { DeviceSortBy, DeviceType } from '../../types/Device';
import { OptionForm } from './style';

export const Menu = () => {
  return (
    <OptionForm>
      <OptionSelection 
        actionType={ActionTypes.CHANGE_FILTER} 
        options={DeviceType} 
        id='filter'
        label='Filter By'  
      />
      <OptionSelection 
        actionType={ActionTypes.CHANGE_SORT} 
        options={DeviceSortBy}
        id='sort'
        label='Sort By'
      />
    </OptionForm>
  )
}
