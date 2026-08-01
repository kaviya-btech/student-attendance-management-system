import axios from "axios";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddStudent() {

  const [name, setName] = useState("");
  const [registerNo, setRegisterNo] = useState("");
  const [department, setDepartment] = useState("");


  const saveStudent = async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/students/addStudent",
        {
          name: name,
          register_no: registerNo,
          department: department
        }
      );

      alert(response.data.message);

    } catch(error) {

      console.log(error);
      alert("Student add failed");

    }

  };


  return (
    <View style={styles.container}>

      <Text style={styles.title}>Add Student</Text>


      <TextInput
        placeholder="Student Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />


      <TextInput
        placeholder="Register Number"
        style={styles.input}
        value={registerNo}
        onChangeText={setRegisterNo}
      />


      <TextInput
        placeholder="Department"
        style={styles.input}
        value={department}
        onChangeText={setDepartment}
      />


      <TouchableOpacity 
        style={styles.button}
        onPress={saveStudent}
      >
        <Text style={styles.buttonText}>
          Save Student
        </Text>

      </TouchableOpacity>


    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    justifyContent:"center",
    backgroundColor:"#fff"
  },

  title:{
    fontSize:28,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:25,
    color:"#2E86C1"
  },

  input:{
    borderWidth:1,
    borderColor:"#ccc",
    borderRadius:8,
    padding:12,
    marginBottom:15
  },

  button:{
    backgroundColor:"#2E86C1",
    padding:15,
    borderRadius:8
  },

  buttonText:{
    color:"#fff",
    textAlign:"center",
    fontSize:18,
    fontWeight:"bold"
  }

});