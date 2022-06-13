import React from "react";
import Navbar from "./components/Navbar";
import ThemeProvider from "./context/ThemeProvider";
import HolaProvider from "./context/HolaProvider";
import Principal from "./components/Principal";

function App() {
  return (
    <HolaProvider>
      <ThemeProvider>
        <Navbar/>
        <Principal/>
      </ThemeProvider>
    </HolaProvider>

  );
}

export default App;
