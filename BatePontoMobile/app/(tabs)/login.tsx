import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function LoginScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    fetch('http://192.168.3.224:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, email, senha }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Usuário ou senha inválidos');
        }
        return response.json();
      })
      .then((data) => {
        Alert.alert('Sucesso!', `Bem-vindo, ${data.nome}`);
         router.push('/batePonto'); // descomente para navegar
      })
      .catch((error) => {
        Alert.alert('Erro', error.message);
      });
  };

  return (
    <ImageBackground source={require('../../assets/images/fundo.jpeg')} style={styles.fundoPagina}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Login</Text>

          <Text style={styles.nomeIn}>Nome</Text>
          <Text style={styles.emailIn}>E-mail</Text>
          <Text style={styles.senhaIn}>Senha</Text>

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

          <TouchableOpacity style={styles.botaoLogin} onPress={handleLogin}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>

            <Text style= {styles.linkTexto}>Não tem uma conta?</Text>
                 <Link href="/" style= {styles.linkCadastro}>Cadastre-se</Link>
          
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
    height: 320,
    width: 300,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fafafa',
  },
  nomeIn: {
    color: '#fafafa',
    right: 85,
    top: 30,
  },
  emailIn: {
    color: '#fafafa',
    top: 120,
    right: 85,
  },
  senhaIn: {
    color: '#fafafa',
    top: 210,
    right: 85,
  },
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
  fundoPagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoLogin: {
    borderRadius: 12,
    backgroundColor: '#155a9c',
    width: 110,
    height: 40,
  },
  textoBotao: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginTop: 6,
  },
  linkTexto: {
  color: 'white',
  fontSize: 16,
  top: 140,
  right: 100,
  
},
//Link login
linkCadastro: {
  color: '#155a9c',
  fontSize: 16,
  textAlign: 'center',
  textDecorationLine: 'underline',
  top: 118,
  left: 25,
 
}, 
});
