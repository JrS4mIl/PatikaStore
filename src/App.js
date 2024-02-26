import React from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native';

function App(){

    return(
        <View>
            <Text style={styles.text}>PATIKASTORE</Text>
            <TextInput
                    style={styles.input}
                    placeholder="Ara..."
            />
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
    }
})

export default App