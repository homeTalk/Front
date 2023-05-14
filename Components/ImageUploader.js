import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Pressable, Image } from 'react-native';

export default function ImageUploader({children, imageUrl, setImageUrl}) {

    const [ status, requestPermission ] = ImagePicker.useMediaLibraryPermissions();
    const uploadImage = async () => {
        if(!status?.granted) {
            const permission = await requestPermission();
            if(!permission.granted) {
                return null;
            }
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 1,
            aspect: [1, 1]
        });
        if(result.canceled) {
            return null;
        }

        console.log(result);
        setImageUrl(result.uri);
    };

    

    return (
        <Pressable onPress={() => uploadImage()}>
            {children}
        </Pressable>
    )
};