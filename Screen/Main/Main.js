import { StyleSheet, Text, View } from 'react-native';
import Character from './Character';
import MissionDashboard from './MissionDashboard';
import Ddayboard from './Ddayboard';

export default function Main() {
  return (
    <View style={styles.container}>
        <Character />
        <View style={styles.missionDashboard}>
          <Text style={styles.missionDashboardTitle}>오늘의 미션</Text>
          <MissionDashboard />
          {/* <Text style={styles.missionDashboardTitle}>우리 가족 일정</Text>
          <Ddayboard /> */}
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
    width: '80%',
    height: 300,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  missionDashboardTitle: {
    fontSize: 20,
    fontWeight: 800,
    textAlign: 'left',
    color: 'black',
    marginBottom: '3%'
  }
});
