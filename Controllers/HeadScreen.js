import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function HeadScreen({ navigation }) {
    return (

        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../Images/newposter.jpg')} style={{ flex: 1, height: '100%' }}>
                <View style={{ flex: 1, flexDirection: 'row', marginLeft: 25, marginTop: 30 }}>
                    <Image style={style.img} source={{ uri: 'https://tse4.explicit.bing.net/th?id=OIP.xk_dSiIK7c695LbAQ3Ua3gHaHa&pid=Api&P=0&h=180' }} />
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', marginLeft: 7 }}>Gipsy</Text>
                    <Text style={{ color: '#e1dfb3', fontSize: 25, fontWeight: 'bold', marginLeft: 7 }}>Bee</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginBottom: 220, marginLeft: 25 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>Women's{'\n'}<Text style={{ fontWeight: 'bold', color: 'white', fontSize: 32, padding: 0 }}>CLOTHES</Text></Text>
                    <TouchableOpacity style={{ backgroundColor: 'black', width: '25%', marginTop: 5, paddingVertical: 5, borderRadius: 20 }} onPress={() => navigation.navigate('tabhandler')}>
                        <Text style={{ color: 'white', fontWeight: 'bold', paddingHorizontal: 13 }}>See More</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}


const style = StyleSheet.create({
    img: {
        height: 35,
        width: 35,
        borderRadius: 20
    }
})