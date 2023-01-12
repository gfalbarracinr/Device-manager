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
      fireEvent.change(filterElement, {value: 'MAC'});

      const filterstate = screen.getByText(/MAC/i);
      expect(filterstate).toBeInTheDocument();
  });

  test('Sort change is changing the state', () => {
    menuWithContext();
    const sortElement = screen.getByLabelText(/Sort By/i);
    fireEvent.change(sortElement, {value: 'HDD_CAPACITY'});

    const sortState = screen.getByText(/HDD_CAPACITY/i);
    expect(sortState).toBeInTheDocument();
});
})

