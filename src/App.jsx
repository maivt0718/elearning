import { Bounce, toast, ToastContainer } from "react-toastify";
import useRouteCustom from "./hooks/useRouteCustom";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';

export const NotificationContext = React.createContext();

function App() {
  const routes = useRouteCustom();
  const showNotification = (content, type = "default", duration = 4000) => {
    toast[type](content, {
      position: "top-left",
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <>
      <NotificationContext.Provider
        value={{ showNotification: showNotification }}
      >
        <ToastContainer />
        {routes}
      </NotificationContext.Provider>
    </>
  );
}

export default App;
