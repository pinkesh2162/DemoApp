import React from 'react';
import { SafeAreaView } from 'react-native';
import { globalStyles } from './src/styles/global';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Navigator from './src/navigation';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={globalStyles.container}>
        <Navigator />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
