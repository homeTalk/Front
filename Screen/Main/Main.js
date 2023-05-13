import { StyleSheet, Text, View } from 'react-native';
import Character from './Character';
import MissionDashboard from './MissionDashboard';
import Svg, { Path } from 'react-native-svg';  

export default function Main() {
  return (
    <View style={styles.container}>
        <Character />
        <View style={styles.missionDashboard}>
          <Text style={styles.missionDashboardTitle}>오늘의 미션</Text>
          <MissionDashboard />
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </Svg>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  missionDashboard: {
    flex: 1,
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  missionDashboardTitle: {
    fontSize: 20,
    fontWeight: 800,
    textAlign: 'left',
    color: 'black',
    marginBottom: '8%'
  }
});
