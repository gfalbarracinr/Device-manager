import { render, screen, fireEvent } from '@testing-library/react';
import { Menu } from '../components/Menu';
import DeviceProvider from '../context/Provider';
import { MenuTestingHelper } from './util/MenuTestingHelper';

describe('Menu testing', () => {
  const menuWithContext = () => {
    render(
      <DeviceProvider>
        <MenuTestingHelper>
          <Menu />
        </MenuTestingHelper>
      </DeviceProvider>
      );
  }
  test('Sorting and filtering option are displayed', () => {
    render(
      <DeviceProvider>
        <Menu />
      </DeviceProvider>
      );
    const sortElement = screen.getByLabelText(/Sort By/i);
    const filterElement = screen.getByLabelText(/Filter By/i);
    expect(sortElement).toBeInTheDocument();
    expect(filterElement).toBeInTheDocument();
  });

  test('Filter change is changing the state', () => {
      menuWithContext();
      const filterElement = screen.getByLabelText(/Filter By/i);
      fireEvent.change(filterElement, { target: {value: 'MAC'}});

      const filterstate = screen.getByTestId('filter-test');
      expect(filterstate).toBeInTheDocument();
      expect(filterstate.innerHTML).toBe('MAC');
  });

  test('Sort change is changing the state', () => {
    menuWithContext();
    const sortElement = screen.getByLabelText(/Sort By/i);
    fireEvent.change(sortElement, {target: {value: 'HDD_CAPACITY'}});

    const sortState = screen.getByTestId('sort-test');
    expect(sortState).toBeInTheDocument();
    console.log(sortState)
    expect(sortState.innerHTML).toBe('HDD_CAPACITY');
});

})

