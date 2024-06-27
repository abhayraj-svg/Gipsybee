import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'



export default function Homescreen({navigation}) {

    const [mendata, updatemendata] = useState([
        {
            id: 1,
            name: 'kinetix sports shoes',
            image: 'https://tse1.mm.bing.net/th?id=OIP.dhW3gcJTohX46FgG1di3yQAAAA&pid=Api&P=0&h=180',
            type: 'Mens Shoes',
            price: 399.00
        },
        {
            id: 2,
            name: 'Puma sports shoes',
            image: 'https://tse3.mm.bing.net/th?id=OIP.bZe9Qtjq_Q2MK0Eay1Zz_wHaHa&pid=Api&P=0&h=180',
            type: 'Mens Shoes',
            price: 999.00
        },
        {
            id: 3,
            name: 'Sparx Formal shoes',
            image: 'https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOONIKE-RUN-ALLSMAR262977CE1778A/1563337704159_0..jpg',
            type: 'Mens Shoes',
            price: 699.00
        },
        {
            id: 4,
            name: 'Redchief Formal shoes',
            image: 'https://tse4.mm.bing.net/th?id=OIP.bjQuMce_pIpiHQhlRL9ZHQHaHa&pid=Api&P=0&h=180',
            type: 'Mens Shoes',
            price: 1299.00
        }
    ])
    const [womendata, updatewomendata] = useState([
        {
            id: 1,
            name: 'sports shoes',
            image: 'https://tse4.mm.bing.net/th?id=OIP.1JNKZCzkbRdxmg_mSHhNuAHaEL&pid=Api&P=0&h=180',
            type: 'womens Shoes',
            price: 310.00
        },
        {
            id: 2,
            name: 'Puma sleepers',
            image: 'https://tse1.mm.bing.net/th?id=OIP.bm2MGHSd45ljMhZ5s6XW9AHaFj&pid=Api&P=0&h=180',
            type: 'womens',
            price: 910.00
        },
        {
            id: 3,
            name: 'Sparx shoes',
            image: 'https://tse4.mm.bing.net/th?id=OIP.Y5T7fc2vlqjYpsQJQ_rieAHaHa&pid=Api&P=0&h=180',
            type: 'womens Shoes',
            price: 610.00
        },
        {
            id: 4,
            name: 'Redchief sandals',
            image: 'https://tse4.mm.bing.net/th?id=OIP.dboelaGQxXX9V594zaMkUgHaJE&pid=Api&P=0&h=180',
            type: 'womens sandals',
            price: 1210.00
        }
    ])
    const [electricaldata, updateelectricaldata] = useState([
        {
            id: 1,
            name: 'kinetix watch',
            image: 'https://tse4.mm.bing.net/th?id=OIP.-qQjbwHJRYwnrx_vEhQZnwHaFj&pid=Api&P=0&h=180',
            type: 'Electrical',
            price: 350.00
        },
        {
            id: 2,
            name: 'Puma headphone',
            image: 'https://tse4.mm.bing.net/th?id=OIP.-IdQe8AUleQiwwnaYazM-wHaHa&pid=Api&P=0&h=180',
            type: 'Electrical',
            price: 950.00
        },
        {
            id: 3,
            name: 'Sparx watch',
            image: 'https://tse1.mm.bing.net/th?id=OIP.TsYesGC79wLv2SASsG1MRAHaFj&pid=Api&P=0&h=180',
            type: 'Electrical',
            price: 650.00
        },
        {
            id: 4,
            name: 'Redchief headphone',
            image: 'https://tse3.mm.bing.net/th?id=OIP.9dQ3Sb-Q0dLUCw-uZstS0wHaHa&pid=Api&P=0&h=180',
            type: 'Electrical',
            price: 1250.00
        }
    ])


    const [getdata, updategetdata] = useState(undefined)

    return (
        <View >
            <Searchbar
                placeholder="Search"
                style={{ marginHorizontal: 20, marginTop: 20 }}
            />
            <Text style={{ marginLeft: 25, color: '#000', fontWeight: 'bold', marginTop: 15 }}>Categories</Text>
            <View style={{ justifyContent: 'space-evenly', backgroundColor: 'gray', paddingVertical: 10, flexDirection: 'row', height: 95, marginTop: 10 }}>
                <View>
                    <TouchableOpacity onPress={() => updategetdata(mendata)}>
                        <Image style={style.img} source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.SMKLgFi0xtn2uCagEna2RwHaHa&pid=Api&P=0&h=180' }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Men</Text>
                </View>

                <View>
                    <TouchableOpacity onPress={() => updategetdata(womendata)}>
                        <Image style={style.img} source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.EOrjUZhFAZc6XMFbplSw_QHaHa&pid=Api&P=0&h=180' }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Women</Text>
                </View>

                <View>
                    <TouchableOpacity onPress={() => updategetdata(electricaldata)}>
                        <Image style={style.img} source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.EpGeMms-B0TC0cTliTiMzgHaHa&pid=Api&P=0&h=180' }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Electrical</Text>
                </View>
            </View>
            <Text style={{ marginLeft: 25, color: '#000', fontWeight: 'bold', marginTop: 10,fontSize:18 }}>Best Selling</Text>
        <View>
            
        </View>
            <FlatList
                data={getdata}
                contentContainerStyle={{ paddingBottom: 250 }}
                renderItem={({ item, index }) =>
                    <View style={{borderWidth:1,borderColor:'green',marginVertical:10,borderRadius:30,marginHorizontal:5}}>
                        <TouchableOpacity onPress={()=> navigation.navigate('showwidescreen',{
                            name:item.name,
                            image:item.image,
                            type:item.type,
                            price:item.price
                        })}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <View>
                                    <Image style={style.flatlistimg} source={{ uri: item.image }} />
                                </View>
                                <View style={{marginTop:10,marginLeft:8}}>
                                    <Text style={{color:'black',fontWeight:'bold',fontSize:22}}>{item.name}</Text>
                                    <Text style={{color:'black',fontWeight:'bold'}}>{item.type}</Text>
                                    <Text style={{color:'black',fontWeight:'bold'}}> ₹ {item.price}</Text>
                                </View>
                            </View>

                        </TouchableOpacity>

                    </View>
                }>

            </FlatList>
        </View>
    )
}

const style = StyleSheet.create({
    img: {
        height: 60,
        width: 60,
        borderRadius: 60
    },
    flatlistimg: {
        height: 100,
        width: 100,
        borderRadius: 30
    }
})