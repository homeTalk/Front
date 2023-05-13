import { StyleSheet, Text, View } from 'react-native';

export default function Character() {
  return (
    <View style={styles.characterBox}>

    </View>
  );
}

const styles = StyleSheet.create({
    characterBox: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});