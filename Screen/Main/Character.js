import { StyleSheet, Text, View } from 'react-native';

export default function Character() {
  return (
    <View style={styles.characterBox}>
        캐릭터
    </View>
  );
}

const styles = StyleSheet.create({
    characterBox: {
        width: '100%',
        height: '44.5%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});