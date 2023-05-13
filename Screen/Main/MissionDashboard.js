import { StyleSheet, Text, View, Image } from 'react-native';

export default function MissionDashboard() {
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
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',       
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.2, 
        shadowRadius: 6, 
        shadowOffset: {
            width: 0,
            height: 0
        },
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
        borderRadius: '100%',
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