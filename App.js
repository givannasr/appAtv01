import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [valor, setValor] = useState('gi');
  const handleChange = (event)=>{
    setValor(event.target.value);
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/originals/a4/fa/8c/a4fa8c0588f96c91989308c2448b095a.png' }}
        style={styles.logo}>
      </Image>
      <Text style={styles.texto}>Nome/Usuario:</Text>
      <TextInput style={styles.inputArea} placeholder='Escreva o seu nome' value={valor} onChange={handleChange} ></TextInput>
      <Text style={styles.texto}>Senha:</Text>
      <View style={styles.inputArea}>

        <TextInput placeholder='Insira sua senha'
          style={styles.input}
          value={input}
          onChangeText={(texto) => setInput(texto)}
          secureTextEntry={hidePass}
        ></TextInput>
        <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)} >{
          hidePass ?
            <Ionicons name='eye' color="#121212" size={25}></Ionicons>
            :
            <Ionicons name='eye-off' color="#121212" size={25}></Ionicons>
        }
        </TouchableOpacity>
      </View>
      {<Button title='Acessar' color='#121212' value={valor} onPress={() => Alert.alert(`Seja bem vindo ${valor}!`)}></Button>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'midnightblue'
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 50,
    margin: 10,
    marginTop: 1
  },
  inputArea: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    fontSize: 18
  },
  input: {
    width: '85%',
    height: 50,
    color: '#121212',
    padding: 8,
    fontSize: 18
  },
  icon: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: 'grey',
    margin: 10,
    fontWeight: 'bold',
    fontFamily: 'monospace'
  }
});