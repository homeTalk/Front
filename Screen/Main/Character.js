import { StyleSheet, Image, View } from 'react-native';

export default function Character() {
  return (
    <View style={styles.characterBox}>
        <View style={styles.profileBox}>
            <Image source={require('../../assets/Character.png')} style={styles.profileImg}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    characterBox: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    profileBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: '60%',
        overflow: 'hidden',
    },
    profileImg:{
        width: '90%',
        height: '90%'
    },
});