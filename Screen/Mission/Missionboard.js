import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Missionboard() {

    const [familyMember, setFamilyMember] = useState();

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
        })
        .catch(error => {
            console.error('Error:', error);
          });
    };
    useEffect(() => {
        // LoadMissionData();
    },[])


    return (
        <View style={styles.missionboardContainer}>
            <Text  style={styles.missionIcon}>
                ✈️
            </Text>
            <Text style={styles.missionContentsText}>가족과 함께 여행가고 싶은 장소를 적어주세요!</Text>
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