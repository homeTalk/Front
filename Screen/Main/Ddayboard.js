import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Ddayboard() {

    // const [DdayData, setDdayData] = useState(['우주 생일', '은상 생일']);

    // const ServerURL = 'http://dajungenv.eba-b3tjfhpr.ap-northeast-2.elasticbeanstalk.com/';
    // const LoadDdayData = async() => {
    //     await fetch(ServerURL + '/mission/1?family_id=5678&user_id=91011', {
    //         method: 'get',
    //     })
    //     .then((res) => {
    //         if (!res.ok) {
    //             throw new Error('Network response was not ok');
    //           }
    //           return res.json();
    //     })
    //     .then((data) => {
    //         console.log(data)
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //       });
    // };
    // useEffect(() => {
    //     // LoadDdayData();
    // },[])


    return (
        <View style={styles.scrollViewContainer}>
            <ScrollView style={styles.ddayboardContainer} >
                {DdayData.map((data, i) => {
                    return(
                        <View key={i} style={styles.ddayBox}> 
                            <Text> {data} </Text> 
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        width: '100%', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1%',
    },
    ddayboardContainer: {
        width: '100%',
        flex: 1,
        marginBottom: '5%',
    },
    ddayBox: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.05)',
        marginBottom: '1%'
    }
});