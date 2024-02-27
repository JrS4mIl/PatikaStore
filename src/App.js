import React from 'react'
import {View,Text,StyleSheet,TextInput,FlatList,ScrollView} from 'react-native';
import ProductCard from './components/ProductsCard'
import product_data from './product_data.json'

function App(){
    const renderProduct=({item}) => <ProductCard product={item} />


    return(
        <View style={styles.container}>
            <Text style={styles.text}>PATIKASTORE</Text>
            <TextInput
                    style={styles.input}
                    placeholder="Ara..."
            />
            <View style={styles.flat}>
            <ScrollView
                  horizontal={true}
                  scrollEnabled={true}
                  showsHorizontalScrollIndicator={false}
                >
                <FlatList
                    numColumns={2}
                    data={product_data}
                    renderItem={renderProduct}
                            />
            </ScrollView>

            </View>
        </View>
    )



}
const styles=StyleSheet.create({
    text:{
        fontSize:30,
        color:'purple',
        fontWeight:'bold',
        margin:10
    },
    input:{
         height: 40,
         margin: 10,
         borderWidth: 1,
         padding: 8,
         borderRadius:12,
         backgroundColor:'#ECEFF1',
         borderColor:'white'
    },
    container:{
        padding:7,
        margin:4,


    },
    flat:{
        backgroundColor:"white",
        alignItems:"center",
        width:'99%',
        padding:1,





    }
})

export default App