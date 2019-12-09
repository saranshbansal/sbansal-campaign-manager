import React from "react";
import LocalizationProvider from "./components/context/LocalizationProvider";
import RouteConfig from "./RouteConfig";

function App() {
  return (
    <LocalizationProvider>
      <RouteConfig />
    </LocalizationProvider>
  );
}

export default App;
