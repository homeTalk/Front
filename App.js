import { useState, useEffect, createContext } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import UpperBar from './Components/UpperBar';
import BottomBar from './Components/BottomBar';
import Main from './Screen/Main/Main';
import Mission from './Screen/Mission/Mission';

export const ScreenContext = createContext();

export default function App() {

  const [screen, setScreen] = useState('main');
  const [missionData, setMissionData] = useState(null);
  const ServerURL = 'http://dajungenv.eba-b3tjfhpr.ap-northeast-2.elasticbeanstalk.com/';
    const LoadMissionData = async() => {
        await fetch(ServerURL + '/mission/1?family_id=5678&user_id=91011', {
            method: 'get',
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
              }
              return res.json();
        })
        .then((data) => {
            console.log(data)
            setMissionData(data);
        })
        .catch(error => {
            console.error('Error:', error);
          });
    };
    useEffect(() => {
        LoadMissionData();
    },[])

  return (
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
          <View style={styles.container}>
            <ScreenContext.Provider value={{screen, setScreen, missionData, setMissionData}}>
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
