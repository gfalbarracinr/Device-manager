import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import DeviceProvider from "../context/Provider"
import DeviceContainer from "../components/Device/DeviceContainer"
import * as RestService from '../services/RestService';
import { getFakeDevices, createDevice } from "./util/Mock";
import { Menu } from "../components/Menu";

describe('Device component', ()=> {
  const renderDeviceContainer = () => {
    return render(
      <DeviceProvider> 
        <>
        <Menu/>
        <DeviceContainer />
        </>
      </DeviceProvider>
    );
  }
  beforeEach(() => {
    jest.spyOn(RestService, 'getDevices').mockImplementation(getFakeDevices);
    jest.spyOn(RestService, 'postDevice').mockImplementation(createDevice);
  })
  afterEach(() => {
    jest.clearAllMocks();
  })
  it('Loading before rendering devices', () => {
    render(
      <DeviceProvider>
        <DeviceContainer />
      </DeviceProvider>
    )
    const loading = screen.getByText('Loading ...');
    expect(loading).toBeVisible();
  })
  it('Renders all devices', async () => {
    render(
      <DeviceProvider> 
        <DeviceContainer />
      </DeviceProvider>
    )
    await waitFor(() => expect(screen.queryByText('Loading ...')).toBe(null));
    const devices = screen.getAllByRole('heading');
    expect(devices.length).toBe(3);
  })
  it('Render and filter by MAC devices', async () => {
    renderDeviceContainer();
    await waitFor(() => expect(screen.queryByText('Loading ...')).toBe(null));
    const filterElement = screen.getByLabelText(/Filter By/i);
    fireEvent.change(filterElement, { target: {value: 'MAC'}});
    const devices = screen.getAllByRole('heading');
    expect(devices.length).toBe(1);
  })

  it('Render and sort by capacity devices', async () => {
    renderDeviceContainer();
    await waitFor(() => expect(screen.queryByText('Loading ...')).toBe(null));
    const sortElement = screen.getByLabelText(/Sort By/i);
    fireEvent.change(sortElement, { target: {value: 'HDD_CAPACITY'}});
    const devices = screen.getAllByRole('heading');
    expect(devices.length).toBe(3);
    const firstElement = devices[0].innerHTML;
    const lastElement = devices[2].innerHTML;
    expect(firstElement).toBe('DESKTOP-SMART');
    expect(lastElement).toBe('MAC-LEADER');
  });


  it('Render and sort by name devices', async () => {
    renderDeviceContainer();
    await waitFor(() => expect(screen.queryByText('Loading ...')).toBe(null));
    const sortElement = screen.getByLabelText(/Sort By/i);
    fireEvent.change(sortElement, { target: {value: 'SYSTEM_NAME'}});
    const devices = screen.getAllByRole('heading');
    expect(devices.length).toBe(3);
    const firstElement = devices[0].innerHTML;
    const lastElement = devices[2].innerHTML;
    expect(firstElement).toBe('ARMANDO-SERVER');
    expect(lastElement).toBe('MAC-LEADER');
  });


  it('Create new Device: Modal is displayed', async () => {
    renderDeviceContainer();
    await waitFor(() => expect(screen.queryByText('Loading ...')).toBe(null));
    const addElement = screen.getByTitle(/Add Device/i);
    fireEvent.click(addElement);
    const modalInputName = screen.getAllByRole('textbox');
    const modalInputCapacity = screen.getAllByRole('spinbutton');
    const modalInputTypeSelector = screen.getAllByRole('combobox');
    expect(modalInputName.length).toBe(1);
    expect(modalInputCapacity.length).toBe(1);
    expect(modalInputTypeSelector.length).toBe(3);
  });
})