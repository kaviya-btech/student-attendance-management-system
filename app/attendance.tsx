import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import axios from "axios";


export default function Attendance() {

  const [studentId, setStudentId] = useState("");


  const markAttendance = async (status:string) => {

    try {

      const response = await axios.post(
        "http://localhost:5000/attendance/markAttendance",
        {
          student_id: studentId,
          status: status
        }
      );


      alert(response.data.message);


    } catch(error) {

      console.log(error);
      alert("Attendance save failed");

    }

  };


  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        Mark Attendance
      </Text>


      <TextInput
        placeholder="Enter Student ID"
        style={styles.input}
        value={studentId}
        onChangeText={setStudentId}
        keyboardType="numeric"
      />


      <TouchableOpacity
        style={styles.button}
        onPress={() => markAttendance("Present")}
      >

        <Text style={styles.buttonText}>
          Present
        </Text>

      </TouchableOpacity>



      <TouchableOpacity
        style={[styles.button,{backgroundColor:"red"}]}
        onPress={() => markAttendance("Absent")}
      >

        <Text style={styles.buttonText}>
          Absent
        </Text>

      </TouchableOpacity>


    </View>

  );

}



const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    padding:20,
    backgroundColor:"#fff"
  },


  title:{
    fontSize:28,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:30,
    color:"#2E86C1"
  },


  input:{
    borderWidth:1,
    borderColor:"#ccc",
    borderRadius:8,
    padding:12,
    marginBottom:20
  },


  button:{
    backgroundColor:"#2E86C1",
    padding:15,
    borderRadius:8,
    marginBottom:15
  },


  buttonText:{
    color:"#fff",
    textAlign:"center",
    fontSize:18,
    fontWeight:"bold"
  }

});