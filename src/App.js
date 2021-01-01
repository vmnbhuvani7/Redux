import React from 'react';
import './App.css';
import CakeContainer from './Component/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/Store'
import HookCakeContainer from './Component/HookCakeContainer';
import IceCreamContainer from './Component/IceCreamContainer';
import NewCakeContainer from './Component/NewCakeContainer';
import ItemContainer from './Component/ItemContainer';
import UserContainer from './Component/UserContainer';
import MainRouter from './MainRouter';
import Reselect from './Component/Reselect';

function App() {
  return (
    // <MainRouter />
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer /> */}
        {/* <UserContainer /> */}
        <Reselect />
      </div>
    </Provider>
  );
}

export default App;
