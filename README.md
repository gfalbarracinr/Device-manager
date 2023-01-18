# Getting Started 

## Instructions
In order to run the project, make sure that the port in the env file is different than 3000 and the REACT_APP_API_URL variable is there pointing at the backend server, then run the backend and run the command `npm install`, finally run `npm run start`.

Once the project is running, you can add a new device by clicking the plus button in the right bottom corner, it will display a form in the position of the future device element. If you want to edit a device just click in the edit button (the button with the pencil icon) on the device element you want to be edited. Finally, if you want to delete a device, click in the trash icon in the device element you want to remove

## Explanation

### context

I tried to make my solution very clean, so I decided to use context to handle the sate of the filter and sort inputs. the context contains two action `changeFilter` and `changeSort` that handles the respectiv state.

The sort state is a `DeviceSortType`, so it can be either `system_name` or `hdd_capacity`

The filter state is a `DeviceType`, so it can be only the current DeviceTypes I have defined 


### fetching

In terms of fetching I created a custom hook `useFetch`, this combined with the RestService/DeviceService handle all the Request logic.

The DeviceService is intended to manipulate the device request and handle it's response. It is responsible for making the transformation from JSON to device Type

The RestService is intended to manipulate the HTTP Request, so it has a URL object with the back url path, there the fetch is perform with the `fetch` JS method

The useFetch hook, is a flexible hook for all types of request that the app needs, also it has internal state for handling error and loading

## Styling

The styling is very minimalitic but efficient I used Style-components to manipulate the syles, for the icons I used react-icons library.

Every styled-component element is defined in a separated file, for positioning I chose flex to align and manipulate elements. I also made the app responsive, so you can use from any device