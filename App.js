import  React from 'react';
import MainNavigation from "./Resource/Routes/MainNavigation/MainNavigation";
import { NativeBaseProvider, ColorMode } from 'native-base';
import { Provider } from 'react-redux';
import { store } from './Resource/Helper/Store';
function App (){
  return(
    <Provider store={store}>
  <MainNavigation/>
    </Provider>
  
  )
}

// export default App

export default () => {
  return (
      <NativeBaseProvider >
          <App  />
      </NativeBaseProvider>
  );
};