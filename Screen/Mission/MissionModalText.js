import { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, Pressable, TextInput } from 'react-native';
import { MissionModalContext } from './Mission'; 
import Svg, { Path } from 'react-native-svg'; 

export default function MissionModalText() {

    const { inputModalOn, setInputModalOn } = useContext(MissionModalContext);
    const [ missionInput, setMissionInput ] = useState('');

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={inputModalOn}
        >
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', zIndex: 1}} >
                <Pressable style={styles.missionModalBack} onPress={() => setInputModalOn(false)} />
                <View style={styles.missionModalContainer} >
                    <Text style={styles.missionModalText}> 가족과 함께 여행가고 싶은 장소를 적어주세요! </Text>
                    <View style={styles.missionInpuBox}>
                        <TextInput 
                            style={styles.missionTextInput}
                            onChangeText={(text)=>{setMissionInput({inputText: text})}}
                            placeholder="당신의 답변을 적어주세요"
                            multiline={true}
                            numberOfLines={2}
                            maxLength={38}/>
                    </View>
                </View>
                <Pressable style={styles.customButton}>
                    <View >
                        <Text 
                            onPress={() => {setInputModalOn(true)}}
                            style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: 'white'
                            }}> 제출
                        </Text>
                    </View>
                </Pressable>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    missionModalBack: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.4, 
        zIndex: 2
    },
    missionModalContainer: {
        alignItems: 'center',
        justifyContent: 'center', 
        width: '80%',
        height: 184,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.05)',
        backgroundColor: '#fff',
        zIndex: 3
    },
    missionModalText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        marginBottom: 30
    },
    missionInpuBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        width: '80%',
        borderColor: '#D6D6D6',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5
    },
    missionTextInput: {
        textAlign: 'center',
        width: '100%',
        paddingHorizontal: 5
    },
    customButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '65%',
        height: 40,
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: '#FF9900',
        zIndex: 3
    },
});