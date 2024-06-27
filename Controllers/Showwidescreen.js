import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Showwidescreen({ route }) {
    const { name, image, type, price } = route.params
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                <Image style={style.img} source={{ uri: 'https://tse4.explicit.bing.net/th?id=OIP.xk_dSiIK7c695LbAQ3Ua3gHaHa&pid=Api&P=0&h=180' }} />
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', marginLeft: 7 }}>Gipsy</Text>
                <Text style={{ color: '#e1dfb3', fontSize: 25, fontWeight: 'bold', marginLeft: 7 }}>Bee</Text>
            </View>


            <Image style={{ height: 300, width: 300, marginTop: 30 }} source={{ uri: image }} />
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000' }}>{name}</Text>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'green' }}>{type}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', }}> ₹ {price}</Text>
                <TouchableOpacity style={{ backgroundColor: 'black', width: '50%', marginTop: 10, paddingVertical: 5}}>
                    <Text style={{ color: 'white', fontWeight: 'bold', paddingHorizontal: 13 }}>ADD TO CART</Text>
                </TouchableOpacity>
            </View>
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