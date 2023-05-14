import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg'; 
import { ScreenContext } from '../../App'; 

export default function MissionDashboard() {

    const { missionData, setMissionData } = useContext(ScreenContext);

    return (
        <View style={styles.dashboardContainer}>
            <Text style={styles.dashboardTitle}>{missionData?.mission.mission_name}</Text>
            <View  style={styles.dashboardProfileBox}>
                <View>
                    <View style={missionData?.family_members[0].status ? styles.profileBoxActivate : styles.profileBox }>
                        <Image source={require('../../assets/민재.png')} style={styles.profileImg}/>
                    </View>
                    <Text style={styles.profileText}>{missionData?.family_members[0].name}</Text>
                </View>
                <View>
                    <View style={missionData?.family_members[1].status ? styles.profileBoxActivate : styles.profileBox }>
                        <Image source={require('../../assets/세은.png')} style={styles.profileImg}/>
                    </View>
                    <Text style={styles.profileText}>{missionData?.family_members[1].name}</Text>
                </View>
                <View>
                    <View style={missionData?.family_members[2].status ? styles.profileBoxActivate : styles.profileBox }>
                        <Image source={require('../../assets/은상.png')} style={styles.profileImg}/>
                    </View>
                    <Text style={styles.profileText}>{missionData?.family_members[2].name}</Text>
                </View>
                <View>
                    <View style={missionData?.family_members[3].status ? styles.profileBoxActivate : styles.profileBox }>
                        <Image source={require('../../assets/준서.png')} style={styles.profileImg}/>
                    </View>
                    <Text style={styles.profileText}>{missionData?.family_members[3].name}</Text>
                </View>
            </View>
            <View style={styles.missionProgressBar}>
                <Svg width="199" height="12" viewBox="0 0 199 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect width="199" height="12" rx="6" fill="#FFF4E2"/>
                    <Rect width="100" height="12" rx="6" fill="#FFA41C"/>
                </Svg>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dashboardContainer: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',       
        marginBottom: '5%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.05)',
    },
    dashboardTitle: {
        flex: 1,
        marginTop: '5%',
        marginBottom: '15%',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    dashboardProfileBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginBottom: '20%',
    }, 
    profileBoxActivate: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderColor: '#88d659',
        borderWidth: 3,
        borderRadius: 100,
        overflow: 'hidden'
    },
    profileBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderRadius: 100,
        overflow: 'hidden'
    },
    profileImg:{
        width: '100%',
        height: '100%'
    },
    profileText:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: '10%',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
    },
    missionProgressBar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    }
});