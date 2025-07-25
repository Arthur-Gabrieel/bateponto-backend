import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';




export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

 

  

  const router = useRouter();

  const handleCadastro = () => {
    fetch('http://192.168.3.224:8080/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        email,
        senha,
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      return response.json();
    })
    .then((data) => {
      Alert.alert('Sucesso!', 'Usuário cadastrado com sucesso');
      setNome('');
      setEmail('');
      setSenha('');
    })
    .catch((error) => {
      Alert.alert('Erro', error.message);
    });
  };

  return (

 <ImageBackground source={require('../../assets/images/fundo.jpeg')}
 style={styles.fundoPagina}>

    <View style={styles.container}>
      <View style={styles.box}>

        <Text style={styles.title}>Cadastro</Text>


        <Text style= {styles.nomeIn}>Nome</Text>
        <Text style= {styles.emailIn}>E-mail</Text>
        <Text style= {styles.senhaIn}>Senha</Text>



        
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={nome}
          onChangeText={setNome}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o e-mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Digite a senha"
          value={senha}
          onChangeText={setSenha}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />

       <Text style= {styles.linkTexto}>Já tem uma conta?</Text>
       <Link href="/login" style= {styles.linkLogin}>Entrar</Link>

       

      <TouchableOpacity style={styles.botaoCadastrar} onPress={handleCadastro}>
  <Text style={styles.textoBotao}>Cadastrar</Text>
</TouchableOpacity>

    
      </View>
    </View>

    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  box: {
    // View transparente
    height: 320,
    width: 300,
    backgroundColor: 'rgba(0, 0, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fafafa',
   
  },
    //nome em cima do input Nome
  nomeIn: {
    color: '#fafafa',
    right: 85,
    top: 30,
    
  },
    //nome em cima do input E-mail
  emailIn: {
    color: '#fafafa',
    top: 120,
    right: 85,

  },
  //nome em cima do input Senha 
  senhaIn: {
    color: '#fafafa',
    top: 210,
    right: 85,
    
  },
  //Nome, E-mail, Senha 
  input: {
    height: 60,
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 16,
    paddingHorizontal: 10,
    marginBottom: 50,
    borderColor: 'gray',
    borderWidth: 2,
  },
  // fundo da pagina
  fundoPagina: {
    flex: 1,
    justifyContent: 'center',  // Centraliza verticalmente
    alignItems: 'center',
  },
//Texto ao lado de login
linkTexto: {
  color: 'white',
  fontSize: 16,
  
  top: 180,
  right: 115,
},
//Link login
linkLogin: {
  color: '#155a9c',
  fontSize: 16,
  textAlign: 'center',
  textDecorationLine: 'underline',
  top: 156,
  right: 10,
}, 
botaoCadastrar: {
  borderRadius: 12,
  backgroundColor: '#004d00',
  width: 110,
  height: 40,

},
textoBotao: {
  fontSize: 18,
  textAlign: 'center',
  color: 'white',
  marginTop: 6,
},


  
  
});
