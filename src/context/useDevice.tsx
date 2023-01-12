import { useContext } from "react";
import { DeviceContext } from "./DeviceContext";

const useDevice = () => {
  const context = useContext(DeviceContext);
  if (context == null) {
    throw new Error('useDevice must be used within a DeviceProvider');
  }
  return context;
}

export default useDevice;