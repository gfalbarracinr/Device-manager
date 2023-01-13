import React from 'react'
import { PropsWithChildren } from 'react'
import useDevice from '../../context/useDevice'
export const MenuTestingHelper = ({children}: PropsWithChildren) => {
  const {state} = useDevice();
  return (
    <div>
      <p data-testid="filter-test">{state.filter}</p>
      <p data-testid="sort-test">{state.sort}</p>
      {children}  
    </div>
  )
}
