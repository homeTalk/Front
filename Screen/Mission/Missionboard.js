import { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScreenContext } from '../../App';

export default function Missionboard() {

    const { missionData, setMissionData } = useContext(ScreenContext);


    return (
        <View style={styles.missionboardContainer}>
            
            {missionData?.mission.mission_id === 1 
                ?<Text  style={styles.missionIcon}> 😌 </Text>
                :<Text  style={styles.missionIcon}> 🤳 </Text>}
            
            <Text style={styles.missionContentsText}>{missionData?.mission.mission_name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    missionboardContainer: {
        width: '100%',
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',       
        marginBottom: '1%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.05)',
    },
    missionIcon: {
        alignItems: 'center',
        justifyContent: 'center',    
        marginBottom: '5%',
        fontSize: 40,
        textAlign: 'center',
    }, 
    missionContentsText: {
        marginBottom: '5%',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
});