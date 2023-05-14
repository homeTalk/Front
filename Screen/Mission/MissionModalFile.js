import { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, Pressable, Image } from 'react-native';
import { MissionModalContext } from './Mission'; 
import Svg, { Path, Rect } from 'react-native-svg'; 
import ImageUploader from '../../Components/ImageUploader';
import { ScreenContext } from '../../App';

export default function MissionModalFile() {

    const { inputModalOn, setInputModalOn } = useContext(MissionModalContext);
    const { missionData, setMissionData } = useContext(ScreenContext);
    const [ missionInput, setMissionInput ] = useState('');


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={inputModalOn}
        >
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', zIndex: 1}} >
                <Pressable style={styles.missionModalBack} onPress={() => setInputModalOn(false)} />
                <View style={missionInput === '' ? styles.missionModalContainer : styles.missionModalContainerImg} >
                    {missionInput === '' 
                    ?
                    <>
                        {missionData?.mission.mission_id === 2
                        ? <Text style={styles.missionModalText}> {missionData.mission.mission_name} </Text>
                        :null}
                        <View style={styles.missionInpuBox}>
                            <ImageUploader imageUrl={missionInput} setImageUrl={setMissionInput}>
                                <Svg width="273" height="96" viewBox="0 0 273 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path fillRule="evenodd" clipRule="evenodd" d="M125.438 35.57C126.547 32.2436 129.66 30 133.166 30H139.834C143.34 30 146.453 32.2436 147.562 35.57C147.686 35.9424 147.992 36.2255 148.373 36.3207L149.943 36.7132C153.503 37.6032 156 40.8016 156 44.4709V59.25C156 64.6348 151.635 69 146.25 69H126.75C121.365 69 117 64.6348 117 59.25V44.4709C117 40.8016 119.497 37.6032 123.057 36.7132L124.627 36.3207C125.008 36.2255 125.314 35.9424 125.438 35.57ZM133.166 33.9C131.338 33.9 129.716 35.0695 129.138 36.8033C128.592 38.4406 127.247 39.6856 125.573 40.1042L124.003 40.4968C122.179 40.9527 120.9 42.5912 120.9 44.4709V59.25C120.9 62.4809 123.519 65.1 126.75 65.1H146.25C149.481 65.1 152.1 62.4809 152.1 59.25V44.4709C152.1 42.5912 150.821 40.9527 148.997 40.4968L147.427 40.1042C145.753 39.6856 144.408 38.4406 143.862 36.8033C143.284 35.0695 141.662 33.9 139.834 33.9H133.166Z" fill="#606060" fill-opacity="0.9"/>
                                    <Path fillRule="evenodd" clipRule="evenodd" d="M136.5 46C134.429 46 132.75 47.7909 132.75 50C132.75 52.2091 134.429 54 136.5 54C138.571 54 140.25 52.2091 140.25 50C140.25 47.7909 138.571 46 136.5 46ZM129 50C129 45.5817 132.358 42 136.5 42C140.642 42 144 45.5817 144 50C144 54.4183 140.642 58 136.5 58C132.358 58 129 54.4183 129 50Z" fill="#606060" fill-opacity="0.9"/>
                                    <Rect x="0.5" y="0.5" width="272" height="95" rx="19.5" stroke="#606060" strokeOpacity="0.9" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4"/>
                                </Svg>
                            </ImageUploader>
                        </View>
                    </>
                    : <Image style={{width: '100%', height:'100%'}} source={{ uri: missionInput}} />}
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
        overflow: 'hidden',
        zIndex: 3
    },
    missionModalContainerImg: {
        alignItems: 'center',
        justifyContent: 'center', 
        width: '80%',
        height: '50%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.05)',
        backgroundColor: '#fff',
        overflow: 'hidden',
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
        justifyContent: 'center', 
        width: '78%',
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