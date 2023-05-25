import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const GamesPage = () => {
  const handleGamePress = (game) => {
    console.log(`Iniciando o jogo ${game}`);
  };

  return (
    <ImageBackground source={require('./JA.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Escolha um jogo:</Text>
        <TouchableOpacity style={styles.gameButton} onPress={() => handleGamePress('Jogo 1')}>
          <Text style={styles.gameButtonText}>Jogo 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gameButton} onPress={() => handleGamePress('Jogo 2')}>
          <Text style={styles.gameButtonText}>Jogo 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gameButton} onPress={() => handleGamePress('Jogo 3')}>
          <Text style={styles.gameButtonText}>Jogo 3</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  gameButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  gameButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GamesPage;
