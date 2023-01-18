import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import DeviceProvider from "../context/Provider"
import DeviceContainer from "../components/Device/DeviceContainer"
import * as RestService from '../services/RestService';
import { deleteDevice } from "./util/Mock";
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
    jest.spyOn(RestService, 'deleteDevice').mockImplementation(deleteDevice);
  })
  afterEach(() => {
    jest.clearAllMocks();
  })

  it('Delete Device: device erased', async () => {
    renderDeviceContainer();
    await waitFor(() => expect(screen.queryByText('Loading ...')).toBe(null));
    const deleteButtons = screen.getAllByTitle('Remove Device');
    const deleteButton = screen.getAllByTitle('Remove Device')[0];
    const totalDevices = deleteButtons.length;
    fireEvent.click(deleteButton);
    await waitFor(() => expect(screen.queryByText('Loading ...')).toBe(null));
    const newDeleteButtons = screen.getAllByTitle('Remove Device');
    expect(newDeleteButtons.length).toBe(totalDevices - 1);
    
  });
})