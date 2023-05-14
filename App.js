import { useState, createContext } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import UpperBar from './Components/UpperBar';
import BottomBar from './Components/BottomBar';
import Main from './Screen/Main/Main';
import Mission from './Screen/Mission/Mission';

export const ScreenContext = createContext();

export default function App() {

  const [screen, setScreen] = useState('main');

  return (
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
          <View style={styles.container}>
            <ScreenContext.Provider value={{screen, setScreen}}>
              <UpperBar />
                {screen === 'main' ? <Main/> : null}
                {screen === 'mission' ? <Mission/> : null}
              <BottomBar />
            </ScreenContext.Provider>
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
