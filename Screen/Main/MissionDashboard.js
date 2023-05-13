import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function MissionDashboard() {

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
        <View style={styles.dashboardContainer}>
            <Text style={styles.dashboardTitle}>"지금 셀카 찍어서 업로드 하기"</Text>
            <View  style={styles.dashboardProfileBox}>
                <View>
                    <View style={styles.profileBox}>
                        <Image source={require('../../assets/민재.png')} style={styles.profileImg}/>
                    </View>
                    <Text style={styles.profileText}>민재</Text>
                </View>
                <View>
                    <View style={styles.profileBox}>
                        <Image source={require('../../assets/세은.png')} style={styles.profileImg}/>
                    </View>
                    <Text style={styles.profileText}>세은</Text>
                </View>
                <View>
                    <View style={styles.profileBox}>
                        <Image source={require('../../assets/은상.png')} style={styles.profileImg}/>
                    </View>
                    <Text style={styles.profileText}>은상</Text>
                </View>
                <View>
                    <View style={styles.profileBox}>
                        <Image source={require('../../assets/준서.png')} style={styles.profileImg}/>
                    </View>
                    <Text style={styles.profileText}>준서</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dashboardContainer: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',       
        marginBottom: '5%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.05)',
    },
    dashboardTitle: {
        marginBottom: '5%',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    dashboardProfileBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: '20%',
    }, 
    profileBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderColor: '#88d659',
        borderWidth: 3,
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
});