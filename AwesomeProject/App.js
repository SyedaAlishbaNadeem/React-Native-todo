
import React, { useState } from 'react'
import { Text, TextInput, View , StyleSheet , Button, TouchableOpacity, Image} from 'react-native'

export default function App() {

const [list, setList] = useState([])
const [hi, setHi] = useState('')

let add = () => {
  console.log("hey there");
  setList([...list, hi])
}


let del = (i) => {
console.log(i);
list.splice(i, 1)
setList([...list])
}



  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}> Hellow Notes </Text>
        {/* <Text  style = {{fontSize: 30}}> Hellow Notes </Text> */}

        <TextInput
          style={styles.input}
          placeholder="write your notes"
          onChangeText={(e) => setHi(e)}
        />

        <Button title="Add" onPress={add} sx={{backgroundColor: 'blue'}} />

        {/* CHECK HOW TO RENDER  */}
        {/* <Text> {hi} </Text>  */}

        {list.map((x, i) => (
          <View key={i} style={{flexDirection:'row'}}>
            <Text
              style={{
                backgroundColor: 'white',
                fontSize: 30,
                margin: 10,
                borderRadius: 5,
              }}>
              {x}
            </Text>


            {/* <TouchableOpacity>
<Button title="Delete" sx={{backgroundColor: 'blue'}} onPress={()=>del(i)}/>
            </TouchableOpacity> */}
 
          <TouchableOpacity onPress={()=>del(i)}>
<Image source={{uri: 'https://media.istockphoto.com/id/915338418/photo/garbage-can-with-delete-road-sign-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=O5TY1pyEsm6bNCjnjLJFNMc7zTufe69MXXY_V5nAasU='}} style={{width: 50, height: 50, borderRadius: 5, marginTop:8}}/>
            </TouchableOpacity> 
           
          </View>
        ))}





      </View>
    </>
  );
}




const styles = StyleSheet.create ({

container: {
  padding: 10,
  backgroundColor: "beige",
  marginVertical: 30,
  marginHorizontal: 30,
  height: "100%",
  
},

heading: {
  fontSize: 30,
  textAlign: "center",
  borderBottomWidth: 2,
  borderBottomColor: "yellow",
  marginBottom: 30,
  marginVertical: 30,
  marginHorizontal: 30,
  
},

input: {
  width: "100%",
  padding: 10, 
  fontSize: 20,
  borderWidth:2,
  borderColor: "yellow",
  backgroundColor: "white",
  marginVertical: 10,
}


})

// // npx react-native run-android
// // AwesomeProject















