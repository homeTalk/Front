import { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Svg, { Path, Mask, G } from 'react-native-svg'; 
import { ScreenContext } from '../../App'; 

export default function MissionState() {

    const { missionData, setMissionData } = useContext(ScreenContext);

    return (
        <View style={styles.scrollViewContainer}>
            <ScrollView style={styles.scrollBox}>
                {missionData?.family_members.map((member, i) => {
                    return(
                        <View key={i} style={styles.familyStateBox}> 
                            <View style={member.status ? styles.profileBoxActivate : styles.profileBox}>
                                <Image 
                                    style={styles.profileImg}
                                    source={
                                        member.name === '춘식이' ? require('../../assets/민재.png')
                                       :(member.name === '라이언' ? require('../../assets/세은.png')
                                       :(member.name === '어피치' ? require('../../assets/은상.png')
                                       : require('../../assets/준서.png')))} />
                            </View>
                            <View style={styles.profileTextArea}> 
                                <Text style={styles.profileText1}>{member.name}</Text>
                                <Text style={styles.profileText2}>{member.status ? "참여 완료!" : "미완료"}</Text>
                            </View>
                            {member.status
                            ?<View style={styles.profileIconArea}>
                                <Text style={styles.profileIconText}>18:07 PM</Text>
                                <Text style={styles.profileIconText}> 
                                    <Svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Mask id="mask0_89_984" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="18">
                                            <Path d="M17 0.09375H0.0661011V17.0938H17V0.09375Z" fill="white"/>
                                        </Mask>
                                        <G mask="url(#mask0_89_984)">
                                            <Path d="M10.233 6.05039L4.41201 11.8941C4.31087 11.9923 4.17567 12.0472 4.03497 12.0472C3.89427 12.0472 3.75908 11.9923 3.65793 11.8941L0.747423 8.97226C0.663038 8.86904 0.619914 8.738 0.626439 8.60463C0.632964 8.47126 0.688671 8.34509 0.782725 8.25067C0.87678 8.15625 1.00246 8.10033 1.13531 8.09378C1.26816 8.08722 1.39869 8.13052 1.50151 8.21523L4.03497 10.7652L9.47894 5.29336C9.58176 5.20864 9.71229 5.16535 9.84514 5.1719C9.97799 5.17845 10.1037 5.23438 10.1977 5.3288C10.2918 5.42322 10.3475 5.54939 10.354 5.68276C10.3605 5.81613 10.3174 5.94717 10.233 6.05039ZM16.3186 5.29336C16.2183 5.1936 16.0828 5.13763 15.9416 5.13763C15.8004 5.13763 15.6649 5.1936 15.5645 5.29336L10.1206 10.7652L8.94976 9.58984C8.84909 9.49828 8.71721 9.44908 8.58141 9.45244C8.44561 9.45579 8.3163 9.51144 8.22025 9.60787C8.12419 9.7043 8.06876 9.83412 8.06541 9.97045C8.06207 10.1068 8.11108 10.2392 8.20229 10.3402L9.74353 11.8941C9.84468 11.9923 9.97987 12.0472 10.1206 12.0472C10.2613 12.0472 10.3965 11.9923 10.4976 11.8941L16.3186 6.05039C16.418 5.94967 16.4737 5.81364 16.4737 5.67187C16.4737 5.53011 16.418 5.39408 16.3186 5.29336Z" fill="#11A028"/>
                                        </G>
                                    </Svg>
                                </Text>
                            </View>
                            :null}
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        width: '90%', 
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '2%',
        paddingBottom: '2%'
    },
    scrollBox: {
        width: '100%', 
        height: '100%',
    },
    familyStateBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 100,
        borderBottomWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.05)',
        marginBottom: '1%'
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
      profileTextArea: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flex: 1,
        height: 59,
        paddingLeft: 20
      }, 
      profileText1: {
        fontSize: 16,
        fontWeight: 800,
        color: '#000'
      },
      profileText2: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8a91a8'
      },
      profileIconArea: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginRight: '5%',
        width: 59,
        height: 59,
      },
      profileIconText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        fontWeight: 500,
        color: '#8a91a8'
      }
});