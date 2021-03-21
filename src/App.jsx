import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppLayout from './components/app_layout';

import Routes from './routes';


const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes />
      </AppLayout>
    </BrowserRouter>
  )
}


export default App;