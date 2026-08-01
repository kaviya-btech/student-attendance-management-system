import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";


export default function History() {

  const [history, setHistory] = useState<any[]>([]);


  const getHistory = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/attendance/history"
      );

      setHistory(response.data);

    } catch(error) {

      console.log(error);

    }

  };


  useEffect(() => {

    getHistory();

  }, []);



  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        Attendance History
      </Text>


      <FlatList

        data={history}

        keyExtractor={(item)=>item.id.toString()}


        renderItem={({item})=>(

          <View style={styles.card}>


            <Text>
              Name: {item.name}
            </Text>


            <Text>
              Register No: {item.register_no}
            </Text>


            <Text>
              Status: {item.status}
            </Text>


            <Text>
              Date: {item.date}
            </Text>


          </View>

        )}

      />


    </View>

  );

}



const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    backgroundColor:"#fff"
  },


  title:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:20,
    color:"#2E86C1"
  },


  card:{
    borderWidth:1,
    borderColor:"#ccc",
    padding:15,
    borderRadius:10,
    marginBottom:15
  }

});