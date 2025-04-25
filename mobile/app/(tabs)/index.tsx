import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">conta</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">1.356.00</ThemedText>
        <ThemedView style={styles.botoes}> 
          <Button
          onPress={() => {
            console.log('You tapped the button!');
          }}
          title="TRANSFERIR"
        />
          <Button
            onPress={() => {
              console.log('You tapped the button!');
            }}
            title="area pix"
          />
         
          <Button
            onPress={() => {
              console.log('You tapped the button!');
            }}
            title="PAGAR"
          />
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <Button
          onPress={() => {
            console.log('You tapped the button!');
          }}
          title="MEUS CARTÕES"
        />
        <ThemedText>
          gostando do aplicativo?
          avalie na Play Store
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">cartão de crédito</ThemedText>
        <ThemedText>
        fatura atual
        </ThemedText>
        1.098.00
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  botoes:{
    display:"flex",
    gap:"10px",
    
  }
});
