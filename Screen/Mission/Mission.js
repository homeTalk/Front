import { StyleSheet, Text, View, Pressable } from 'react-native';
import Missionboard from './Missionboard';
import MissionState from './MissionState';
import React, { useState, createContext } from 'react';
import MissionModal from './MissionModal';

export const MissionModalContext = React.createContext();

export default function Mission() {

    const [inputModalOn, setInputModalOn] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.missionDashboardArea}>
                <Text style={styles.missionDashboardTitle}>오늘의 미션</Text>
                <Missionboard />
            </View>

            <View style={styles.missionButtonArea}>
                <Pressable style={styles.customButton}>
                    <View >
                        <Text 
                            onPress={() => {setInputModalOn(true)}}
                            style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: 'white'
                            }}> 입력하기
                        </Text>
                    </View>
                </Pressable>
            </View>
                
            <View style={styles.missionStateArea}>
                <MissionState />
            </View>
            {inputModalOn 
            ? <MissionModalContext.Provider value={{ inputModalOn, setInputModalOn }}><MissionModal/></MissionModalContext.Provider>
            : null}
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
    missionDashboardArea: {
        flex: 3,
        width: '80%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    missionDashboardTitle: {
        fontSize: 20,
        fontWeight: 800,
        textAlign: 'left',
        color: 'black',
        marginBottom: '3%'
    },
    missionButtonArea: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    customButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        height: '50%',
        borderRadius: 20,
        backgroundColor: '#71ac7b',
    },
    missionStateArea: {
        flex: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center', 
    }
});