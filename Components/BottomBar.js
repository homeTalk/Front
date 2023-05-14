import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg'; 
import { ScreenContext } from '../App';

export default function BottomBar() {

    const { screen, setScreen } = useContext(ScreenContext);
    return (
        <View style={styles.bottomBar}> 
                <Pressable onPress={()=>{setScreen("main");}}>
                    <Svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M23.625 21.233v-9.008c0-1.108-.48-2.153-1.303-2.832l-6.06-5.01a4.291 4.291 0 0 0-5.525 0l-6.06 5.01c-.821.68-1.302 1.724-1.302 2.832v9.008c0 1.321 1.007 2.392 2.25 2.392h2.25a2.25 2.25 0 0 0 2.25-2.25v-3.73c0-1.32 1.007-2.391 2.25-2.391h2.25c1.243 0 2.25 1.07 2.25 2.391v3.73a2.25 2.25 0 0 0 2.25 2.25h2.25c1.243 0 2.25-1.07 2.25-2.392z" stroke="#7E7E7E" strokeWidth="2"/>
                    </Svg>
                </Pressable>
                <Pressable onPress={()=>{setScreen("mission");}}>
                    <Svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M13.5 23.625c5.592 0 10.125-4.533 10.125-10.125S19.092 3.375 13.5 3.375 3.375 7.908 3.375 13.5c0 2.14.664 4.125 1.797 5.76.117.17.14.388.054.576l-1.37 2.947a.563.563 0 0 0 .488.842H13.5z" stroke="#7E7E7E" strokeWidth="2"/>
                        <Path d="M10.125 15.75h6.75M10.125 11.25h2.25" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round"/>
                    </Svg>
                </Pressable>
                <Pressable>
                    <Svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M3.375 9C3.375 6.51472 5.38972 4.5 7.875 4.5H19.125C21.6103 4.5 23.625 6.51472 23.625 9V19.125C23.625 21.6103 21.6103 23.625 19.125 23.625H7.875C5.38972 23.625 3.375 21.6103 3.375 19.125V9Z" stroke="#7E7E7E" strokeWidth="2"/>
                        <Path d="M9 3.375V6.75" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round"/>
                        <Path d="M19.125 11.25H7.875" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round"/>
                        <Path d="M19.125 19.125L18 19.125" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round"/>
                        <Path d="M18 3.375V6.75" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round"/>
                    </Svg>
                </Pressable>
                <Pressable>
                    <Svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M3.375 6.75A3.375 3.375 0 0 1 6.75 3.375h3.015a2.25 2.25 0 0 1 1.872 1.002l1.195 1.793a2.25 2.25 0 0 0 1.872 1.002h5.546a3.375 3.375 0 0 1 3.375 3.375v9.703a3.375 3.375 0 0 1-3.375 3.375H6.75a3.375 3.375 0 0 1-3.375-3.375V6.75z" stroke="#7E7E7E" strokeWidth="2"/>
                    </Svg>
                </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 86,
        borderTopColor: 'rgba(0, 0, 0, 0.05)',
        borderTopWidth: 1
    }
});
