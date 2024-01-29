import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, TouchableOpacity, ScrollView, SafeAreaView, Platform, } from 'react-native';
import { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [valor, setValor] = useState('');
  const handleChange = (event) => {
    setValor(event.target.value);
  }

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://i.pinimg.com/originals/a4/fa/8c/a4fa8c0588f96c91989308c2448b095a.png' }}
            style={styles.logo}>
          </Image>
          <View style={styles.margem}>
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
            {<Button title='Acessar' color='gray' value={valor} onPress={() => Alert.alert(`Seja bem vindo ${valor}!`)}></Button>}
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'midnightblue',
    paddingTop: 130,
    paddingBottom: 102,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  margem: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 15,
    margin: 10,
    height: 300,
    gap: 5,
  },
  inputArea: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 40,
    margin: 10,
    padding: 10,
    fontSize: 18,
  },
  input: {
    alignItems: 'center',
    width: '85%',
    height: 40,
    color: '#121212',
    fontSize: 18,
  },
  icon: {
    height: 50,
    alignItems: 'center',
    justifyContent:'center'
  },
  texto: {
    alignItems: 'center',
    color: 'grey',
    margin: 10,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  }
});