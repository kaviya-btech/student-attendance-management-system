import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";


export default function StudentList() {

  const [students, setStudents] = useState<any[]>([]);


  const getStudents = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/students/studentList"
      );

      setStudents(response.data);

    } catch (error) {

      console.log(error);

    }

  };


  useEffect(() => {

    getStudents();

  }, []);


  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Student List
      </Text>


      <FlatList

        data={students}

        keyExtractor={(item) => item.id.toString()}


        renderItem={({item}) => (

          <View style={styles.card}>

            <Text>
              Name: {item.name}
            </Text>

            <Text>
              Register No: {item.register_no}
            </Text>

            <Text>
              Department: {item.department}
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