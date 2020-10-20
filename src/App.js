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

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
