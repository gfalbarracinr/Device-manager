import { createContext } from "react";
import DeviceContextInterface from "../types/DeviceContext";


export const DeviceContext = createContext<DeviceContextInterface | null>(null);

