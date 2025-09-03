import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{fontSize:20}}>Página Home</Text>
      <Text style={{ color: 'red', fontSize:25, margin: 15 }}> 
        Curso Técnico em Informática 
      </Text>
      <Button title="Ir para Cadastro" onPress={()=> navigation.navigate('Cadastro')}/>
    </View>
  );
}
